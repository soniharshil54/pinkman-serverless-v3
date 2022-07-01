module.exports.handler = async (event) => {
  console.log('event', event);
  const params = event.queryStringParameters;
  const { hospitalName, envName } = params;

  const environments =  [
    {
      "hospitalName": "AG",
      "envName": "AG ENV",
      "description": "AG DESC",
    },
    {
      "hospitalName": "Einstein Medical Center",
      "envName": "Einstein Medical Center ENV",
      "description": "Einstein Medical Center DESC",
    },
  ]

  const environment = environments.find((env) => env.hospitalName === hospitalName && env.envName === envName)
  const responseBody = {
    data: environment
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
