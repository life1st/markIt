const path = require('path')

const koa = require('koa')
const router = require('./src/router')
const cors = require('@koa/cors')
const corsConfig = require('./src/utils/cors')
const static = require('koa-static')
const CLIENT_PATH = path.resolve(__dirname + '/../client/dist')

const app = new koa()

app
.use(static(CLIENT_PATH))
// .use(cors(corsConfig))
.use(router.middleware())
.listen(3000, () => {
  console.log('server started@3000')
})