var chai = require('chai');
var expect = chai.expect;
const { exec } = require("child_process");
const { commands } = require('../slack');

describe('Positive Tests', function () {
    describe('Validate output', function () {
        describe('response status', function () {
            it('should return true when the "ok" is present', function () {
                exec("node-cli user", (error, stdout, stderr) => {
                    if (error) {
                        expect(error).to.be.an('error');
                        return;
                    }

                    var lines = stdout.toString().split('\n');
                    var results = new Array();
                    lines.forEach(function (line) {
                        line = line.trim()
                        var parts = line.split(':');

                        if (parts[1])
                            results[parts[0].trim()] = parts[1].trim();
                    });
                    expect(results['"ok"']).to.equal('true,');
                });

            });
        });
    });

    describe('Validate commands', function () {
        describe('command argument parameters', function () {

            it('should return false when there are more than 3 arguments', function () {
                exec("node-cli user details", (error, stdout, stderr) => {
                    if (error) {
                        expect(error).to.be.an('error');
                        return;
                    }
                    stdout = stdout.trim()
                    expect(stdout).to.equal('Error: Comand not found');
                });

            });

            it(`should return false when arguments does not match in ${commands.join(', ')}`, function () {
                exec("node-cli usertest", (error, stdout, stderr) => {
                    if (error) {
                        expect(error).to.be.an('error');
                        return;
                    }
                    stdout = stdout.trim()
                    expect(stdout).to.equal('Error: Invalid command');
                });

            });


        });
    })
})

describe('Negetive Tests', function () {
    describe('Validate output', function () {
        describe('response status', function () {
            it('should return true when "ok" is present', function () {
                exec("node-cli user", (error, stdout, stderr) => {
                    if (error) {
                        expect(error).to.be.an('error');
                        return;
                    }

                    var lines = stdout.toString().split('\n');
                    var results = new Array();
                    lines.forEach(function (line) {
                        line = line.trim()
                        var parts = line.split(':');

                        if (parts[1])
                            results[parts[0].trim()] = parts[1].trim();
                    });
                    expect(results['"ok"']).to.equal(undefined);
                });

            });
        });
    });

    describe('Validate commands', function () {
        describe('command argument parameters', function () {

            it('should return false when there are more than 3 arguments', function () {
                exec("node-cli user", (error, stdout, stderr) => {
                    if (error) {
                        expect(error).to.be.an('error');
                        return;
                    }
                    stdout = stdout.trim()
                    expect(stdout).to.equal('Error: Comand not found');
                });

            });

            it(`should return false when arguments does not match in ${commands.join(', ')}`, function () {
                exec("node-cli user", (error, stdout, stderr) => {
                    if (error) {
                        expect(error).to.be.an('error');
                        return;
                    }
                    stdout = stdout.trim()
                    expect(stdout).to.equal('Error: Invalid command');
                });

            });


        });
    })
})