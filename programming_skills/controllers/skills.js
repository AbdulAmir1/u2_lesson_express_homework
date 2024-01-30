const skills = require('../models/skills')

const showAllSkills = (req, res) => {
  const allSkills = skills.getAll()
  //res.locals.allSkills = allSkills
  res.render('showAll', { skills: allSkills })
}

const newSkill = (req, res) => {
  res.render('newSkill')
}

const create = (req, res) => {
  console.log(req.body)
  skills.create(req.body)
  res.redirect('/skills')
}

const showSkill = (req, res) => {
  const skill = skills.getOne(req.params.id)
  res.locals.skill = skill
  res.render('showSkill')
}

const test = (req, res) => {
  // dreq.params.val = '123'
  res.render('test', { id1: req.params.val })
}

module.exports = {
  showAllSkills,
  newSkill,
  create,
  showSkill,
  test
}
