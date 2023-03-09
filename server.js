const express = require("express");
const app = express();
const axios = require("axios");
const port = 3000;
require("dotenv").config();

app.get("/", async (req, res) => {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.WEATHER_APP}`
  );
  const data = response.data;
  res.status(200).json(data);
});

app.listen(port, () => console.log(`app is running :${port}`));
