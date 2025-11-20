function write(text) {
    process.stdout.write(text);
}

import chalk from "chalk";

write(chalk.yellow.bgRed.underline('DANGER!!!'));
write(chalk.bgRgb(255,0,0)('COLOR'));
write('\n');





