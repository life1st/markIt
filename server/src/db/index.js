const mongoose = require('mongoose')
const markListSchema = require('./schema')

const host = (password) => (`mongodb+srv://jiaoyang:${password}@cluster0-kyrqp.mongodb.net/test?retryWrites=true`)

const connect = (pwd) => {
  mongoose.connect(`${host(pwd)}/markit`)
}

const db = mongoose.connection

db.status = {
  isConnected: false,
  connectingCount: 0
}
db.on('error', err => console.log(err, 'mongo erred.'))
db.once('open', callback => {
  db.isConnected = true
  console.log('mongo connected.')
})

setInterval(() => {
  if (db.status.isConnected && db.status.connectingCount <= 0) {
    db.status.isConnected = false
    db.status.connectingCount = 0

    db.disconnect()
  }
}, 1000 * 60 * 60);

const listModel = db.model('markList', markListSchema)

module.exports = {
  db, listModel, connect
}