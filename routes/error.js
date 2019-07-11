const express = require('express')
const router = express.Router()

const { log, chalk } = require('../utils')

router.use((request, response,next) => {
  const r = response.status(404)
  r.render('error/404.html')
})

router.use((error, request, response,next) => {
  // console.error(error.stack)
  log(chalk.white.bgBlack.bold(`error.stack`, error.stack))
  const r = response.status(500)
  r.render('error/500.html')
})

// app.use((request, response,next) => {
//     const r = response.status(404)
//     r.render('error/404.html')
// })

// app.use((error, request, response,next) => {
//     // console.error(error.stack)
//     log(chalk.white.bgBlack.bold(`error.stack`, error.stack))
//     const r = response.status(500)
//     r.render('error/500.html')
// })

module.exports = router