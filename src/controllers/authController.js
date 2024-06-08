// controllers/authController.js
const passport = require('passport');

exports.githubLogin = passport.authenticate('github', { scope: ['user:email'] });

exports.githubCallback = passport.authenticate('github', { failureRedirect: '/' });

exports.profile = (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.send(`<h1>Profile</h1><pre>${JSON.stringify(req.user, null, 2)}</pre><a href="/logout">Logout</a>`);
};

exports.logout = (req, res,next) => {
    req.logout(function(err){
        if(err){
            next(err)
        }
    });
    res.redirect('/');
};
