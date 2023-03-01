const axios = require("axios");
const _ = require("lodash");

const fs = require("fs");
const path = require("path");
const dataDir = path.join(__dirname, "../data/");
const fourWinnerService = require('../service/four.winner.service')

async function sample (req, res, next){
    try {
        console.log('connected to sample')
        res.json({list: 'okay'})
    } catch (error) {
        console.log('api/controller/sport.controller/sample' + error)
    }
}

async function getSportsList (req, res, next){
    try {
        console.log('connected to getSportsList')
        var url = "https://m.4winners.bet/Home/GetAllMatches";
        const { data } = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' } });
        var list =
        _.chain(data.leagues)
        .groupBy("betradarSportId")
        .map((value, key) => ({ id: key, leagueList: value }))
        .value()
        res.json({list:list})
    } catch (error) {
        console.log('api/controller/sport.controller/getSportsList' + error)
    }
}
async function getSportBettingList (req, res, next){
    try {
        console.log('connected to getSportBettingList')
        console.log(req.body)
        let sportTypeId = req.body.sportTypeId
        let betradarCategoryId = 0
        var url;
        if (sportTypeId == 0) {
            url ="https://4winners.bet/Home/GetMatches?sportTypeId=1&betradarCategoryId=0&leagueName=&matchState=firstpage&startIndex=0&orderByLeague=false"
        } else {
            if (req.body.betradarCategoryId > -1)
                betradarCategoryId = req.body.betradarCategoryId
            // url = "https://4winners.bet/Home/GetMatches?sportTypeId=1&betradarCategoryId=0&leagueName=&matchState=home&startIndex=0&orderByLeague=false"
            if (req.body.leagueName == '') {
                url = `https://4winners.bet/Home/GetMatches?sportTypeId=${sportTypeId}&betradarCategoryId=${betradarCategoryId}&leagueName=&matchState=home&startIndex=0&orderByLeague=false`
            } else {
                console.log('dfejfiej')
                let leagueName = encodeURI(req.body.leagueName)
                // Gulf%20Cup
                url = `https://4winners.bet/Home/GetMatches?sportTypeId=${sportTypeId}&betradarCategoryId=${betradarCategoryId}&leagueName=${leagueName}&matchState=home&startIndex=0&orderByLeague=true`
            }
            console.log(url)

        }
        const { data } = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' } });
        // console.log(data)
        res.json({list: data})
    } catch (error) {
        console.log('api/controller/sport.controller/getSportBettingList' + error)
    }
}
async function getLiveMatches (req, res, next){
    try {
        console.log('connected to getLiveMatches')
        var url ="https://4winners.bet/Home/GetLiveMatches"
        const { data } = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' } });
        var list =
        _.chain(data.matches)
        .groupBy("match.betradarSport.name")
        .map((value, key) => ({ name: key, matches: value }))
        .value()
        res.json({list: list})

        // res.json({data: data})
    } catch (error) {
        console.log('api/controller/sport.controller/sample' + error)
    }
}
async function getResultData (req, res, next){
    try {
        console.log('connected to getResultData')
        var url ="https://4winners.bet/Home/GetFinishedMatches?betradarSportType=1&date=2023-01-12"
        const { data } = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' } });
        var list =
        _.chain(data)
        .groupBy("BASE.leagueName")
        .map((value, key) => ({ name: key, matches: value }))
        .value()
        res.json({list: list})

        // res.json({data: data})
    } catch (error) {
        console.log('api/controller/sport.controller/sample' + error)
    }
}
module.exports = {
    getSportsList,
    getSportBettingList,
    getLiveMatches,
    getResultData
}