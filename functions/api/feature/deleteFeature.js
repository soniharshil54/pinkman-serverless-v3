const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const { FEATURE_TABLE } = process.env;

module.exports.handler = async (event) => {
  console.log('event', event);
  const params = event.pathParameters;
  const { id } = params;
  console.log('params', params);

  // const features =  [
  //   {
  //     "id": "1",
  //     "hospitalName": "AG",
  //     "envName": "AG ENV",
  //     "description": "AG DESC",
  //   },
  //   {
  //     "id": "2",
  //     "hospitalName": "Einstein Medical Center",
  //     "envName": "Einstein Medical Center ENV",
  //     "description": "Einstein Medical Center DESC",
  //   },
  // ]

  // const updatedFeatures = features.filter((env) => env.id !== id)

  const deleteParams = {
    TableName: FEATURE_TABLE,
    Key: {
      id,
    },
  };
  console.log('deleteParams', deleteParams);
  const deleteItemResponse = await docClient.delete(deleteParams).promise();
  console.log('deleteItemResponse', deleteItemResponse);
  const responseBody = {
    data: {}
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
