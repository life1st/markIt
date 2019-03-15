const mongoose = require('mongoose')
const list = new mongoose.Schema({
  name: String,
  times: Array
})

list.methods.add = function () {
  this.status.connectingCount++

  const timeStamp = new Date().getTime()
  this.times.push(timeStamp)
  this.save((err) => {
    if (!err) {
      this.status.connectingCount--
    }
  })
}

module.exports = list