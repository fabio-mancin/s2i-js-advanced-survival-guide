exports.handler = async event => {
  const API_KEY =  process.env.API_KEY

  const response = await fetch(`endpoint/parameters&API_KEY=${API_KEY}`)
  const data = await response.json() 

  const pass = (data) => {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }

  return pass(data)
}