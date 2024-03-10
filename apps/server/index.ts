import Koa from 'koa'
import { renderPage } from './render-page'

const app = new Koa()

const port = process.env.PORT || 3000

app.use(async ctx => {
  ctx.response.body = renderPage(1232)
})

app.listen(port)


console.log(`🚀 Koa server listening on http://localhost:${port}`)