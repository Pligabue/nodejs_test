var express = require('express');
var router = express.Router();

const { User, Post } = require("../db/models");
const bcrypt = require('bcryptjs');
const passport = require("passport")

router.get("/session", (req, res) => {
    req.user ? res.send(req.user) : res.status(401).send() 
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { return res.status(404).send({ message: info.message }) }
        if (!user) { return res.status(401).send({ message: info.message }) }
        req.logIn(user, console.log)
        return res.send(user)
    })(req, res, next)
})

router.get("/logout", (req, res) => {
    req.logout()
    res.send(req.isAuthenticated())
})

router.post("/user/new", async (req, res) => {
    let { firstName, lastName, email, password } = req.body
    try {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        User.findOrCreate({
            where: {email},
            defaults: {firstName, lastName, email, hash}
        })
        users = await User.findAll({
            attributes: ["firstName", "lastName", "email"],
            include: [{
                model: Post,
                attributes: ["title", "content", "userId"]
            }]
        })
        res.send({
            message: "Success!",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: `505 Error: ${error}`
        })
    }
})

router.get("/user", async (req, res) => {
    try {
        users = await User.findAll({
            attributes: ["firstName", "lastName", "email"],
            include: [{
                model: Post,
                attributes: ["title", "content", "userId"]
            }]
        })
        res.send({users})
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: `505 Error: ${error}`
        })
    }
})

module.exports = router;
