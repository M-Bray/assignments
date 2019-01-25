const logger = (req, res, next) => {
  console.log(`
  METHOD: ${req.method}
  URL: ${req.path}
  HOST: ${req.hostname}
  `);

  next()
}

module.exports = {
  logger
}