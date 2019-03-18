const mongoose = require('mongoose')
const markListSchema = require('./schema')

const host = (password) => (`mongodb+srv://jiaoyang:${password}@cluster0-kyrqp.mongodb.net/test?retryWrites=true`)

const connect = (pwd) => {
  mongoose.connect(`${host(pwd)}/markit`)
}

process.env.NODE_ENV === 'dev' && connect(require('../../.env.dev').mongo_pwd)

const db = mongoose.connection
db.on('error', err => {
  console.log(err, 'mongo erred.')
}).once('open', callback => {
  console.log('mongo connected.')
})

const listModel = db.model('markList', markListSchema)

module.exports = {
  db, listModel, connect
}