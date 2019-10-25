const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/myDB.sqlite',
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const models = require("./models")
models.User.findAll()
    .then((users) => {
        console.log(users)
    })
  


module.exports = sequelize

