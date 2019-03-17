const path = require('path')

const koa = require('koa')
const {public, data} = require('./src/router')
const cors = require('@koa/cors')
const corsConfig = require('./src/utils/cors')
const static = require('koa-static')

const CLIENT_PATH = path.resolve(__dirname + '/static/dist')
const PORT  = 80

const app = new koa()

console.log(corsConfig)

app
.use(static(CLIENT_PATH))
.use(cors())
.use(public.middleware())
.use(data.middleware())
.listen(PORT, () => {
  console.log(`server started@${PORT}`)
})