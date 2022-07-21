const express = require("express");
const morgan = require("morgan");

const app = express();
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("working with templaye engine");
});

app.listen(PORT, () => {
  console.log("app is lisening");
});
