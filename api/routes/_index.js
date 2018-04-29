const withValidation = require('@abradley2/koa-validated-route')

module.exports = function (app) {
    app.use(withValidation.get('/hello', require('./hello').get))
}
