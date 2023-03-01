var sql = require("mssql");
 // Global server
 var _config = {
    port: 1433,
    server: '194.180.176.237', 
    user: 'sa',
    database: 'RESOURCE',
    password: 'o@H811jKbvzc',
    stream: false,
    options: {
      trustedConnection: true,
      encrypt: true,
      enableArithAbort: true,
      trustServerCertificate: true,
    },
};
// Sea server
var config = {
  port: 1433,
  server: '194.180.176.237', 
  user: 'sa',
  database: 'RESOURCE',
  password: 'o@H811jKbvzc',
  stream: false,
  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};
// var config = {
//   port: 44523,
//   server: '15.235.180.150', 
//   user: 'webuser',
//   database: 'RESOURCE',
//   password: 'KsfskKO@ooO3#55',
//   stream: false,
//   options: {
//     trustedConnection: true,
//     encrypt: true,
//     enableArithAbort: true,
//     trustServerCertificate: true,
//   },
// };
async function sample (req, res, next){
  try {
      console.log('connected to sample in mssql')
      res.json({list: 'okay'})
  } catch (error) {
      console.log('util/mssql/sample' + error)
  }
}

async function setConnection(netType) {
  try {
    var connection;
    if (netType == 0) {
      connection = await sql.connect(_config);
    } else {
      connection = await sql.connect(config);
    }
    return connection;
  } catch (error) {
      console.log('util/mssql/setConnection' + error)
  }
}

async function checkUserInfo(_username, netType) {
  try {
    console.log(_username)
    var connection = await setConnection(netType)
    var request = new sql.Request(connection);
    var result =  await request.query(`SELECT * FROM ACCOUNT_INFO WHERE MEMBER_ID = '${_username}'`)
    connection.close()
    if (result.recordset.length > 0)
      return true
    else
      return false
  } catch (error) {
    console.log('util/mssql/checkUserInfo' + error)
  }
}

async function _getOnlinePlayerCount (netType){
  try {
    console.log('connected to _getOnlinePlayerCount in mssql')
    var connection = await setConnection(netType)
    var request = new sql.Request(connection);
    var result =  await request.query(`SELECT COUNT(*) AS OnlinePlayers FROM GE_DATA.dbo.SESSION_INFO where STATE > 0`)
    connection.close()
    return result.recordset
  } catch (error) {
    console.log('util/mssql/_getOnlinePlayerCount' + error)
  }
}

async function _saveUserInfo(data) {
    // console.log(data)
  var existed = await checkUserInfo(data.name, data.netType)
  if (existed) {
    console.log(`user ${data.name} already exists in ms database.`)
  } else {
    _savePassword(data.name, data.password, data.netType)
  }
}

async function _savePassword(name, password, netType) {
  try {
	console.log(name)
	console.log(password)
    var connection = await setConnection(netType)
    var request = new sql.Request(connection);
    var result =  await request.query(`EXECUTE RESOURCE.dbo.IMC_MEMBER_SET ${name}, '${password.toString()}'`)
//var result =  await request.query(`EXECUTE RESOURCE.dbo.IMC_MEMBER_SET ${name}, '11111111111111111111111111111111111111111111111111111111111'`)
    console.log(`The result of _savePassword at mssql`)
    console.log(result)
    connection.close()
  } catch (error) {
    console.log('util/mssql/_savePassword' + error)
  }
}
async function _saveItemInfo(name, item_id, count, netType) {

  try {
    var connection = await setConnection(netType)
    var request = new sql.Request(connection);
    var result =  await request.query(`EXECUTE GE_DATA.dbo.WEBBUY_SET_WEBBUYITEM ${name}, ${item_id}, ${count}`)
    console.log(`The result of _saveItemInfo at mssql`)
    console.log(result)
    connection.close()
  } catch (error) {
    console.log('util/mssql' + error)
  }
}
async function _getNamePlayer (_username, netType){
  try {
    console.log('connected to _getNamePlayer in mssql')
    // _username = 'system'
    var connection = await setConnection(netType)
    var request = new sql.Request(connection);
    var result =  await request.query(`SELECT * FROM GE_DATA.dbo.COMMANDER WHERE MEMBER_ID = '${_username}'`)
    console.log('the result from mssql')
    console.log(result)
    connection.close()
    return result.recordset
  } catch (error) {
    console.log('util/mssql/_getNamePlayer' + error)
  }
}

