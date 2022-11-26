#! /usr/bin/env node

import inquirer from 'inquirer';
import Chalk from 'chalk'
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';


const welMsg1 = `╦ ╦┌─┐┬  ┬  ┌─┐┌─┐┌┬┐  ┌┬┐┌─┐  ┌┬┐┬ ┬┌─┐┌┬┐┌─┐┌─┐┌─┐  ┌─┐┌─┐┬  ┌─┐┬ ┬┬  ┌─┐┌┬┐┌─┐┬─┐`
const welMsg2 = `║║║├┤ │  │  │  │ ││││   │ │ │  ││││ │└─┐ │ ├─┤├┤ ├─┤  │  ├─┤│  │  │ ││  ├─┤ │ │ │├┬┘`
const welMsg3 = `╚╩╝└─┘┴─┘┴─┘└─┘└─┘┴ ┴   ┴ └─┘  ┴ ┴└─┘└─┘ ┴ ┴ ┴└  ┴ ┴  └─┘┴ ┴┴─┘└─┘└─┘┴─┘┴ ┴ ┴ └─┘┴└─`
console.log(`
${chalk.redBright(welMsg1)}
${chalk.blueBright(welMsg2)}
${chalk.redBright(welMsg3)}
`);


let func = async () => {

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
            message: "Enter first value",
        },
        {
            name: "value2",
            type: "number",
            message: "Enter second value",
        }
    ]);
    
    
    (() => {
            if (!value.value1 || !value.value2) {
                console.log(Chalk.redBright("Please enter number only"));
            } else {
                switch (value.sign) {
                    case "Addition":
                        console.log(Chalk.blueBright(`${value.value1} + ${value.value2} = ${value.value1 + value.value2}`));   
                        break;
                    case "Multiplication":
                        console.log(Chalk.greenBright(`${value.value1} * ${value.value2} = ${value.value1 * value.value2}`) );   
                        break;
                    case "Division":
                        console.log(Chalk.blueBright(`${value.value1} / ${value.value2} = ${value.value1 / value.value2}`) );   
                        break;
                    default:
                        console.log(Chalk.yellowBright(`${value.value1} - ${value.value2} = ${value.value1 - value.value2}`));
                        break;
                }
            }
    })()
}

let repeatFunc = async () => {
    do {
        await func()
        var repeat = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue (y/n)"
        })
        // console.log(repeat.restart.toLowerCase());
        
    } while (repeat.restart.toLowerCase() === "y" || repeat.restart.toLowerCase() === "yes" );
}

repeatFunc()