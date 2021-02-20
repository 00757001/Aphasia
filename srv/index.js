import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
const MongoStore = require('connect-mongo')(session);


export default (app, http) => {
  //Load Config
  var config = require('./config');
  app.use(express.json());
  app.use(cors({
    origin: config.cors.origin,
  }));
  //console.log(config.cors.origin);
  

  //Passport config
  require('./config/passport')(passport);


  //connect to mongoDB
  mongoose.connect(config.mongodb.URI,{ useNewUrlParser: true,useUnifiedTopology: true }).then(() => {});
 
  //configure body parser
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  //Sessions
  app.use(session({
    secret: 'keyboard cat',
    resave: false,//don't save a seesion if nothing is modified
    saveUninitialized: false, //false = do create a session until something is stored 
    store: new MongoStore({ mongooseConnection: mongoose.connection}),
    cookie: {maxAge: 60* 60 * 1000} //one hour expired
  }))

  //Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
  

  app.use('/', routes);
  
}
