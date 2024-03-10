import Koa from 'koa'

const app = new Koa()

const port = process.env.PORT || 3000

app.use(async ctx => {
  ctx.body = 'hello koa'
})

app.listen(port)


console.log(`🚀 Koa server listening on http://localhost:${port}`)