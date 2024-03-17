import Html from '@kitajs/html'
import Koa from 'koa'
import { renderPage } from './render-page'
import { Home } from '../client/pages/index'
import { Login } from '../client/pages/login'

const app = new Koa()

const port = process.env.PORT || 3000

app.use(async ctx => {
  if(ctx.request.path === ('/')) {
    ctx.response.body = renderPage({ children: <Home />})
    return
  }
  if(ctx.request.path === ('/login')) {
    ctx.response.body = renderPage({ children: <Login />})
    return
  }
  ctx.response.body = renderPage({})
})

app.listen(port)


console.log(`🚀 Koa server listening on http://localhost:${port}`)
