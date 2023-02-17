const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  if (req.files) {
    const file = req.files.file;
    const filename = file.name;
    console.log(filename);

    file.mv(path.join(__dirname, "uploads", filename), (err) => {
      if (err) {
        console.log(err);
        res.send("Error occured");
      } else {
        res.send("Done!");
      }
    });
  } else {
    console.log("No file uploaded");
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
