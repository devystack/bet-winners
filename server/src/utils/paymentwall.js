var Paymentwall = require('paymentwall');
async function sample (req, res, next){
    try {
        console.log('connected to sample in mssql')
        res.json({list: 'okay'})
    } catch (error) {
        console.log('util/mssql/sample' + error)
    }
  }
  async function test (req, res, next){
    try {
        console.log('connected to sample in mssql')
        res.json({list: 'okay'})
    } catch (error) {
        console.log('util/mssql/sample' + error)
    }
  }
    
module.exports = {
    test
  }