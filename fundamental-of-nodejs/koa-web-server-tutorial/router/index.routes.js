const Router = require('koa-router')

const router = new Router({
  prefix: '/index'
});

router.get('/', ctx => {
  ctx.body = '<h1>INDEX</h1>'
})

module.exports = router;