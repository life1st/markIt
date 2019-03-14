const mongoose = require('mongoose')
const markListSchema = require('./schema')

const HOST = 'mongodb://127.0.0.1'
mongoose.connect(`${HOST}/markit`)

const db = mongoose.connection
db.on('error', err => console.log(err, 'mongo erred.'))
db.once('open', callback => {
  console.log('mongo connected.')
})

const listModel = db.model('markList', markListSchema)

module.exports = {
  db, listModel
}