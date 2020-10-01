import * as chalk from 'chalk';
import * as rl from 'readline-sync';

console.log(chalk.bgRed.white('Welcome to FancyPancyCalc!'));

console.log('First, enter two numbers. Let us start with the first one:');
const n1 = parseInt(rl.question());
console.log('Next one please:');
const n2 = parseInt(rl.question());

while (true) {
    console.log(chalk.red('More great features will follow here'));
    rl.question();
}