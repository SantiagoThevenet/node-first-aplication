const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");



router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Contact'});
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});


async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "santidaw1234@gmail.com",
      pass: "qoheuyxtjpbqbefv",
    },
  });
  
  let info = await transporter.sendMail({
    from: '<santidaw1234@gmail.com>',
    to: "santidaw1234@gmail.com",
    subject: "Prueba contacto",
    html: "<b>Hello world?</b>",
  });
}

// main().catch(console.error);
module.exports = router;
