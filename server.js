const express = require('express')
const app = express()
const port = 3000

const { createEventAdapter } = require('@slack/events-api');
const slackSigningSecret = 'b08e0304dec99703630a34b2fff58478';
const slackEvents = createEventAdapter(slackSigningSecret);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


slackEvents.on('message', (event) => {
    console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
});

slackEvents.on('app_mention', async (event) => {
    try {
        console.log("Channel: ", event.channel)
    } catch (e) {
        console.log("error: ", e)
    }
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/slack/events', (req, res) => {
    res.send(req.body.challenge)
})

app.listen(port, () => {
    console.log(`App listening at Port: ${port}`)
})