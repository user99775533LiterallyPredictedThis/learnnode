import boxen from "boxen";
import chalk from "chalk";

console.log(boxen(chalk.bgMagenta('Unicorns love rainbows'), {title: 'Unicorn', titleAlignment: 'center', padding: 1, margin: 1, borderStyle: 'classic', borderColor: 'magenta'}));

console.log(boxen(chalk.yellow('The sun is bright'), {title: 'Sunshine', titleAlignment: 'left', padding: 3, margin: 1, borderStyle: 'double', borderColor: 'yellow'}));

console.log(boxen(chalk.green.underline('Cherish nature'), {title: 'Trees', titleAlignment: 'center', padding: 1, margin: 1, borderStyle: 'round', borderColor: 'green', float: 'center'}));

console.log(boxen(chalk.bgRed.bold('LOOK AT ME'), {title: 'OVER THERE', titleAlignment: 'right', padding: 2, margin: 1, borderStyle: 'arrow', borderColor: 'red', float: 'right'}));

console.log(boxen(chalk.blue.bold('This box is very bold and big!!!'), {title: 'Bold box', titleAlignment: 'center', padding: 5, margin: 1, borderStyle: 'bold', borderColor: 'blue', width: 80}));

console.log(boxen(chalk.bold('This is a very ordinary box. Boring.'), {title: 'Boring box', titleAlignment: 'center', padding: 1, margin: 1, borderStyle: 'single', borderColor: 'white'}));


