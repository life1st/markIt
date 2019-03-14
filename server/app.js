const koa = require('koa')
const router = require('./src/router')
const cors = require('@koa/cors')
const corsConfig = require('./src/utils/cors')

const app = new koa()

app
.use(cors(corsConfig))
.use(router.middleware())
.listen(3000, () => {
  console.log('server started@3000')
})