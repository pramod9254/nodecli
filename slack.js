const chalk = require('chalk');

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
        };
        console.log(response.body);
        const log = chalk.green('Boom. Message posted successfully')
        console.info(log)
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
        const log = chalk.green('details: ')
        console.info(log)
        console.log(response.body);
        
    });
}
const getUserDetails = () => {
    const url = 'https://slack.com/api/auth.test?pretty=1'
    const token = 'xoxp-955599270594-958273793553-1936048717863-b6b511a54624495028f7e6a2dac276a8'
    SlackApi(url, token)
}

const getAPIResponse = (url, token) => {
    SlackApi(url, token)
}

const postMessageToChannel = () => {
    const url = 'https://hooks.slack.com/services/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'
    const msg = 'Hello Slack'
    eventApis(url, msg)
}

const postMessageToDynamicalUrl = (url, message) => {
    callSlackApi(url, message)
}

module.exports = {
    postMessageToChannel,
    postMessageToDynamicalUrl,
    getUserDetails,
    getAPIResponse
}
