var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/login", (req, res) => {
    console.log(req.body);
    // res.status(405).send({
    //     message: "Incorrect username or password"
    // });
    res.send(req.body);
})

module.exports = router;
