import { APIGatewayProxyResult } from "aws-lambda";
import Koa from "koa";

export const apiGatewayToCtxResponse = (apiGatewayResponse: APIGatewayProxyResult, ctx: Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext, any> ): void => {
  ctx.response.body = apiGatewayResponse.body
  ctx.response.status = apiGatewayResponse.statusCode

  if(apiGatewayResponse.headers) { 
    Object.keys(apiGatewayResponse.headers).forEach(key => {
      const value = apiGatewayResponse.headers[key]
      if (typeof value === 'boolean') return

      ctx.set(key, `${value}`)
    })
  }
}