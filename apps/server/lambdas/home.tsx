import Html from '@kitajs/html';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { renderPage } from '../render-page';
import { Home } from '../../client/pages/home';


export const homeHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: await renderPage({ children: <Home />}),
  };
};