module.exports.handler = async (event) => {
  console.log('event', event);
  const params = JSON.parse(event.body)
  console.log('params', params);

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

  environments.push(params);

  const responseBody = {
    data: environments
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
