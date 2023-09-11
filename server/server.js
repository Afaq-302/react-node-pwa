var express = require('express');
var app = express();
const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));


app.get('/time', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.send(`Current time is: ${currentTime}`);
});

app.get('/message', (req, res) => {
    const message = req.query.message;
    if (!message) {
        res.status(400).send('Please provide a message query parameter.');
    } else {
        res.send(`${message.toUpperCase()}`);
    }
});

app.listen(8080, function () {
    console.log('Server started on port 8080!');
});