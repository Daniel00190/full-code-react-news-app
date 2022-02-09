const express = require("express");

const router = express.Router();
const fetch = require("node-fetch");
router.use(express.urlencoded({ extended: true }));

const keyDsl = process.env.FIRST_API_KEY;
const keyJjsnow = process.env.SECOND_API_KEY;
const thirdKey = process.env.THIRD_API_KEY;
const key = process.env.WEATHER_API_KEY;

const jsonFile = require("./news.json");

router.get("/topics/business", async (req, res) => {
   let api = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${keyJjsnow}`;

   fetch(api)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news from navbar data");
      });
});

let enterApi = `http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${thirdKey}`;
router.get("/topics/entertainment", async (req, res) => {
   // res.send(jsonFile);
   fetch(enterApi)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news from navbar data");
      });
});

router.get("/topics/health", async (req, res) => {
   // res.send(jsonFile);
   let api = `http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${keyJjsnow}`;

   fetch(api)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news from navbar data");
      });
});

router.get("/topics/science", async (req, res) => {
   // res.send(jsonFile);
   let api = `http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${keyJjsnow}`;

   fetch(api)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news from navbar data");
      });
});

router.get("/topics/sports", async (req, res) => {
   // res.send(jsonFile);
   let api = `http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${keyJjsnow}`;

   fetch(api)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news from navbar data");
      });
});

router.get("/topics/technology", async (req, res) => {
   // res.send(jsonFile);
   let api = `http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${keyJjsnow}`;

   fetch(api)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news from navbar data");
      });
});

module.exports = router;
