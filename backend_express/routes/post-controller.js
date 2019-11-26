var express = require('express');
var router = express.Router();

const { User, Post } = require("../db/models");
const bcrypt = require('bcryptjs');
const passport = require("passport")

const { isAuthorized } = require("./custom-middleware")

router.post("/post/new", async (req, res) => {
    let { userId, title, content } = req.body
    console.log(req.body);
    if (userId) {
        try {
            User.findOne({ 
                where: {id: userId}
            }).then(user => {
                Post.create({title, content, userId})
            }).catch(err => {
                throw err
            })
            
        } catch (error) {
            console.log(error);
            res.status(505).send({
                message: `505 Error: ${error}`
            })
        }
    }
})

router.post("/posts", isAuthorized, async (req, res) => {
    let { userId } = req.body 
    posts = await Post.findAll({
        attributes: ["id", "title", "content"],
        where: {userId}
    })
    res.send({posts})
})

module.exports = router;
