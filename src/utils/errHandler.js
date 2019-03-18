const errHandler = async (ctx, next) => {
  console.log(ctx.status)
  if (ctx.status !== 200) {
    ctx.body = 'Validation Error'
  }
}
module.exports = errHandler