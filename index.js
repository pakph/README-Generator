var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your repository?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your repository's description?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do we use your project?"
    },
    {
        type: "input",
        name: "license",
        message: "What license is associated with your repository?"
    },
    {
        type: "input",
        name: "contributing",
        message: "List any collaborators and links to their github profiles. List the creators of any third-party assets that you used. Also, include links to any tutorials that you may have followed."
    },
    {
        type: "input",
        name: "test",
        message: "Please include any tests here with examples on how to run them."
    },
])