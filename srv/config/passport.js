var GoogleStrategy = require('passport-google-oauth20').Strategy;
import mongoose from 'mongoose';
const User = require('../models/User');
var config = require('./');

module.exports = function (passport){
    passport.use(new GoogleStrategy({
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: "/auth/google/callback"
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
            googleId : profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
        }
        try{
            let user = await User.findOne({ googleId: profile.id })
            if(user){
                done(null,user)
            } else{
                res.
                user = await User.create(newUser)
                done(null,user)
            }
        }catch (err){
            console.log(err)
        }


        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
      }
    ));
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
      
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}

