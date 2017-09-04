const express = require('express')

const router = express.Router()

const { log } = require('../utils')

router.get('/',(req,res) => {
    res.render('index/index.html')
})

router.get('/index/vip_login',(req,res) => {
    res.render('index/login.html')
})

router.get('/index/forum_home',(req,res) => {
    res.render('forum/index.html')
})

// router.get('/local',(req,res) => {
//     // Cookies that have not been signed
//     log('Cookies: ', req.cookies)
//     // Cookies that have been signed
//     log('Signed Cookies: ', req.signedCookies)
//     res.send('ok')
// })






module.exports = router
