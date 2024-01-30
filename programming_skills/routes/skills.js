var express = require('express')
var router = express.Router()
const skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.showAllSkills)

/* GET skills/add */
router.get('/add', skillsCtrl.newSkill)

/* POST skills/add */
router.post('/add', skillsCtrl.create)

module.exports = router
