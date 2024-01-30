const skills = require('../models/skills')

const showAllSkills = (req, res) => {
  const allSkills = skills.getAll()
  //res.locals.allSkills = allSkills
  res.render('showAll', { skills: allSkills })
}

module.exports = {
  showAllSkills
}
