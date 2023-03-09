const dynamoose = require ('dynamoose');

const schema = new dynamoose.Schema ({
  id: String,
  name: String,
});

const peopleModel = dynamoose.model ('people', schema);

exports.handler = async event => {
  console.log ('The path parameter ', event.pathParameters);

  const response = {statusCode: null, body: null};

  try {
    let result = await peopleModel.scan ().exec ();
    console.log (result);
    response.body = JSON.stringify (result);
    response.statusCode = 200;
    console.log ('I am here');
  } catch (e) {
    response.body = JSON.stringify (e.message);
    response.statusCode = 500;
  }
  return response;
};
