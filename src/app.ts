import * as chalk from 'chalk';
import * as rl from 'readline-sync';
import * as math from './math';

console.log(chalk.bgRed.white('Welcome to FancyPancyCalc!'));

console.log('First, enter two numbers. Let us start with the first one:');
const n1 = parseInt(rl.question());
console.log('Next one please:');
const n2 = parseInt(rl.question());

while (true) {
    console.log('Press ' + chalk.bgYellow.black('+') + ' for adding');
    console.log('Press ' + chalk.bgYellow.black('-') + ' to subtract');
    console.log('Press ' + chalk.bgYellow.black('q') + ' to quit');
    const selection = rl.question();

    let result: number;
    switch (selection) {
        case 'q':
            process.exit(0);
        case '+':
            result = math.add(n1, n2);
            console.log(`The result of ${n1} + ${n2} is ${chalk.bgGreenBright.black(result)}.`);
            break;
        case '-':
            break;
        default:
            console.log(chalk.red('Invalid selection, please try again!'));
    }

    if (selection === 'q') {
        break;
    }
}