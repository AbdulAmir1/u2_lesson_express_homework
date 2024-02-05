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

const deleteOne = (id) => {
  const deleteIndex = skills.findIndex((skill) => skill.id === parseInt(id))
  // delete from skills array
  skills.splice(deleteIndex, 1)
}

const update = (updatedSkillId, updatedSkill) => {
  updatedSkillId = parseInt(updatedSkillId.split('=')[1])
  deleteOne(updatedSkillId)
  console.log('updatedSkillId is ', updatedSkill)
  skills.push({
    id: updatedSkillId,
    name: updatedSkill.skillName,
    description: updatedSkill.description
  })
}

module.exports = {
  getAll,
  create,
  getOne,
  deleteOne,
  update
}
