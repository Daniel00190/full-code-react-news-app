const express = require("express");

const router = express.Router();
const fetch = require("node-fetch");
router.use(express.urlencoded({ extended: true }));

const keyDsl = process.env.FIRST_API_KEY;
const keyJjsnow = process.env.SECOND_API_KEY;
const thirdKey = process.env.THIRD_API_KEY;
const key = process.env.WEATHER_API_KEY;

const jsonFile = require("./news.json");
router.get("/home/top", function (req, res) {
   var url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${keyDsl}`;

   fetch(url)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
      })
      .catch((err) => {
         console.log("error sending top headlines data");
      });
   // res.send(jsonFile);
});

router.get("/home/tech", function (req, res) {
   var url = `http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${thirdKey}`;
   fetch(url)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
      })
      .catch((err) => {
         console.log("error sending top headlines data");
      });
   // res.send(jsonFile);
});
router.get("/home/entertainment", function (req, res) {
   var url = `http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${thirdKey}`;

   fetch(url)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
      })
      .catch((err) => {
         console.log("error sending top headlines data");
      });
   // res.send(jsonFile);
});

module.exports = router;
