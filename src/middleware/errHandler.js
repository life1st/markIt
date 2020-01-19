const fs = require('fs')
const {CLIENT_PATH} = require('../utils/verb')
const logger = require('../utils/log')

const errHandler = async (ctx, next) => {
  await next()
  
  console.log(ctx.status, ctx.req.url, !!ctx.body)
  const ip = ctx.request.headers['x-real-ip']
  logger.info(`from: ${ip}, request: ${ctx.req.url}`, {
    status: ctx.status,
    ip,
    ua: ctx.request.headers['user-agent']
  })

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