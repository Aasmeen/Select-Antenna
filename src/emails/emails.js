const sgmail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.API_KEY;

sgmail.setApiKey(sendgridAPIKey);

const sendEmail = (email,text)=>{
    sgmail.send({
        to: email,
        from: process.env.EMAIL,
        subject:'Thank You for contacting us!!',
        text: `We will get back to you soon. Thank You!!`
    })  
    sgmail.send({
        to: 'process.env.EMAIL',
        from: 'process.env.EMAIL',
        subject: 'Select Antenna Contact Us',
        text: `From ${email} : ${text}`
    })
}

module.exports = {
    sendEmail
}