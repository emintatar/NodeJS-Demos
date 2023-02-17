const bodyParser = require('body-parser');

const express = require('express');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send({
        name: 'John Doe',
        surname: 'Doe',
        age: 30
    });
});

app.post('/', (req, res) => {
    const getName = req.body.name;

    res.status(200).send({
        message: `Hello ${getName} Post Request Successfull`
    });
});
  
// localhost:3000
const server = app.listen(3000, () => {
    const port = server.address().port;
    console.log(`Server started on port ${port}`);
});