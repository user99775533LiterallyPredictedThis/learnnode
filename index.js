function hello() {
    console.log('Hello World!');
}

hello();
hello();
hello();
hello();
hello();

function helloName(name) {
    console.log(`Hello ${name}!`);
}

helloName('Kaspar');
helloName('Martin');

function hi(name='Stupid', age='Insert the argument') {
    console.log(`Hi ${name} you are ${age} years old`)
}

hi('Sigma', 67);
hi();

let sum = function (a, b){
    return a+b;
}

let answer = sum(4, 5);
console.log(answer);
console.log(sum(6, 10));
sum(5, 6);

let sub = (a, b) => {
    return a-b;
}

console.log(sub(6, 10));

let mult = (a, b) => a*b;

console.log(mult(6, 10));

let root = a => a*a;

console.log(root(6, 10));

let cool = () => console.log('cool');

cool();

let awesome = {
    party: function () {
        console.log('PARTY!');
    },
    cool: () => console.log('cool'),
    nice() {
        console.log('nice!');
    }
};

// ^ Basically different ways to do the same thing or something idk....

awesome.party();
awesome.cool();
awesome.nice(); 