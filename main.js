import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        message: "enter your sentence to count the word",
        type: "input"
    }
]);
const words = answer.sentence.trim().split("");
console.log(words);
console.log(`your sentence word count is ${words.length}`);
