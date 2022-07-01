module.exports.handler = async (event) => {
  console.log('event', event);
  const params = event.pathParameters;
  const { id } = params;
  console.log('params', params);

  const environments =  [
    {
      "id": "1",
      "hospitalName": "AG",
      "envName": "AG ENV",
      "description": "AG DESC",
    },
    {
      "id": "2",
      "hospitalName": "Einstein Medical Center",
      "envName": "Einstein Medical Center ENV",
      "description": "Einstein Medical Center DESC",
    },
  ]

  const updatedEnvironments = environments.filter((env) => env.id !== id)

  const responseBody = {
    data: updatedEnvironments
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
