var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' })
  res.redirect('/skills')
})

// GET add new skill page
router.get('/', function (req, res, next) {
  res.render('newSkill')
})

module.exports = router
