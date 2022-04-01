const Router = require('koa-router')

const router = new Router({
  prefix: '/about'
});

router.get('/', ctx => {
  ctx.body = '<h1>ABOUT</h1>'
})

module.exports = router;