const request = require('request')

const secretKey = 'b6acee7b148c3020c57e1712019f5380'
const position = '37.8267,-122.4233'
const urlBase = 'https://api.darksky.net/forecast/'

const url = `${urlBase}${secretKey}/${position}`


request(url, (error, response, body) => {
  // const data = JSON.parse(response.body) // that is the way used by the instructor
  const data = JSON.parse(body)
  console.log(data.currently)
});