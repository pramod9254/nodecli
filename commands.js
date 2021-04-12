#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const { postMessageToChannel, postMessageToDynamicalUrl, getUserDetails, getAPIResponse } = require('./slack');

const questions = [{
    type: 'input',
    name: 'url',
    message: 'Slack URL'
}, {
    type: 'input',
    name: 'message',
    message: 'Message to send'
}
]

const questionsForUserDetails = [{
    type: 'input',
    name: 'url',
    message: 'Slack URL'
}, {
    type: 'input',
    name: 'token',
    message: 'Authorization token'
}
]
program
    .version('1.0.0')
    .description('Node cli')


program
    .command('user')
    .alias('u')
    .description(`Get User details`)
    .action(() => getUserDetails())

program
    .command('api')
    .alias('aa')
    .description(`Provide url and token to fetch details`)
    .action(() => {
        prompt(questionsForUserDetails).then(answers => {
            getAPIResponse(answers.url, answers.token)
        })
    })
  
program
    .command('send')
    .alias('s')
    .description(`Send 'Hello Slack' message to 'B01UA54EPQ9' channel`)
    .action(() => postMessageToChannel())

program
    .command('sendtodynamicurl')
    .alias('stdu')
    .description('Add URL and Message to send to user')
    .action(() => {
        prompt(questions).then(answers => {
            postMessageToDynamicalUrl(answers.url, answers.message)
        });
    })


program.parse(process.argv)
