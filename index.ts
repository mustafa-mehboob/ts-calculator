import inquirer from 'inquirer';
import Chalk from 'chalk'

let value = await inquirer.prompt([
    {
        name: "value1",
        type: "number",
        message: "Enter Your age",
    },
    {
        name: "value2",
        type: "number",
        message: "Enter Your age",
    },
    {
        name: "sign",
        type: 'list',
        message: 'Plase slct what you want',
        choices: [
            "Addition",
            "Multiplication",
            "Division",
            "Subtraction"
        ],
    }
]);


(() => {
        if (!value.value1 || !value.value2) {
            console.log(Chalk.redBright("Please enter number only"));
        } else {
            switch (value.sign) {
                case "Addition":
                    console.log(Chalk.blueBright(value.value1 + value.value2));   
                    break;
                case "Multiplication":
                    console.log(Chalk.greenBright(value.value1 * value.value2) );   
                    break;
                case "Division":
                    console.log(Chalk.blueBright(value.value1 / value.value2) );   
                    break;
                default:
                    console.log(Chalk.yellowBright(value.value1 - value.value2));
                    break;
            }
        }
})()
            