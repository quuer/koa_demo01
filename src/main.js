const app = require('./app/index')
const { APP_PORT } = require('./config/config.default')
app.listen(APP_PORT, () => {
  console.log(`◀◀◀http server is on http://127.0.0.1:${APP_PORT}`)
})


