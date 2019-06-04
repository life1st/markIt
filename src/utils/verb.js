const path = require('path')

const root = process.cwd()

const CLIENT_PATH = path.resolve(root + '/static/dist')

module.exports = {
  CLIENT_PATH
}