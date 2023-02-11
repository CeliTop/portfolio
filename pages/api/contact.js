export default async function contact(req, res) {
  const { name, email, message } = req.body;

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
    secure: true,
  });

  let mailData = {
    from: `${name} <${email}>`,
    sender: `${name} <${email}>`,
    replyTo: `${name} <${email}>`,
    to: process.env.GMAIL_EMAIL,
    subject: `[Portfolio] Message From ${name}`,
    text: `${message}\n Message sent from message form on the portfolio by ${name}: ${email}`,
    html: `<div>${message}</div><p>Message sent from message form on the portfolio by ${name}: ${email}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  });

  // Can't use it while the website is hosted on Vercel because of the Serverless Function Execution Timeout
  /*   let responseMail = {
    from: `Célian DEBÉTHUNE <${process.env.GMAIL_EMAIL}>`,
    to: email,
    subject: `Message received`,
    text: `Your message sent from my portfolio has been received, I will process it as soon as possible.\n\nThis message was sent automatically.`,
    html: `<p>Your message sent from my portfolio has been received, I will process it as soon as possible.</p><p>This message was sent automatically.</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(responseMail, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  }); */

  res.status(200);
  res.send();
}
