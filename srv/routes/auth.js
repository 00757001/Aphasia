const express = require("express");
const passport = require("passport");
var router = express.Router();
var config = require('../config');

//Auth with Google
// @route GET /auth/google
router.get('/google',passport.authenticate('google', { scope: ['profile'], prompt : "select_account"}));

//Google auth callback
// @route GET /auth/google/callback
//if fail => go to login page //if success => go to home page
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res
        //.cookie('name',req.user?.googleId)
        .cookie('session',req.user?._id.toString(),{ maxAge: 60*60*1000})
        .redirect(`${config.cors.origin}/home/${req.user?.googleId}`);
    }
);

// @route GET /auth/google/logout
//Google logout
router.get('/google/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.clearCookie("session");
  res.redirect(config.cors.origin);
});

module.exports = router;