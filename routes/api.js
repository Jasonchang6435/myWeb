const express = require('express')
const router = express.Router()

// 
const User = require('../model/user.js')

router.get('/login', (req,res) => {
  const id = User.get()
  let d = {
      "message": "this is api success message" + id,
      "data": null
  }
  res.send(JSON.stringify(d))
})

module.exports = router