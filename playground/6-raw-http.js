const https = require('https')

const secretKey = "b6acee7b148c3020c57e1712019f5380";
const urlBase = "https://api.darksky.net/forecast/";
const url = `${urlBase}${secretKey}/40,-75?units=si`;

const request = https.request(url, (response) => {
  let data = ''
  response.on('data', (chunk) => {
    data += chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)

  })

})

request.end()