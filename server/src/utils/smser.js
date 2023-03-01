const twilio = require('twilio');
const config = {
    TWILIO_ACCOUNT_SID: 'ACed1baa6bafad9ffd7aa114fda8c8939b',
    TWILIO_AUTH_TOKEN: '4eae0260fffdcf1ccd91acfb75399b77',
    TWILIO_PHONE_NUMBER: '+19707070769',
}

const client = twilio(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);

module.exports.sendConfirmationSMS = (toNumber, confirmationTxt) => {
    // client.messages.create({
    //     to: toNumber,
    //     from: config.TWILIO_PHONE_NUMBER,
    //     body: confirmationCode
    // }).then(function(message) {
    // // When we get a response from Twilio, respond to the HTTP POST 
    // console.log(message)
    // return message;
    // }).catch(err => console.log(err));
    try {
        return new Promise((success, fail) => {
            client.messages.create({
                to: '+' + toNumber,
                from: config.TWILIO_PHONE_NUMBER, // Twilio Number
                body: confirmationTxt },
                (error, message) => {
                    if (error) {
                        fail(error)
                    } else {
                        success({ toNumber, confirmationTxt })
                    }
                }
            )
        })
    } catch (error) {
        return error
    }
    
  };