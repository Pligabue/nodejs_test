var express = require('express');
var router = express.Router();

const { User, Post } = require("../db/models");
const bcrypt = require('bcryptjs');

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
            // attributes: ["firstName", "lastName", "email"],
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

router.post("/post/new", async (req, res) => {
    let { UserId, title, content } = req.body
    try {
        User.findOne({ 
            where: {id: UserId}
        }).then(user => {
            Post.create({title, content, UserId})
        }).catch(err => {
            throw err
        })
        let posts = await Post.findAll({
            attributes: ["title", "content"],
            include: [{
                model: User,
                attributes: ["firstName", "lastName", "email"]
            }]
        })
        res.send({
            message: "Success!",
            posts
        })
    } catch (error) {
        console.log(error);
        res.status(505).send({
            message: `505 Error: ${error}`
        })
    }
})

router.get("/post", async (req, res) => {

    posts = await Post.findAll({
        attributes: ["title", "content"],
        include: [{
            model: User,
            attributes: ["firstName", "lastName", "email"]
        }]
    })
    
    res.send({posts})
})

// router.post("/login", passport.authenticate("local"), (req, res) => {

// })

module.exports = router;
