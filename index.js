#!/usr/bin/env node

/* The first line that begins with #! is usually called a “shebang.”
This is normally only used on Linux or UNIX operating systems to inform
the system what type of script is included in the rest of the text file.
However, this first line is also required for Node.js scripts to be installed
and run properly on macOS and Windows.*/

/*
source: https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
*/

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");

//const greeting = chalk.white.bold("Hello!");
// const boxenOptions = {
//  padding: 1,
//  margin: 1,
//  borderStyle: "round",
//  borderColor: "green",
//  backgroundColor: "#555555"
// };
// const msgBox = boxen( greeting, boxenOptions );

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

const greeting = `Hello, ${options.name}!`;

console.log(greeting);

//console.log(msgBox);