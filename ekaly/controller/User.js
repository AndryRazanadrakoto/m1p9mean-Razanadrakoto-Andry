const express = require("express");

const User = require("../model/User");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
        // Get user input
        let { name, email, password,role } = req.body;
        
        // Validate user input
        if (!(email && password && name)) {
            res.status(400).send("Tous les champs doit etre remplis");
        }
        email = email.toLowerCase();
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).send("L'utilisateur existe deja. Veuiller vous connecter");
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
            name,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
            role
        });
       
        // Create token
        const token = jwt.sign(
        { user_id: user._id, email,role: user.role },
            process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
        );
        // save user token
        user.token = token;
        // return new user
        res.status(201).send(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
});
app.post("/login", async (req, res) => {

    // Our login logic starts here
    try {
      // Get user input
        let { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("Tout les champs doit etre rempli");
        }
        // Validate if user exist in our database
        email = email.toLowerCase();
        const user = await User.findOne({ email });
       
        if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
            const token = jwt.sign(
                { user_id: user._id, email,role: user.role },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            // save user token
            user.token = token;

            // user
            res.status(200).send(user);
        } else {
            res.status(400).send("email or password invalid");
        } 
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here
});
module.exports = app;
  