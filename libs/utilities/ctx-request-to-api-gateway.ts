import { APIGatewayProxyEvent, APIGatewayProxyEventHeaders, APIGatewayProxyEventMultiValueHeaders, APIGatewayProxyEventMultiValueQueryStringParameters, APIGatewayProxyEventQueryStringParameters, APIGatewayProxyResult } from "aws-lambda";
import Koa from "koa";

export const ctxRequestToApiGateway = (ctx: Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext, any>): APIGatewayProxyEvent => {
  return {
    body: ctx.body,
    headers: ctx.request.headers as APIGatewayProxyEventHeaders,
    multiValueHeaders: ctx.request.headers as APIGatewayProxyEventMultiValueHeaders,
    httpMethod: ctx.method,
    isBase64Encoded: false,
    path: ctx.request.path,
    queryStringParameters: ctx.request.query as APIGatewayProxyEventQueryStringParameters,
    pathParameters: null,
    multiValueQueryStringParameters: ctx.request.query as APIGatewayProxyEventMultiValueQueryStringParameters,
    stageVariables: null,
    resource: 'koa',
    requestContext: null,
  }
}