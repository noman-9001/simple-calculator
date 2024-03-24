#! /usr/bin/env node
import inquirer from "inquirer";
// Printing a Wellcome Message
console.log("\n\tWellcome To \Nomanqureshi\ -CLI simple calculator\n");
// Asking Questions from Users through inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstnumber" },
    { message: "Enter second Number", type: "number", name: "secondnumber" },
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["addition", "subtractions", "multiplication", "division"],
    },
]);
// Condtional statements If-Else
if (answers.operator === "addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "subtractions") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else {
    console.log("Invalid Input");
}
