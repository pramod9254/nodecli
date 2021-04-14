#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const { postMessageToChannel, postMessageToDynamicalUrl, getUserDetails, getAPIResponse, commands } = require('./slack');
const chalk = require('chalk');
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
    .command('dynamic-url')
    .alias('du')
    .description(`Provide url and token to fetch details`)
    .action(() => {
        prompt(questionsForUserDetails).then(answers => {
            getAPIResponse(answers.url, answers.token)
        })
    })
  
program
    .command('channel-msg')
    .alias('cm')
    .description(`Send 'Hello Slack' message to 'B01UA54EPQ9' channel`)
    .action(() => postMessageToChannel())

program
    .command('dynamic-channel-msg')
    .alias('dcm')
    .description('Add URL and Message to send to user')
    .action(() => {
        prompt(questions).then(answers => {
            postMessageToDynamicalUrl(answers.url, answers.message)
        });
    })

if(process.argv.length != 3 ) {
    const errLog = chalk.red(`Error: Comand not found`)
    console.info(errLog)
    return false
} 

if(commands.indexOf(process.argv[2]) == -1) {
    const errLog = chalk.red(`Error: Invalid command`)
    console.info(errLog)
    return false
} 
program.parse(process.argv)
