const fs = require('fs')
const Router = require('koa-router')
const router = new Router()

fs.readdirSync(__dirname).filter(file=>file!=='index.js').forEach(file=>{
    const r = require(`./${file}`)
    router.use(r.routes())
})
module.exports = router

