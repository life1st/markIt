const fs = require('fs')
const {CLIENT_PATH} = require('./verb')
const logger = require('./log')

const errHandler = async (ctx, next) => {
  await next()
  
  console.log(ctx.status, ctx.req.url, !!ctx.body)
  logger.info(`request: ${ctx.req.url}`, {
    status: ctx.status,
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