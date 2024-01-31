
const db = require('../../data/db-config.js')

const getAll = () => {
  return db('accounts')
  // DO YOUR MAGIC
}

const getById = id => {

  return db('accounts').where('id', id).first()
  // DO YOUR MAGIC
}

const create = async account => {
  const [id] = await db('accounts').insert(account)
  return getById(id)
  // DO YOUR MAGIC
}

const updateById = async (id, account) => {
  await db('accounts').where('id', id).update(account)
  return getById(id)
  // DO YOUR MAGIC
}

const deleteById = id => {
  return db('accounts').where('id', id).del()
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
