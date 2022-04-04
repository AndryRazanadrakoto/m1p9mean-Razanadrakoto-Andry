const express = require("express");
const app = express();
var nodemailer = require('nodemailer');
const auth = require("../middleware/auth");
app.post("/send",auth(), async (req, res) => {
  let { email, subject, text } = req.body;
  console.log(req.body)
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'andrinirinafanomezantsoa4@gmail.com',
      pass: '3717129631'
    }
  });
  
  var mailOptions = {
    from: 'andrinirinafanomezantsoa4@gmail.com',
    to: email,
    subject: subject,
    text: text
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send(error);
    } else {
      res.send(info.res);
    }
  });
});


module.exports = app;
  


