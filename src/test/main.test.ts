import { APIGatewayProxyEvent } from "aws-lambda";
import { handler as lambdaHandler } from "../main/main";


describe('Unit test for app handler', function () {
  it('verifies successful response', async () => {
    const event: APIGatewayProxyEvent = {
      path: '/hello',
      queryStringParameters: {
        name: "Najim"
      }
    } as any
    const result = await lambdaHandler(event,{})

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(`Hello ${event.queryStringParameters.name}`);
  });
});