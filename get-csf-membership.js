/**
 * CSF Membership page should have a link
 *     https://www.cascadeshootingfacilities.org/membership/
 */
getCSFMembership();

function getCSFMembership() {
    const https = require('https');

    const options = {
        hostname: 'www.cascadeshootingfacilities.org',
        port: 443,
        path: '/membership/',
        method: 'GET'
    };

    const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            getData(data);
        });
    });

    req.on('error', (error) => {
        console.error(error);
    });

    req.end();
}

function getData(data) {
    const regex = new RegExp(/<h1>Interested in becoming a member\?<\/h1>(.*?)<\/p>/);
    const match = regex.exec(data.replaceAll('\n', ''));

    if (match) {
        const clickHere = match[1].trim();
        getLink(clickHere);
    } else {
        console.log("No click here found.");
    }
}

function getLink(clickHere) {
    console.log(clickHere);

    const regex = new RegExp(/href="(.*?)"/);
    const match = regex.exec(clickHere.replaceAll('\n', ''));

    // Default to CLOSED and NO LINK FOUND
    let subject = 'CSF Membership is CLOSED :('
    let text = 'No link found.';

    if (match) {
        subject = 'CSF Membership is OPEN :)'
        text = match[1].trim();
    }
    
    email(subject, text)
}

function email(subject, text) {
    console.log("Subject: " + subject);
    console.log("Text: " + text);

    require('dotenv').config();
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: text
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}