const router = require('koa-joi-router')
const Joi = router.Joi
const {db, listModel} = require('../db/index')

const public = router()

public.post('/markit/:name', async ctx => {
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
}).delete('/markit/:name', async ctx => {
  const name = ctx.captures[0]

  await listModel.deleteOne({name}, err => {
    if (err) ctx.body = {status: 'error'}

    ctx.body = {status: 'ok'}
  })
}).get('/markit', async ctx => {
  const res = await listModel.find()

  ctx.body = res.map(item => ({
    name: item.name,
    times: item.times
  }))
}).get('/markit/:name', async ctx => {
  const name = ctx.captures[0]

  await listModel.findOne({name}, null, (err, list) => {
    if (err) ctx.body = 'error'

    if (list) {
      ctx.body = {name: list.name, times: list.times}
    } else {
      ctx.body = 'not found'
    }
  })
})

module.exports = public