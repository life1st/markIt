const fs = require('fs')
const {CLIENT_PATH} = require('./verb')

const errHandler = async (ctx, next) => {
  console.log(ctx.status, ctx.req.url)

  await next()
  
  console.log(ctx.status, ctx.req.url, !!ctx.body)
  if (ctx.status !== 200 && !ctx.body) {
    ctx.body = {
      ok: false,
      msg: 'Validation Error'
    }
  }
}
module.exports = errHandler