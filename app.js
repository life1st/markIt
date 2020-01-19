const koa = require('koa')
const {public, data} = require('./src/router')
const { dev } = require('./src/router/dev')
const cors = require('@koa/cors')
const corsConfig = require('./src/utils/cors')
const errHandler = require('./src/middleware/errHandler')
const static = require('koa-static')
const {CLIENT_PATH} = require('./src/utils/verb')

const app = new koa()

app
.use(errHandler)
.use(cors(corsConfig))
.use(public.middleware())
.use(data.middleware())
.use(dev.middleware())
.use(static(CLIENT_PATH))

module.exports = app.callback()