module.exports = {
  origin: (ctx) => {
    console.log(ctx.request)

    return '*'
  }
}