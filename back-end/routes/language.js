const express = require("express");

const router = express.Router();
const fetch = require("node-fetch");
router.use(express.urlencoded({ extended: true }));

const keyDsl = process.env.FIRST_API_KEY;
const keyJjsnow = process.env.SECOND_API_KEY;
const key = process.env.WEATHER_API_KEY;

router.get("/lang/arabic", async (req, res) => {
   // res.send(jsonFile);
   fetch(`http://newsapi.org/v2/top-headlines?language=ar&apiKey=${keyDsl}`)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news from navbar data");
      });
});
router.get("/lang/spanish", async (req, res) => {
   // res.send(jsonFile);
   fetch(`http://newsapi.org/v2/top-headlines?language=es&apiKey=${keyDsl}`)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news from navbar data");
      });
});
router.get("/lang/german", async (req, res) => {
   // res.send(jsonFile);
   fetch(`http://newsapi.org/v2/top-headlines?language=de&apiKey=${keyDsl}`)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news from navbar data");
      });
});
router.get("/lang/italian", async (req, res) => {
   // res.send(jsonFile);
   fetch(`http://newsapi.org/v2/top-headlines?language=it&apiKey=${keyDsl}`)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
         console.log(data);
      })
      .catch((err) => {
         console.log("error sending news from navbar data");
      });
});
router.get("/lang/russian", async (req, res) => {
   // res.send(jsonFile);
   fetch(`http://newsapi.org/v2/top-headlines?language=ru&apiKey=${keyDsl}`)
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
