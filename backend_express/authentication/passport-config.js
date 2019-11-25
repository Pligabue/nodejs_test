const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const { User } = require("../db/models")
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    function(email, password, done) {
        User.findOne({ where: { email: email } })
            .then(user => {
                if (!user) {
                    return done(null, false, { message: 'Incorrect E-mail or Password' });
                }
                if (!bcrypt.compareSync(password, user.hash)) {
                    return done(null, false, { message: 'Incorrect E-mail or Password' });
                }
                return done(null, user)
            })
            .catch(err => {
                return done(err, false, { message: "Serverside error" });
            });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    User.findByPk(id)
        .then((user) => {
            done(null, user);
        })
        .catch(err => {
            done(err)
        });
});