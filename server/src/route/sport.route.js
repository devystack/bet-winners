const express = require('express')
const router = express.Router()
const passport = require('passport');

const SportCtrl = require('../controller/sport.controller')


router.route('/getSportsList').post(SportCtrl.getSportsList)
router.route('/getSportBettingList').post(SportCtrl.getSportBettingList)
router.route('/getLiveMatches').post(SportCtrl.getLiveMatches)
router.route('/getResultData').post(SportCtrl.getResultData)






module.exports = router
