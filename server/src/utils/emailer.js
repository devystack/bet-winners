const nodemailer = require("nodemailer");

const config = {
    userEmail: 'info@playge.to',
    userId: 'D893EE96E534354DB6775EFE58AEE499',
    password: '71BE7293915CCC56BBA8406C30A67350',
    host: 'smtp.sendlayer.net',
    port: 587
}

const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: false,
    auth: {
        user: config.userId,
        pass: config.password,
    },
    secureConnection: false,
    tls: {
            ciphers:'SSLv3'
        }
});

async function sample (req, res, next){
  try {
      console.log('connected to sample')
      res.json({list: 'okay'})
  } catch (error) {
      console.log('util/emailer/sample' + error)
  }
}

async function sendConfirmationEmail (email, confirmationCode){
  try {
    var result = await transport.sendMail({
      from: config.userEmail,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello</h2>
          <h5>Your verification code ${confirmationCode}</h5>
      </div>`,
      //     <a href=http://localhost:8081/confirm/${confirmationCode}> Click here</a>
    // }).catch(err => console.log(err));
    })
    console.log(result)
    return result
  } catch (error) {
      console.log('util/emailer/sample' + error)
  }
}
async function sendPassRecoverCode (email, newPass){
  try {
    var result = await transport.sendMail({
      from: config.userEmail,
      to: email,
      subject: "Recover Now",
      html: `<h2>A New Password Generated</h2>
          <h3>Your new password is ${newPass}</h3>
      </div>`,
    })
    return result
  } catch (error) {
      console.log('util/emailer/sample' + error)
  }
}



module.exports = {
  sendConfirmationEmail,
  sendPassRecoverCode,
  
};
