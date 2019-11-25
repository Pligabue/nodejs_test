var express = require('express');
var router = express.Router();

const { User, Post } = require("../db/models");
const bcrypt = require('bcryptjs');
const passport = require("passport")

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

module.exports = router;
