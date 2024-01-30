var express = require('express')
var router = express.Router()
const skillsCtrl = require('../controllers/skills')

/* test */
router.get('/test/val/:val', skillsCtrl.test)

/* GET skills/id */
router.get('/:id', skillsCtrl.showSkill)

/* GET Skills listing. */
router.get('/', skillsCtrl.showAllSkills)

/* GET skills/add */
router.get('/add', skillsCtrl.newSkill)

/* POST skills/add */
router.post('/add', skillsCtrl.create)

module.exports = router
