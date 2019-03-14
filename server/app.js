const koa = require('koa')
const router = require('./src/router')

const app = new koa()
app.use(router.middleware()).listen(3000, () => {console.log('server started@3000')})