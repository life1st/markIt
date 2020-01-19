const path = require('path')

const root = process.cwd()

const CLIENT_PATH = path.resolve(root + '/static/dist')

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  CLIENT_PATH
}