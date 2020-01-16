const koa = require('koa')
const {public, data} = require('./src/router')
const cors = require('@koa/cors')
const corsConfig = require('./src/utils/cors')
const errHandler = require('./src/utils/errHandler')
const static = require('koa-static')
const {CLIENT_PATH} = require('./src/utils/verb')
const {connect} = require('./src/db/index')

const PORT  = 80

const app = new koa()

app
.use(errHandler)
.use(cors(corsConfig))
.use(public.middleware())
.use(data.middleware())
.use(static(CLIENT_PATH))
.listen(PORT, () => {
  console.log(`server started@${PORT}`)
})
