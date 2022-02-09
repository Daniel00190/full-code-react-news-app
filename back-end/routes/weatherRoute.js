const express = require("express");

const router = express.Router();
const fetch = require("node-fetch");
router.use(express.urlencoded({ extended: true }));

const keyDsl = process.env.FIRST_API_KEY;
const keyJjsnow = process.env.SECOND_API_KEY;
const key = process.env.WEATHER_API_KEY;

router.all("/weather", async (req, res) => {
   let lat, lon;
   try {
      lat = await req.body.lat;
      lon = await req.body.lon;
      console.log(lat, lon);
      //another API for weather
      // const key = "3ba77f7647194c378df175214200610";
      // let api = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${lon}`;

      let api = `http://api.openweathermap.org/data/2.5/onecall?unit=imperial&lat=${lat}&lon=${lon}&appid=${key}`;
      console.log(api);
      fetch(api)
         .then((response) => response.json())
         .then((data) => {
            res.send(data);
            console.log(data);
         })
         .catch((err) => {
            console.log("error sending weather data");
         });
   } catch (error) {
      console.error(error);
   }
});

module.exports = router;
