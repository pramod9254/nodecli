const chalk = require('chalk');
require('dotenv').config()

const SLACK_URL = process.env.SLACK_URL
const SLACK_TOKEN = process.env.SLACK_TOKEN
const SLACK_CHANNEL_URL = process.env.SLACK_CHANNEL_URL
const commands = ['user', 'u', 'dynamic-url', 'du', 'channel-msg', 'cm', 'dynamic-channel-msg', 'dcm']

const eventApis = (url, msg) => {
    var request = require('request');
    var options = {
        'method': 'POST',
        'url': url,
        'headers': {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ "text": msg })

    };
    request(options, function (error, response) {
        if (error) {
            const errLog = chalk.red(`error: , ${error.message}`)
            console.info(errLog)
        } else {
            const log = chalk.green('Boom. Message posted successfully')
            console.info(log)
        }
    });
}

const SlackApi = (url, token) => {
    var request = require('request');
    var options = {
        'method': 'POST',
        'url': url,
        'headers': {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    };
    request(options, function (error, response) {
        if (error) {
            const errLog = chalk.red(`error: , ${error.message}`)
            console.info(errLog)
        };
        const log = chalk.green(response.body)
        console.info(log)
        console.log(response.body);

    });
}

const getUserDetails = () => {
    const url = SLACK_URL
    const token = SLACK_TOKEN
    SlackApi(url, token)
}

const getAPIResponse = (url, token) => {
    SlackApi(url, token)
}

const postMessageToChannel = () => {
    const msg = 'Hello Slack'
    eventApis(SLACK_CHANNEL_URL, msg)
}

const postMessageToDynamicalUrl = (url, message) => {
    callSlackApi(url, message)
}

module.exports = {
    postMessageToChannel,
    postMessageToDynamicalUrl,
    getUserDetails,
    getAPIResponse,
    commands
}
