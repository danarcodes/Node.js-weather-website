const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=b9b40c2796cbf48312016bdd1d3b6874&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";
  // console.log(url);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service! ", undefined);
    } else if (body.error) {
      callback("Unable to find location! ", undefined);
    } else {
      callback(
        undefined,
        `The weather is ${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike}.`
      );
    }
    // console.log(body.current.temperature);
  });
};

module.exports = forecast;