async function _getRotations (netType){
  try {
    console.log('connected to _getRotations in mssql')
    // _username = 'system'
    var connection = await setConnection(netType)
    var request = new sql.Request(connection);
    var result =  await request.query(`SELECT	[VALUE] AS JOB_ID FROM GE_DATA.dbo.WORLD_PROPERTY WITH(NOLOCK) WHERE	PROPERTY LIKE 'RotationChar%' AND	[VALUE] <> 0`)
    connection.close()
    return result.recordset
  } catch (error) {
    console.log('util/mssql/_getRotations' + error)
  }
}
async function _doChangeFamilyName (username, commander_id, newName, netType){
  try {
    console.log('connected to _doChangeFamilyName in mssql')
    var connection = await setConnection(netType)
    var request = new sql.Request(connection);
    var result =  await request.query(`DECLARE @RETURN_ERROR SMALLINT; EXECUTE GE_DATA.dbo.SERVICE_RENAME_COMMANDER @MEMBER_ID = '${username}', @COMMANDER_ID = '${commander_id}', @COMMANDER_CHANGE_NAME = '${newName}', @RETURN_ERROR = @RETURN_ERROR OUTPUT`)
    connection.close()
    return result.recordset
  } catch (error) {
    console.log('util/mssql/_doChangeFamilyName' + error)
  }
}
async function getDeletedItemHistory (user){
  try {
    console.log(user)
    var connection = await setConnection(user.netType)
    var request = new sql.Request(connection);
    console.log(`select top 50 item_name,ITEM_COUNT,ZONE_NAME,MEMBER_ID,COMMANDER_NAME,LOG_DATE from GE_LOG.DBO.ITEM_DELETE WHERE MEMBER_ID='${user.name}' order by LOG_DATE desc`)
    var result =  await request.query(`select top 50 item_name,ITEM_COUNT,ZONE_NAME,MEMBER_ID,COMMANDER_NAME,LOG_DATE from GE_LOG.DBO.ITEM_DELETE WHERE MEMBER_ID='${user.name}' order by LOG_DATE desc`)
    connection.close()
    return result.recordset
      // console.log('connected to sample in mssql')
      // res.json({list: 'okay'})
  } catch (error) {
      console.log('util/mssql/sample' + error)
  }
}
async function getTradeHistory (user){
  try {
    console.log(user)
    var connection = await setConnection(user.netType)
    var request = new sql.Request(connection);
    console.log(`select top 50 FROM_COMM_NAME,TO_COMM_NAME,ITEM_NAME,ITEM_ID,ITEM_COUNT,LOG_DATE from GE_LOG.DBO.ITEM_EXCHANGE where MEMBER_ID='${user.name}' or RECEIVER_MEMBER_ID='${user.name}'  order by LOG_DATE desc`)
    var result =  await request.query(`select top 50 FROM_COMM_NAME,TO_COMM_NAME,ITEM_NAME,ITEM_ID,ITEM_COUNT,LOG_DATE from GE_LOG.DBO.ITEM_EXCHANGE where MEMBER_ID='${user.name}' or RECEIVER_MEMBER_ID='${user.name}'  order by LOG_DATE desc`)
    connection.close()
    console.log(result.recordset)
    return result.recordset
      // console.log('connected to sample in mssql')
      // res.json({list: 'okay'})
  } catch (error) {
      console.log('util/mssql/sample' + error)
  }
}
module.exports = {
  _getOnlinePlayerCount,
  _saveUserInfo,
  _savePassword,
  _saveItemInfo,
  _getNamePlayer,
  _getRotations,
  _doChangeFamilyName,
  getDeletedItemHistory,
  getTradeHistory
}

