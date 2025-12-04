import inquirer from "inquirer";

let answers = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },

  {
    type: "number",
    name: "age",
    message: "What is your age?",
  },

  {
    type: "confirm",
    name: "confirm",
    message: "Are you sure you typed the right number?",
  },
]);

console.log(`Hello ${answers.name}!!!`);
console.log(`You are ${answers.age} years old!!!`);

answers = await inquirer.prompt([
  {
    type: "list",
    name: "list",
    message: "If you had to choose one food, what would it be?",
    choices: ["pizza", "burger", "sushi", "a salad"],
  },
  {
    type: "rawlist",
    name: "rawlist",
    message: "What about a drink?",
    choices: ["Water", "Coca-cola", "Fruit juice", "Coffee", "Tea"],
  },
]);

console.log(`${answers.list}? Interesting choice.`);

answers = await inquirer.prompt([
  {
    type: "checkbox",
    name: "checkbox",
    message: "What do you think about pineapples on pizza?",
    choices: [
      "I love it",
      "Who puts pineapple on pizza lol",
      `This is too political`,
    ],
  },
]);

console.log("Fair enough.");

answers = await inquirer.prompt([
  {
    type: "password",
    name: "password",
    message: "Type your Steam password here for free Steam Points",
  },
  {
    type: "expand",
    name: "expand",
    message: "Do you like cats?",
    choices: [
      {
        key: "y",
        name: "yes",
        value: "yes",
      },
      {
        key: "n",
        name: "no",
        value: "no",
      },
      {
        key: "m",
        name: "maybe",
        value: "maybe",
      },
      {
        key: "a",
        name: "I'm allergic",
        value: "allergic",
      },
    ],
  },
]);
