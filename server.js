'use strict';

const express = require('express');
const line = require('@line/bot-sdk');
const PORT = process.env.PORT || 3000;

const config = {
    channelSecret: '5311098b76a7d83cd2ea249221846e4b',
    channelAccessToken: 'kIq31WcoZftFtqrh4r1a8jb3t0WcJ8pacLkXrvFawAGEUt8U3hEEwRxJlgAMgCCKnHL8x5vMvo8W+NkIuoUdHJ7pB7hupj2Oe501YfwMYvxXFd9jtrid8PhY9hS6NfHep3gXkpIXMBJ/I/NqfsAwYQdB04t89/1O/w1cDnyilFU='
};

const app = express();

app.post('/webhook', line.middleware(config), (req, res) => {
    console.log(req.body.events);
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result));
});

const client = new line.Client(config);

function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null);
    }

    return client.replyMessage(event.replyToken, {
        type: 'text',
        text: "Good!"
    });
}

app.listen(PORT);
console.log(`Server running at ${PORT}`);