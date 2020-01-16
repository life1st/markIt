const mongoose = require('mongoose')
const markListSchema = require('./schema')

const host = (password) => (`mongodb+srv://jiaoyang:${password}@cluster0-kyrqp.mongodb.net/test?retryWrites=true`)

let isConnected = false
const connect = (pwd) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(`${host(pwd)}/markit`, (err) => {
      if (err) {
        reject(err)
      }
      isConnected = true
      resolve()
    })
  })
}

if (process.env.MONGO_PWD && !isConnected) {
  console.log('connect db')
  connect(process.env.MONGO_PWD)
}

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