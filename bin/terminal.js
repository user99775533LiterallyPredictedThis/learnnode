function write(text) {
    process.stdout.write(text);
}

write('Hello Terminal!\n');
write('Hello Terminal!\t');
write('Hello Terminal!\n');

// Text color (foreground color)
write('\x1B[31mHello Terminal!\n');
write('\x1B[32mHello Terminal!\n');
write('\x1B[33mHello Terminal!\n');
write('\x1B[34mHello Terminal!\n');
write('\x1B[35mHello Terminal!\n');
write('\x1B[36mHello Terminal!\n');
write('\x1B[37mHello Terminal!\n');

// Background color
write('\x1B[41mHello Terminal!\n');
write('\x1B[42mHello Terminal!\n');
write('\x1B[43mHello Terminal!\n');
write('\x1B[44mHello Terminal!\n');
write('\x1B[45mHello Terminal!\n');
write('\x1B[46mHello Terminal!\n');
write('\x1B[47mHello Terminal!');
write('\x1B[0m');
write('\n');

// Dim/bright text color
write('\x1B[91mHello Terminal!\n');
write('\x1B[92mHello Terminal!\n');
write('\x1B[93mHello Terminal!\n');
write('\x1B[94mHello Terminal!\n');
write('\x1B[95mHello Terminal!\n');
write('\x1B[96mHello Terminal!\n');
write('\x1B[97mHello Terminal!\n');

// Dim/bright background color
write('\x1B[101mHello Terminal!\n');
write('\x1B[102mHello Terminal!\n');
write('\x1B[103mHello Terminal!\n');
write('\x1B[104mHello Terminal!\n');
write('\x1B[105mHello Terminal!\n');
write('\x1B[106mHello Terminal!\n');
write('\x1B[107mHello Terminal!');
write('\x1B[0m');
write('\n');

for(let i = 0; i<256; i++) {
    write(`\x1B[48;5;${i}m`);
    write(' ');
}
write('\x1B[0m');

write(`\x1B[48;2;255;0;0m`);
write('Hello Terminal!');

for(let i = 0; i<256; i++) {
    write(`\x1B[48;2;${i};${i};${i}m`);
    write(' ');
}
write('\x1B[0m');








