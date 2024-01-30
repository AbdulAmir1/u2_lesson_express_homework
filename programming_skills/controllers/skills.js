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

module.exports = {
  showAllSkills,
  newSkill,
  create
}
