const express = require('express')

const router = express.Router()

const { log } = require('../utils')

router.get('/',(req,res) => {
    console.log(req)
    res.render('index.html')
    // res.render('error/404.html')
})

router.get('/local',(req,res) => {
    // Cookies that have not been signed
    log('Cookies: ', req.cookies)

    // Cookies that have been signed
    log('Signed Cookies: ', req.signedCookies)
    res.send('ok')
})






module.exports = router
