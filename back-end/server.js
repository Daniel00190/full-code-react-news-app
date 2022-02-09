const express = require("express");
const app = express();
const fetch = require("node-fetch");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var cors = require("cors");
app.use(cors());

//react router
const mainPageNews = require("./routes/mainPageNews");
const weatherRoute = require("./routes/weatherRoute");
const topics = require("./routes/topics");
const sources = require("./routes/sources");
const language = require("./routes/language");
const search = require("./routes/search");

const port = process.env.PORT;
app.listen(port, () => {
   console.log(`server for Daniels|Fetch listening at port:${port}`);
});

const keyDsl = process.env.FIRST_API_KEY;
const keyJjsnow = process.env.SECOND_API_KEY;
const key = process.env.WEATHER_API_KEY;

//home page routes for news
app.use(mainPageNews);

//home page route for weather
app.use(weatherRoute);

//routes to topics in navigation bar
app.use(topics);

//routes to sources in navigation bar
app.use(sources);

//routes to languages pages
app.use(language);

app.use(search);
