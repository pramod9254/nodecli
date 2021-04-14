const { createEventAdapter } = require('@slack/events-api');
require('dotenv').config()

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
const port = process.env.SLACK_PORT || 3000;


const slackEvents = createEventAdapter(slackSigningSecret);

slackEvents.on('app_mention', (event) => {
    console.log(`app mentioned by user ${event.user}: ${event.text}`);
});

slackEvents.on('message', (event) => {
    console.log(`Received message from user ${event.user}: ${event.text}`);
});

slackEvents.on('error', console.error);

slackEvents.start(port).then(() => {
    console.log(`Server started on port ${port}`)
});