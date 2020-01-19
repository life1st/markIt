const fs = require('fs')
const {CLIENT_PATH} = require('./verb')

const errHandler = async (ctx, next) => {
  await next()
  
  console.log(ctx.status, ctx.req.url, !!ctx.body)
  if (ctx.status !== 200 && !ctx.body) {
    ctx.body = {
      ok: false,
      msg: 'Validation Error'
    }
  } else if (ctx.body) {
    ctx.status = 200
  }
}
module.exports = errHandler