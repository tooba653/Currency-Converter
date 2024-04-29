#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log( chalk.green.bold("\n \t WELCOME TO CURRENCY CONVERTER \n"))

//Define the list of currencies and their exchange rates
let exchangeRate : any ={
    "USD":1,
    "GBP":0.80,
    "EUR":0.93,
    "JPY":157.87,
    "CAD":1.37,
    "AUD":1.53,
    "PKR":277.31,
    "INR":83.30,
}
let user_answer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"Select the currency to convert from:",
        choices:["USD","GBP","EUR","JPY","CAD","AUD","PKR","INR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into:",
        choices:["USD","GBP","EUR","JPY","CAD","AUD","PKR","INR"]
    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount to convert:"
    }
]);

//Perform currency conversion by using formula
let from_amount = exchangeRate[user_answer.from_currency];
let to_amount =  exchangeRate[user_answer.to_currency];
let amount = user_answer.amount

//Formula of conversion
let base_amount = amount/ from_amount
let converted_amount =base_amount *  to_amount
console.log(`Converted Amount = ${ chalk.blue(converted_amount.toFixed(2))}`);
   