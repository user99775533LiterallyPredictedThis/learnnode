let text = 'Hello';
text = text + 'Sigma!';
console.log(text);
let name = 'Too personal';
let age = 'Not telling';
let sexuality = 'none of your business';
text = ' Your name is ' + name + ' and your are ' + age + ' years old and your sexuality is ' + sexuality + '!';
console.log(text);
text = `Your name is ${name}
 and you are ${age} years old
  and your sexuality is ${sexuality}!`;
console.log(text);

text = text.toUpperCase();
console.log(text);