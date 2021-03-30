import axios from "axios"

(async () => {
  const response = await axios.get(`/* */${process.env.API_KEY}`)
  const data = await response.data
  console.log(data)
})();