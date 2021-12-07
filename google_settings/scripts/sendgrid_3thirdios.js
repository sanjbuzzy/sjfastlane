#! /usr/bin/env node

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'devops@buzzy.buzz',
    from: 'devops@buzzy.buzz',
    subject: 'ThreeThird iOS App Build CI run status',
    text: 'ThreeThirds Business Apps iOS App Build CI is Completed',  
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));
 