const request = require("request");

const secretKey = "b6acee7b148c3020c57e1712019f5380";
const position = "37.8267,-122.4233";
const urlBase = "https://api.darksky.net/forecast/";

const url = `${urlBase}${secretKey}/${position}?units=si&language=fr`;

request({ url, json: true }, (error, response, body) => {
  // console.log(response.body.currently) // that is the way used by the instructor
  console.log(
    `It is currently ${body.currently.temperature} degrees out. There is a ${
      body.currently.precipProbability
    }% chance of rain.`
  );
});
