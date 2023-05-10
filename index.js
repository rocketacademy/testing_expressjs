const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db/models/index");

const { auth } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "https://fruit/api",
  issuerBaseURL: `https://dev-0qzz65qu6ebsz52w.au.auth0.com/`,
});

const { fruit } = db;

const FruitController = require("./controllers/FruitController");
const fruitController = new FruitController(fruit);

const FruitRouter = require("./routers/FruitRouter");
const fruitRouter = new FruitRouter(fruitController, express, checkJwt);

// Setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/fruit", fruitRouter.route());

app.use("/", (req, res) => {
  res.send("Incorrect path");
});

app.listen(8080, () => {
  console.log("Application listening to port 8080");
});

module.exports = app;
