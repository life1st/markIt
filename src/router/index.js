const router = require('koa-joi-router')
const Joi = router.Joi
const {db, listModel, connect} = require('../db/index')

const public = router()

public.prefix('/api')
.get('/markit', async ctx => {
  const res = await listModel.find()

  ctx.body = res.map(item => ({
    name: item.name,
    times: item.times
  }))
})
.get('/markit/:name', async ctx => {
  const name = ctx.captures[0]

  const list = await listModel.findOne({name}, null)
  
  if (list) {
    ctx.body = {name: list.name, times: list.times}
  } else {
    ctx.status = 404
    ctx.body = 'not found'
  }
})
.post('/markit/:name', async ctx => {
  const name = ctx.captures[0]
  await listModel.findOne({name}, null, (err, list) => {

    if (err) ctx.body = 'not found'

    if (list) {
      list.add()
      ctx.body = list
    } else {
      let listEntity = new listModel({name})
      listEntity.add()

      ctx.body = listEntity
    }
  })
})
.delete('/markit/:name', async ctx => {
  const name = ctx.captures[0]

  await listModel.deleteOne({name}, err => {
    if (err) {
      ctx.status = 403
      ctx.body = {status: 'error'}
    } else {
      ctx.body = {status: 'ok'}
    }
  })
})

const data = router()

data.prefix('/api')
.post('/db/connect/:pwd', async ctx => {
  const pwd = ctx.captures[0]
  try {
    await connect(pwd)
    
    ctx.body = {status: 'ok'}
  } catch (e) {
    ctx.status = 500
    ctx.body = {status: false}
  }
})

module.exports = {public, data}