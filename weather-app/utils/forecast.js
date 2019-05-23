const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const secretKey = "b6acee7b148c3020c57e1712019f5380";
  const urlBase = "https://api.darksky.net/forecast/";
  const url = `${urlBase}${secretKey}/${longitude},${latitude}?units=si`;

  request({
    url,
    json: true
  }, (error, response, body) => {
    if (error || body === "Forbidden\n") {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      console.log(url);
      callback("Unable to find location.", undefined);
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary}\nIt is currently ${
          body.currently.temperature
        } degrees out. There is a ${
          body.currently.precipProbability
        }% chance of rain.`
      );
    }
  });
};

module.exports = forecast;