const nodeMailer = require("nodemailer");

exports.sendEmailWithNodemailer = (req, res, emailData) => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "", // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
      pass: "", // MAKE SURE THIS PASSWORD IS YOUR GMAIL APP PASSWORD WHICH YOU GENERATED EARLIER
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  return transporter.sendMail(emailData, (err, info) => {
    if (err) {
      console.log(`Problem sending email: ${err}`);
    } else {
      console.log(`Message sent: ${info.response}`);
      return res.json({
        success: true,
      });
    }
  });
};
