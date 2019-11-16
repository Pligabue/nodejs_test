const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const { User } = require("../db/models")
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy(
    function(email, password, done) {
        User.findOne({ email: email })
            .then(user => {
                if (!user) {
                    return done(null, false, { message: 'Incorrect e-mail.' });
                }
                if (!bcrypt.compareSync(password, user.hash)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            })
            .catch(err => {
                return done(err);
            });
    }
));
