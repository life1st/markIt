const fs = require('fs')
const { CLIENT_PATH } = require('../../app')

const errHandler = async (ctx, next) => {
  console.log(ctx.status)
  if (ctx.status === 404) {
    ctx.body = fs.readFileSync(CLIENT_PATH + '/index.html')
  }
  if (ctx.status !== 200) {
    ctx.body = 'Validation Error'
  }
}
module.exports = errHandler