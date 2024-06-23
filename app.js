const express = require("express");
const bodyParser = require("body-parser");
const servoRoute = require("./routes/route");

const app = express();

app.use(bodyParser.json());
app.use("/house", servoRoute);

module.exports = app;