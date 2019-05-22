const request = require("request");

// // Darksky weather
// const secretKey = "b6acee7b148c3020c57e1712019f5380";
// const position = "37.8267,-122.4233";
// const urlBase = "https://api.darksky.net/forecast/";

// const url = `${urlBase}${secretKey}/${position}?units=si`;

// request({ url, json: true }, (error, response, body) => {
//   if (error || body === "Forbidden\n") {
//     console.log("Unable to connect to weather service!");
//   } else if (body.error) {
//     console.log("Unable to find location.");
//   } else {
//     // console.log(response.body.currently) // that is the way used by the instructor
//     console.log(
//       `${body.daily.data[0].summary} It is currently ${
//         body.currently.temperature
//       } degrees out. There is a ${
//         body.currently.precipProbability
//       }% chance of rain.`
//     );
//   }
// });

// Geocoding
// Address -> Lat/Long -> Weather

const mapBoxUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaWNlY3Jpc3MiLCJhIjoiY2p2eHB2ZzVtMDcxNzQzbXo5dm9uM2E1cCJ9.sJHPSthY5XiUQkFzHhm-Ng&limit=1";

request({ url: mapBoxUrl, json: true }, (error, response, body) => {
  if (error || body.message === "Not Authorized - Invalid Token.") {
    console.log(
      `Unable to connect mapBox : ${
        error ? console.log(error) : console.log(body.message)
      }`
    );
  } else if (body.features.length === 0) {
    console.log(
      "Unable to find your location, please try again with different terms."
    );
  } else {
    const placeName = body.features[0].place_name;
    const coord = body.features[0].center;
    const longitude = coord[0];
    const latitude = coord[1];
    console.log(
      `For ${placeName}, the longitude is ${longitude} and the latitude is ${latitude}.`
    );
  }
});
