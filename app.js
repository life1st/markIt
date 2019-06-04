const koa = require('koa')
const {public, data} = require('./src/router')
const cors = require('@koa/cors')
const corsConfig = require('./src/utils/cors')
// const errHandler = require('./src/utils/errHandler')
const static = require('koa-static')
const {CLIENT_PATH} = require('./src/utils/verb')

const PORT  = 80

const app = new koa()

// .use(errHandler)
app
.use(cors(corsConfig))
.use(public.middleware())
.use(data.middleware())
.use(static(CLIENT_PATH))
.listen(PORT, () => {
  console.log(`server started@${PORT}`)
})
