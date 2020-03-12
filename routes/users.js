const express = require('express');
const router = express.Router();


//loginpage
router.get('/login', (req, res) => res.render('login'));


//registerpage
router.get('/register', (req, res) => res.render('register'));

//dashboard
router.get('/dashboard', (req, res) => res.render('dashboard'));


//reports
router.get('/reports', (req, res) => res.render('report'));

//message
router.get('/messages', (req, res) => res.render('message'));


//chart
router.get('/charts', (req, res) => res.render('chart'));

//user
router.get('/user', (req, res) => res.render('user'));

//maps
router.get('/maps', (req, res) => res.render('maps'));

//accounts
router.get('/accounts', (req, res) => res.render('account'));

//accounts
router.get('/profiles', (req, res) => res.render('profile'));

//register
router.get('/register', (req, res) => res.render('register'));

router.get('/Announcement', (req, res) => res.render('announcement'));


router.get('/chats', (req, res) => res.render('ChatDetails'));
router.get('/verify', (req, res) => res.render('verify'));
module.exports = router;