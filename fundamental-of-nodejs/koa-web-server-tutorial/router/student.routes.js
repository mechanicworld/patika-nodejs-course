const Router = require('koa-router');

const {createStudent, getStudents} = require('../api/student.api');

const router = new Router({
  prefix: '/student'
});

router.post('/', ctx => {
  let student = ctx.request.body;
  student = createStudent(student);
  ctx.response.status = 201;
  ctx.body = student;
})

router.get('/',ctx => {
  ctx.body = getStudents();
})

module.exports = router;