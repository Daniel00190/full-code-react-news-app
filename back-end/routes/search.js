const express = require("express");

const router = express.Router();
const fetch = require("node-fetch");
router.use(express.urlencoded({ extended: true }));

const keyDsl = process.env.FIRST_API_KEY;
const keyJjsnow = process.env.SECOND_API_KEY;
const key = process.env.WEATHER_API_KEY;

const jsonFile = require("./news.json");

router.post("/search", async (req, res) => {
   let question = req.body.question;
   let language = req.body.language;

   // console.log(req.body.question);
   // res.send(req.body.question);
   const myDate = new Date();
   myDate.setDate(myDate.getDate() - 20);
   const dateSplit = myDate.toISOString().split("T")[0];

   const url =
      "https://newsapi.org/v2/everything?" +
      `qInTitle="${question}"&` +
      `from=${myDate}&` +
      `language=${language}&` +
      "sortBy=popularity&" +
      "apiKey=75f1df13d0584d8d9134134ba63050bb";

   fetch(url)
      .then((response) => response.json())
      .then((data) => {
         res.send(data);
      })
      .catch((err) => {
         console.log(err);
      });
});

module.exports = router;
