const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb://127.0.0.1/testdb",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("DB connection succeeded");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

const NewSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

/*
MODEL CREATING METHOD I

const newModel = new mongoose.model("collection", NewSchema);

const data = new newModel({
    name: "Emin",
    age: 21
});


data.save((err) => {
    if (!err) {
        console.log("Data saved");
    }
    else {
        console.log("Error in data saving: " + err);
    }
});

*/

/*
MODEL CREATING METHOD II

const newModel = new mongoose.model("collection", NewSchema);

const data = async () => {
  const result = await newModel.insertMany([
    { name: "Emin", age: 21 },
    { name: "Fatma", age: 15 },
  ]);
};

data();

*/

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page");
});

app.get("/profile/:id", (req, res) => {
  res.send("This is profile page with id: " + req.params.id);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
