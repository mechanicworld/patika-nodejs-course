const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const StudentRoutes = require('./router/student.routes');
const IndexRoutes = require('./router/index.routes');
const AboutRoutes = require('./router/about.routes');




const app = new Koa();

app.use(bodyParser());

// // response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

app.use(StudentRoutes.routes())
  .use(StudentRoutes.allowedMethods())

app.use(IndexRoutes.routes())
  .use(IndexRoutes.allowedMethods());

app.use(AboutRoutes.routes())
  .use(AboutRoutes.allowedMethods());

app.listen(3000);