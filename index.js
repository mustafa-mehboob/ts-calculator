import inquirer from 'inquirer';
import Chalk from 'chalk';
// let chalkRainbow = require('chalk-rainbow')
console.log(Chalk.italic.bold.cyanBright('Welcome to Ghulam Mustafa calculator'));
let value = await inquirer.prompt([
    {
        name: "sign",
        type: 'list',
        message: 'Plase slect what you want',
        choices: [
            "Addition",
            "Multiplication",
            "Division",
            "Subtraction"
        ],
    },
    {
        name: "value1",
        type: "number",
        message: "Enter a number",
    },
    {
        name: "value2",
        type: "number",
        message: "Enter a second number",
    }
]);
(() => {
    if (!value.value1 || !value.value2) {
        console.log(Chalk.redBright("Please enter number only"));
    }
    else {
        switch (value.sign) {
            case "Addition":
                console.log(Chalk.blueBright(value.value1 + value.value2));
                break;
            case "Multiplication":
                console.log(Chalk.greenBright(value.value1 * value.value2));
                break;
            case "Division":
                console.log(Chalk.blueBright(value.value1 / value.value2));
                break;
            default:
                console.log(Chalk.yellowBright(value.value1 - value.value2));
                break;
        }
    }
})();
