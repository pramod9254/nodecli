### Node CLI

## Pre requisites
1. Node
2. NPM

#### CLI Setup
cd ./  
npm install
npm link 
node-cli <cmd>

#### Available commands
There are 4 commands available in this app. We can extend the commands by adding it in commands.js file. 

1. node-cli user
    This command calls slack api and fetch user detais of given token - (xoxp-955599270594-958273793553-1936048717863-b6b511a54624495028f7e6a2dac276a8)

    To get the user details by passing token dynamically, use below command:
    node-cli api

2. node-cli dynamic-url
    It will prompt for slack url and token. 
    Based on the provided url and token it calls slack api and fetch user detais.

3. node-cli channel-msg
    This command calls slack webhook api and send default message(Hello Slack) to channel added in env file.(https://hooks.slack.com/services/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)

    To add the channel url and message dynamically use below command:
    node-cli dynamic-channel-msg

4. node-cli dynamic-channel-msg
    It will prompt for slack channel url and message. 
    Based on the provided url and message it will send message to provided channel.


####  Slack event APIs
Setup Slack app using below documentation
https://slack.dev/node-slack-sdk/tutorials/local-development#developing-slack-apps-locally

cd ./  
npm start

The Appilication will wait for 2 events app_mention and message. Whenever there is a message in configured channel and user mentions configured app, events will be triggerd

####  Test
cd ./  
npm test