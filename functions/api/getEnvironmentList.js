module.exports.handler = async (event) => {
  console.log('event', event);

  const environments =  [
    {
      "hospitalName": "as.com",
      "envName": "as.com"
    },
    {
      "hospitalName": "Halcyon",
      "envName": "AG"
    },
    {
      "hospitalName": "Einstein Medical Center",
      "envName": "Einstein Medical Center"
    },
    {
      "hospitalName": "Sarah Test",
      "envName": "Sarah Demo"
    },
    {
      "hospitalName": "Uvalde Memorial Hospital",
      "envName": "Uvalde Memorial Hospital"
    },
    {
      "hospitalName": "AppGambit",
      "envName": "AppGambit"
    }
  ]
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
