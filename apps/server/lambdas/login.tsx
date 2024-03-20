import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { renderPage } from '../render-page';
import { Login } from '../../client/pages/login';
import Html from '@kitajs/html';

const COOKIE_MAX_AGE_30_DAYS = 30 * 24 * 60 * 60

export const loginHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  if(event.queryStringParameters.username && event.queryStringParameters.password) {
    return {
      statusCode: 302,
      body: '/home',
      headers: {
        location: '/home',
        "set-cookie": `twitter-auth=HelloFromTheClient; Secure; SameSite=Strict; HttpOnly; Max-Age=${COOKIE_MAX_AGE_30_DAYS}`,
      }
    }
  }
  return {
    statusCode: 200,
    body: await renderPage({ children: <Login />}),
  };
};