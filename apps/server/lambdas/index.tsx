import Html from '@kitajs/html';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { renderPage } from '../render-page';
import { Index } from '../../client/pages/index';


export const indexHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: await renderPage({ children: <Index />}),
  };
};