exports.handler = async event => {
  const data = { secret: process.env.SECRET }

  const pass = (data) => {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }

  return pass(data)
}