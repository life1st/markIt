const mongoose = require('mongoose')
const list = new mongoose.Schema({
  name: String,
  times: Array
})

list.methods.add = function () {
  const timeStamp = new Date().getTime()
  this.times.push(timeStamp)
  this.save()
}

module.exports = list