const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const clientInput = process.argv.slice(2).join(" ");
// const clientInput = process.argv[2];

if (clientInput) {
  geocode(clientInput, (error, geocodeData) => {
    console.log(clientInput);
    if (error) {
      return console.log("Error:", error);
    }
    forecast(
      geocodeData.longitude,
      geocodeData.latitude,
      (error, forecastData) => {
        if (error) {
          return console.log("Error:", error);
        } else {
          console.log(geocodeData.location);
          console.log(forecastData);
        }
      }
    );
  });
} else {
  console.log("Please provide an address.");
}
