const { Timber } = require('@timberio/node')

const {TIMBER_ID, TIMBER_APIKEY} = process.env
const logger = new Timber(TIMBER_APIKEY, TIMBER_ID)

module.exports = {
  info: (text, extra) => {

    logger.info(text, {...extra, env: process.env.NODE_ENV}).then(val => {
      console.log('Logger:', val)
    })
  }
}