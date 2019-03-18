module.exports = {
  origin: (ctx) => {
    const origin = ctx.request.header.origin
    const accept_origins = [
      'https://marktool.now.sh',
      'https://mark.life1st.me'
    ]
    const accept_hosts = [
      'localhost'
    ]
    if (
      accept_hosts.some(host => origin.includes(host)) ||
      accept_origins.includes(origin)
    ) {
      return origin
    } else {
      ctx.status = 403
    }
  }
}