const axios = require("axios");


const matchList = [];
async function sample (req, res, next){
    try {
        console.log('connected to sample')
        res.json({list: 'okay'})
    } catch (error) {
        console.log('api/controller/four.winner.service/sample' + error)
    }
}
async function updateMatchList() {
    try {
        console.log('updateMatchList')
        // matchList = []

        var url = "https://m.4winners.bet/Home/GetAllMatches";
        const { data } = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' } });
        console.log(data.leagues)
        if (data)
            matchList = data.leagues
        // console.log(matchList)
        // matchList.push(1)

        // console.log('connected to sample')
        // res.json({list: 'okay'})
    } catch (error) {
        console.log('api/controller/four.winner.service/addUser' + error)
    }
}
module.exports = {
    updateMatchList,
    matchList,
}