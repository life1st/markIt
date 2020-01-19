const router = require('koa-joi-router')

const dev = router()

dev.prefix('/api/dev')
.get('/env',  ctx => {

  const env = process.env

  ctx.body = env
})

module.exports = { dev }