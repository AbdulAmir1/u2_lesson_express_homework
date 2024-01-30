const skills = [
  { id: 145564, name: 'HTML', description: 'Hyper Text Markup Langrauge' },
  {
    id: 234099,
    name: 'Javascript',
    description: 'Programming Language of Everyday'
  },
  { id: 146751, name: 'CSS', description: 'Cascaded Style Sheets' }
]

const getAll = () => {
  return skills
}

const create = (newSkill) => {
  const newId = Math.floor(Date.now() / 10000000)
  skills.push({
    id: newId,
    name: newSkill.skillName,
    description: newSkill.description
  })
}

const getOne = (id) => {
  return skills.find((skill) => skill.id === parseInt(id))
}

module.exports = {
  getAll,
  create,
  getOne
}
