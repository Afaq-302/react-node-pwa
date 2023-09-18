require("dotenv").config();
var express = require('express');
var app = express();
const cors = require('cors');
const constants = require("./common/constants");

const corsOptions = {
    origin: [constants.CLIENT_URL],
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));


app.get('/time', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.send(`${currentTime}`);
});

app.get('/message', (req, res) => {
    const message = req.query.message;
    if (!message) {
        res.status(400).send('Please provide a message query parameter.');
    } else {
        res.send(`${message.toUpperCase()}`);
    }
});

app.listen(constants.SERVER_PORT, function () {
    console.log('Server started on port', constants.SERVER_PORT);
});