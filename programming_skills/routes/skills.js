var express = require('express')
var router = express.Router()
const skillsCtrl = require('../controllers/skills')

/* test */
router.get('/test/val/:val', skillsCtrl.test)

/* GET skills/add */
router.get('/add', skillsCtrl.newSkill)

/* GET skills/id */
router.get('/:id', skillsCtrl.showSkill)

/* GET Skills listing. */
router.get('/', skillsCtrl.showAllSkills)

/* POST skills/add */
router.post('/add', skillsCtrl.create)

// DELETE /skills/:id
router.delete('/:id', skillsCtrl.deleteSkill)

/* UPDATE skills/:d */
router.put('/:id', skillsCtrl.editSkill)

module.exports = router
