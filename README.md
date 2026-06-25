# CSF Membership Active

## Description

This is my quick and dirty node app to:

* Get CSF Membership from [CascadeShootingFacilities.org](https://www.cascadeshootingfacilities.org/membership/)
* Send email notification of membership CLOSE or OPEN status

## Requirements

* Node
* Dotenv
* Nodemailer

## References
* Node.js Send an Email [W3Schools.com](https://www.w3schools.com/nodejs/nodejs_email.asp)
* Nodemailer Well-Known Services [Nodemailer.com](https://nodemailer.com/smtp/well-known-services)
* Fix #AUTH005 Error [CDESoftware.com](https://support.cdesoftware.com/kb/a3802/fixing-the-535-5_7_0-auth005-too-many-bad-auth-attempts-error.aspx)
* Use Environment Variables [DEV.to](https://dev.to/siddharth151199/how-to-send-email-in-node-js-with-nodemailer-edb)

## Usage

### Step 1: Clone the repo and change to the working directory.

```bash
git clone https://github.com/mofo110/csf-membership.git
cd csf-membership
```

### Step 2: Install dependencies.
```bash
npm install
```

### Step 3: Create .env file with email service, username and password.
```bash
# .env
EMAIL_SERVICE=<your_email_service>
EMAIL_USER=<your_email_id>
EMAIL_PASS=<your_email_app_password>
```

### Step 4: Execute to get CSF Membership Link.

```bash
node get-csf-membership.js
<p style="text-align: center;">Click Here
Subject: CSF Membership is CLOSE!!!
Text: No link found.
◇ injected env (2) from .env // tip: ⌘ override existing { override: true }
Email sent: 250 OK , completed
```