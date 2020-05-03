const program = require("commander");
const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require("chalk");
let questions = require("./questions");


//program.option( "-l, --login", "Log In Lnkdn" );

program.command("start").description("Login in Lnkdn").action( () => {
    inquirer.prompt(questions).then(answers =>{
        console.log(chalk.green(answers.username + ' ' + answers.password ));
        //console.log(chalk.green(`Logging in as a ${username}:${password}`))
    });
});
program.parse(process.argv);
//if(program.login) console.log("Logging in..."); for options