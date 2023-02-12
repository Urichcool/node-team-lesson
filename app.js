const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const pokemonRouter = require("./routes/pokemon");
const catsRouter = require("./routes/cats");

const { PORT } = process.env;

const app = express();
app.use(morgan("tiny"));

const whitelist = ["http://localhost:3000", "http://localhost:4000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(express.json())
app.use(cors());
app.use("/pokemon", pokemonRouter);
app.use("/cats", catsRouter);

app.get("/search", (req, res) => {
  const { name, age } = req.query;

  res.send(`Hello ${name} you age is ${age}`);
});

app.use((req, res) => {
  res.status(404).send("the page not found");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "something wrong server doesn't exist" } =
    err;
  res.status(status).send(message);
});

app.listen(PORT, () => {
  console.log("server is running");
});
