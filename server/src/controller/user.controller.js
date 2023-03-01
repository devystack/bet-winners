const jwt = require('jsonwebtoken');


const User = require("../model/user.model");

const config = require('../config/jwt.config');

var md5 = require('md5');
// var emailExistence = require('email-existence');
const emailvalidator = require("email-validator");
// const validatePhoneNumber = require('validate-phone-number-node-js');

const mssql = require('../utils/mssql');
var emailer = require('../utils/emailer');
var smser = require('../utils/smser')

async function sample (req, res, next){
    try {
        console.log('connected to sample')
        res.json({list: 'okay'})
    } catch (error) {
        console.log('api/controller/user.controller/sample' + error)
    }
}
async function apiTest (req, res, next){
    try {
        console.log('connected to apiTest')
        res.json({list: 'okay'})
    } catch (error) {
        console.log('api/controller/user.controller/apiTest' + error)
    }
}

async function userSignUp (req, res, next){
    try {
        console.log('connected to userSignUp')
        console.log(req.body)
        DBConfig.getAll( (err, data) => {
            if (data) {
                if ((req.body.netType == 0 && data[0].global == 0) || (req.body.netType == 1 && data[0].sea == 0)) {
                    User.findByName(req.body.username, (err, data) => {
                        if (err == 1) { // can create the user with the username
                            User.findByEmail(req.body.email, (err, data) => {
                                if (err == 1) {
                                    User.findByPhoneNumber(req.body.phoneNumber, (err, data) => {
                                        if (err == 1) {
                                            User.findBySender(req.body.email, (err, email) => {
                                                if (email) {
                                                    if (email.code == req.body.emailCode) {
                                                        User.findBySender(req.body.phoneNumber, (err, phoneNumber) => {
                                                            if (phoneNumber) {
                                                                if (phoneNumber.code == req.body.smsCode) {
                                                                    // creation of user
                                                                    var user_ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || req.socket.remoteAddress
                                                                    const user = new User({
                                                                        name: req.body.username,
                                                                        user_ip: user_ip,
                                                                        password: md5(req.body.password),
                                                                        email: req.body.email,
                                                                        phoneNumber: req.body.phoneNumber,
                                                                        // paymentwall: 0,
                                                                        coin: 0,
                                                                        netType: req.body.netType
                                                                    });
                                                                    User.create(user, async (err, user) => {
                                                                        if (user) {
                                                                            await mssql._saveUserInfo(user);
                                                                            res.send({user: user});
                                                                        } else
                                                                            res.send({message: 'Something went wrong.'})
                                                                    }); 
                                                                } else
                                                                    res.send({message: 'The sms verification code does not match'})
                                                            } else {
                                                                if (err == 1) {
                                                                    res.send({message: 'Your phone number does not match.'})
                                                                } else {
                                                                    res.send({message: 'Something went wrong.'})
                                                                }
                                                            }
                                                        })
                                                    } else  
                                                        res.send({message: 'The email verification code does not match'})
                                                } else {
                                                    if (err == 1) {
                                                        res.send({message: 'Email verification code does not match'})
                                                    } else {
                                                        res.send({message: 'Something went wrong.'})
                                                    }
                                                }
                                            })
                                        } else if (data) {
                                            res.send({message: `The user with the phone number ${req.body.phoneNumber} already exists.`})
                                        }
                                    })
                                } else if (data) {
                                    res.send({message: `The user with the phone email ${req.body.email} already exists.`})
                                }
                            })       
                        } else if (data) {
                            res.send({message: `The user with the username ${req.body.username} already exists.`})
                        }
                    });
                } else
                    res.send({message: 'You are doing violent action.'})
            } else {
                res.status(404).send()
            }
        });
    } catch (error) {
        console.log('api/controller/user.controller/userSignUp' + error)
    }
}
async function userSignIn (req, res, next){
    try {
        console.log('connected to userSignIn')
        console.log(req.body)
        DBConfig.getAll( (err, data) => {
            if (data) {
                if ((req.body.netType == 0 && data[0].global == 0) || (req.body.netType == 1 && data[0].sea == 0)) {
                    User.findByNameAndNetType(req.body, (err, user) => {
                        if (err == 1) {
                            res.send({type: 2}) // a user not found
                        } else {
                            if (user.password == md5(req.body.password)){
                                let payload = {}
                                payload.email = user.email
                                payload.id = user.id
                                let token = jwt.sign(payload, config.secret, {expiresIn: config.expires});
                                console.log(token)
                                res.send({user: user,  type: 1, token: token});
                            } else {
                                res.send({type: 3}) // wrong password
                            }
                        }
                    });
                } else
                    res.send({message: 'You are doing violent action.'})
            }
        });
    } catch (error) {
        console.log('api/controller/user.controller/userSignIn' + error)
    }
}
async function savePassword (req, res, next){
    try {
        console.log('connected to savePassword')
        console.log(req.body)

        User.findById(req.body.id, (err, user) => {
            if (user) {
                if (user.password == md5(req.body.oldPass)) {
                    user.password = md5(req.body.newPass)
                    User.updateById(req.body.id, user, async (err, result) => {
                        if (result) {
                            await mssql._savePassword(user.name, user.password, user.netType)
                            res.json({type: 0})
                        } else
                            res.send({type: 1})
                    })
                } else
                    res.json({type: 2}) // wrong password
            } else
                res.send({type: 1})
        })
    } catch (error) {
        console.log('api/controller/user.controller/savePassword' + error)
    }
}
async function sendEmailCode (req, res, next){
    try {
        console.log(req.body.email)
        Code.findBySender(req.body.email, async (err, data) => {
            if (err == 1) {
                if(emailvalidator.validate(req.body.email)){
                    var randomCode = Math.floor(100000 + Math.random() * 900000);
                    await emailer.sendConfirmationEmail(req.body.email, randomCode)
                    var code = new Code({
                        sender: req.body.email,
                        code: randomCode,
                        date: new Date()
                    })
                    Code.create(code, (err, db_result) => {
                        if (db_result)
                            res.send({type: 0})
                        else
                            res.send({type: 1})
                    })
        
                }else
                    res.send({type: 2}) // Invalid email
            } else if (data) {
                res.send({type: 3})
            }
        })
        
    } catch (error) {
        console.log('api/controller/user.controller/sendEmailCode' + error)
    }
}
async function sendSmsCode (req, res, next){
    try {
        console.log(req.body)
        Code.findBySender(req.body.phoneNumber, async (err, data) => {
            if (err == 1) {
                var randomCode = Math.floor(100000 + Math.random() * 900000);
                var txt = `[https://playge.to] Confirmation code: ${randomCode}`
                var result = await smser.sendConfirmationSMS(req.body.phoneNumber, txt)
                console.log(result)
                if (result.confirmationTxt){
                    var code = new Code({
                        sender: req.body.phoneNumber,
                        code: randomCode,
                        date: new Date()
                    })
                    Code.create(code, (err, db_result) => {
                        if (db_result)
                            res.send({type: 0})
                        else
                            res.send({type: 1})
                    })
                } else
                    res.send({type: 2})
            } else if (data) {
                res.send({type: 3})
            }
        })
        // var phoneno = /^\d{10}$/;
        // if(req.body.phoneNumber.match(phoneno)) {
            

        // } else
        //     res.send({type: 2})
    } catch (error) {
        console.log('api/controller/user.controller/sendEmailCode' + error)
    }
}
async function getUserData (req, res, next){
    try {
        // console.log('getUserData')
        User.findByName(req.user.name, (err, user) => {
            if (user) {
                res.send({user: user})
            } else {
                res.send({type: 2})
            }
        })
    } catch (error) {
        console.log('api/controller/user.controller/getUserData' + error)
    }
}
async function getNamePlayer (req, res, next){
    try {
        console.log('connected to getNamePlayer')
        console.log(req.body)
        let result = await mssql._getNamePlayer(req.user.name, req.body.netType)
        console.log(result)
        if (result.length > 0) {
            res.json({name: result[0].NAME})
        } else {
            res.json({name: 'No Family Created'})
        }
        // res.json({name: 'No Family Created'})

    } catch (error) {
        console.log('api/controller/user.controller/getNamePlayer' + error)
    }
}
async function getAccountItemPurchases (req, res, next){
    try {
        console.log('connected to getAccountItemPurchases')
        let obj = {}
        obj.user_id = req.user.id
        obj.currentPage = req.body.currentPage
        obj.perPage = req.body.perPage
        ItemMallHistory.getHistoryOnUserId (obj, (err, data) => {
            if (err == 1) {
                res.send({list: data, total: 0})
            } else if (err == 0){
                res.status(404).send()
            } else {
                ItemMallHistory.getTotalCountByUserId (obj, (err, count) => {
                    res.send({list: data, total: count.total})
                })
            }
        });
        // res.json({list: 'okay'})
    } catch (error) {
        console.log('api/controller/user.controller/getAccountItemPurchases' + error)
    }
}
async function recoverNow (req, res, next){
    try {
        console.log('connected to recoverNow')
        req.body.phoneNumber = req.body.phoneNumber.replace(/\D/g, '');
        User.findForRecover(req.body, async (err, user)=> {
            if (err){
                res.json({type: 1})// Something went wrong
            } else {
                if (user.length < 1) {
                    res.json({type: 2})// The user doesn't exist
                } else {
                    var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    var text = ''
                    for (var i = 0; i < 8; i++)
                        text += charset.charAt(Math.floor(Math.random() * charset.length));
                    console.log(text)
                    console.log(user)
                    var result = await emailer.sendPassRecoverCode(user.email, text)
                    console.log('result from emailer of sendPassRecoverCode')
                    console.log(result)
                    if (result.messageId) {
                        console.log('setting user password in DB')
                        user.password = md5(text)
                        User.updateById(user.id, user, async (err, result) => {
                            if (result) {
                                await mssql._savePassword(user.name, user.password, user.netType)
                                res.json({type: 0})
                            } else
                                res.send({type: 1})
                        })
                    } else 
                        res.json({type: 1})// Something went wrong

                }
            }
        })
    } catch (error) {
        console.log('api/controller/user.controller/recoverNow' + error)
    }
}
async function getDeletedItemHistory(req, res, next) {
    try {
        console.log('connected to getDeletedItemHistory')
        let deleted_list = await mssql.getDeletedItemHistory(req.user)
        res.json({deleted_list: deleted_list})
    } catch (error) {
        console.log('api/controller/user.controller/getDeletedItemHistory' + error)
    }
}
async function getTradeHistory(req, res, next) {
    try {
        console.log('connected to getTradeHistory')
        let exchange_list = await mssql.getTradeHistory(req.user)
        res.json({exchange_list: exchange_list})
    } catch (error) {
        console.log('api/controller/user.controller/getTradeHistory' + error)
    }
}

module.exports = {
    apiTest,
    userSignUp,
    userSignIn,
    savePassword,
    sendEmailCode,
    sendSmsCode,
    getUserData,
    getNamePlayer,
    getAccountItemPurchases,
    recoverNow,
    getDeletedItemHistory,
    getTradeHistory
}