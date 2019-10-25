var express = require('express');
var router = express.Router();

const { User, Post } = require("../db/models");

/* GET home page. */
router.get("/userinfo", async (req, res) => {

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

router.post("/postinfo", async (req, res) => {
    data = req.body
    try {
        Post.update({
            title: data.title,
            content: data.content
        }, {
            where: {
                id: data.id
            }
        })
        users = await User.findAll({
            attributes: ["firstName", "lastName", "email"],
            include: [{
                model: Post,
                attributes: ["title", "content", "userId"]
            }]
        })
        res.send("Update successful!")
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: `505 Error: ${error}`
        })
    }
})

router.get("/postinfo", async (req, res) => {

    posts = await Post.findAll({
        attributes: ["title", "content", "userId"],
        include: [{
            model: User,
            attributes: ["firstName", "lastName", "email"]
        }]
    })
    
    res.send({posts})
})

module.exports = router;
