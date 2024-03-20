import Html from '@kitajs/html'
import Koa from 'koa'
import { renderPage } from './render-page'
import { Index } from '../client/pages/index'
import { ctxRequestToApiGateway } from '../../libs/utilities/ctx-request-to-api-gateway'
import { apiGatewayToCtxResponse } from '../../libs/utilities/api-gateway-to-ctx-response'
import { loginHandler } from './lambdas/login'
import { homeHandler } from './lambdas/home'
import { indexHandler } from './lambdas'

const app = new Koa()

const port = process.env.PORT || 3000

app.use(async ctx => {
  if(ctx.request.path === ('/')) {
    const requestEvent = ctxRequestToApiGateway(ctx)
    const apiGatewayResponse = await indexHandler(requestEvent)
    apiGatewayToCtxResponse(apiGatewayResponse, ctx)
    return
  }
  if(ctx.request.path === ('/login')) {
    const requestEvent = ctxRequestToApiGateway(ctx)
    const apiGatewayResponse = await loginHandler(requestEvent)
    apiGatewayToCtxResponse(apiGatewayResponse, ctx)
    return
  }
  if(ctx.request.path === ('/home')) {
    const requestEvent = ctxRequestToApiGateway(ctx)
    const apiGatewayResponse = await homeHandler(requestEvent)
    apiGatewayToCtxResponse(apiGatewayResponse, ctx)
    return
  }

  ctx.response.body = renderPage({ children: <div><h1>hello</h1></div> })
})

app.listen(port)


console.log(`🚀 Koa server listening on http://localhost:${port}`)
