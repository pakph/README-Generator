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
        message: "Enter the command line to install the necessary npm: ",
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
        const userPage = res.data.html_url;
        const userAvatar = res.data.avatar_url;
        const userId = res.data.login;

        //Creates a ReadMe file with the title
    fs.writeFileSync("README.md", "# " + answers.title + "\n", function(err) {
        if (err) {
            throw err;
        }
    });

    //Adds the Desciption Section
    fs.appendFileSync("README.md", answers.description + "\n", function(err) {
        if (err) {
            throw err;
        }
    });

    //Adds the Installation Section
    fs.appendFileSync("README.md", "## Installation\n", function(err) {
        if (err) {
            throw err;
        }
    });
    fs.appendFileSync("README.md", "`<addr>` " + answers.installation + "\n", function(err) {
        if (err) {
            throw err;
        }
    });

    //Adds the Usage Section
    fs.appendFileSync("README.md", "## Usage\n", function(err) {
        if (err) {
            throw err;
        }
    });
    fs.appendFileSync("README.md", answers.usage + "\n", function(err) {
        if (err) {
            throw err;
        }
    });

    //Adds the License Section
    fs.appendFileSync("README.md", "## License\n", function(err) {
        if (err) {
            throw err;
        }
    });
    fs.appendFileSync("README.md", answers.license + "\n", function(err) {
        if (err) {
            throw err;
        }
    });

    //Adds the Contributing Section
    fs.appendFileSync("README.md", "## Contributing\n", function(err) {
        if (err) {
            throw err;
        }
    });
    fs.appendFileSync("README.md", answers.contributing + "\n", function(err) {
        if (err) {
            throw err;
        }
    });

    //Adds the Test Section
    fs.appendFileSync("README.md", "## Test\n", function(err) {
        if (err) {
            throw err;
        }
    });
    fs.appendFileSync("README.md", answers.test + "\n", function(err) {
        if (err) {
            throw err;
        }
    });
    fs.appendFileSync("README.md", "## Questions\n", function(err) {
        if (err) {
            throw err;
        }
    });
    fs.appendFileSync("README.md", "Reach out to me here:\n", function(err) {
        if (err) {
            throw err;
        }
    });
    fs.appendFileSync("README.md", "![" + userId +"](" + userAvatar + ")" + "\n", function(err) {
        if (err) {
            throw err;
        }
    });
    fs.appendFileSync("README.md", answers.email, function(err) {
        if (err) {
            throw err;
        }
    });

    });
  
})