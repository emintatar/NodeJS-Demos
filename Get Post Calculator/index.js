const bodyParser = require("body-parser");

const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/result", (req, res) => {
  const num1 = Number(req.body.number1);
  const num2 = Number(req.body.number2);
  const result = num1 + num2;

  res.send(`Result is ${result}`);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
