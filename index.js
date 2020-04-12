const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub Username: ",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email: ",
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title of your repository: ",
    },
    {
        type: "input",
        name: "description",
        message: "Enter the description of your repository: ",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "How do we use your project?",
    },
    {
        type: "input",
        name: "license",
        message: "Enter any license associated with your repository: ",
    },
    {
        type: "input",
        name: "contributing",
        message: "List any collaborators and links to their github profiles: ",
    },
    {
        type: "input",
        name: "test",
        message: "Enter any tests here with examples on how to run them: ",
    },

]).then(answers => {
    //Obtains the user's github page
    const queryUrl = "https://api.github.com/users/" + answers.username;

    axios.get(queryUrl).then(function(res) {
        const userPage = res.data.html_url
        console.log (userPage)
    });

    //Creates a ReadMe file with the title
    fs.writeFile("README.md", "## " + answers.title + "\n", function(err) {
        if (err) {
            throw err;
        }
    });
    fs.appendFile("README.md", answers.description + "\n", function(err) {
        if (err) {
            throw err;
        }
    });

})