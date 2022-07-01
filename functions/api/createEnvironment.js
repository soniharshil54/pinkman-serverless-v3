const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const { ENVIRONMENT_TABLE } = process.env;

module.exports.handler = async (event) => {
  console.log('event', event);
  const params = JSON.parse(event.body)
  console.log('params', params);

  const putItemParams = {
    Item: params,
    TableName: ENVIRONMENT_TABLE,
    ReturnValues: 'ALL_OLD'
  };
  console.log('putItemParams', putItemParams);
  const putItemResponse = await docClient.put(putItemParams).promise();

  console.log('putItemResponse', putItemResponse);

  const responseBody = {
    data: putItemResponse
  }
  console.log('responseBody', responseBody);
  const response = {
    statusCode : 200,
    body : JSON.stringify(responseBody),
    isBase64Encoded : false,
    headers : {"content-type" : "application/json"}
  }
  return response;
}
