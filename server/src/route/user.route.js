const express = require('express')
const router = express.Router()
const passport = require('passport');

const UserCtrl = require('../controller/user.controller')


router.route('/sign-up').post(UserCtrl.userSignUp)
router.route('/apiTest').post(UserCtrl.apiTest)

router.route('/sign-in').post(UserCtrl.userSignIn)
router.route('/sendEmailCode').post(UserCtrl.sendEmailCode)
router.route('/sendSmsCode').post(UserCtrl.sendSmsCode)
router.route('/recoverNow').post(UserCtrl.recoverNow)

router.route('/getUserData').post(passport.authenticate('jwt', {session: false}), UserCtrl.getUserData)
router.route('/savePassword').post(passport.authenticate('jwt', {session: false}), UserCtrl.savePassword)
router.route('/getNamePlayer').post(passport.authenticate('jwt', {session: false}), UserCtrl.getNamePlayer)
router.route('/getAccountItemPurchases').post(passport.authenticate('jwt', {session: false}), UserCtrl.getAccountItemPurchases)
router.route('/getDeletedItemHistory').post(passport.authenticate('jwt', {session: false}), UserCtrl.getDeletedItemHistory)
router.route('/getTradeHistory').post(passport.authenticate('jwt', {session: false}), UserCtrl.getTradeHistory)



module.exports = router
