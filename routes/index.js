const express = require('express')
const router = express.Router()

// 
// const { log, chalk } = require('../utils')

// 
router.get('/',(req,res) => {
    res.render('index.html')
    // res.render('error/404.html')
})

router.get('/local',(req,res) => {
    // log(chalk.red.bgRed.bold(`Cookies: ${req.cookies}`))
    // log(chalk.red.bgRed.bold('Signed Cookies: ', req.signedCookies))
    // Cookies that have not been signed
    // log('Cookies: ', req.cookies)
    // Cookies that have been signed
    // log('Signed Cookies: ', req.signedCookies)
    let d = {
        "message": "this is api success message",
        "data": null
    }
    res.send(JSON.stringify(d))
})

module.exports = router
