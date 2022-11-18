

//-------------------------Require File 
const passport = require('passport')
const google = require('passport-google-oauth20');
var session = require('express-session');
const cookie = require('cookie-parser')



//------------------------Make Session And Serialize 
const oneDay = 1000*1000;//milisecound
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:({ maxAge: oneDay }) 
}));

app.use(passport.authenticate('session'));
passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


//----------------------New Strategy
passport.use(new google({
  clientID: '',
  clientSecret: '',
  callbackURL: '',
}, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken)
  done(null, {profile})
}))



//----------------Handle Request
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', "email"]
}))
app.get('/googleCallBack', passport.authenticate('google', {failureRedirect: '/fail'}),
  (req, res) => {
        console.log(req.user, req.isAuthenticated());
        res.send('user is logged in');
    })
app.get('/fail', (req, res) => {
  res.send('Log Err')
})

