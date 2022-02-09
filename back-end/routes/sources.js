const express = require("express");

const router = express.Router();
const fetch = require("node-fetch");
router.use(express.urlencoded({ extended: true }));

const keyDsl = process.env.FIRST_API_KEY;
const keyJjsnow = process.env.SECOND_API_KEY;
const key = process.env.WEATHER_API_KEY;
const jsonFile = require("./news.json");

router.get("/sources/cnn", (req, res) => {
   fetch(`https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${keyDsl}`)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news ");
      });
});
router.get("/sources/time", (req, res) => {
   fetch(`https://newsapi.org/v2/top-headlines?sources=time&apiKey=${keyDsl}`)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news ");
      });
});
router.get("/sources/reuters", (req, res) => {
   fetch(
      `https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=${keyDsl}`
   )
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news ");
      });
});
router.get("/sources/bbc", async (req, res) => {
   // res.send(jsonFile);

   fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${keyDsl}`
   )
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news ");
      });
});
router.get("/sources/espn", async (req, res) => {
   fetch(`https://newsapi.org/v2/top-headlines?sources=espn&apiKey=${keyDsl}`)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news ");
      });
});

module.exports = router;
