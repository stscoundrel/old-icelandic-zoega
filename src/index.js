const { read } = require('./services/reader')
const { ZOEGA_JSON, NO_MARKUP_JSON } = require('./constants/paths')

const getDictionary = () => {
  const words = read(ZOEGA_JSON)

  return words
}

const getNoMarkupDictionary = () => {
  const words = read(NO_MARKUP_JSON)

  return words
}

module.exports = {
  getDictionary,
  getNoMarkupDictionary,
}
