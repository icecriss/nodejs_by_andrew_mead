const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const clientInput = process.argv.slice(2).join(" ");
// const clientInput = process.argv[2];

if (clientInput) {
  geocode(clientInput, (error, {
    longitude,
    latitude,
    location
  }) => {
    console.log(clientInput);
    if (error) {
      return console.log("Error:", error);
    }
    forecast(
      longitude,
      latitude,
      (error, forecastData) => {
        if (error) {
          return console.log("Error:", error);
        } else {
          console.log(location);
          console.log(forecastData);
        }
      }
    );
  });
} else {
  console.log("Please provide an address.");
}