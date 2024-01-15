const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    { type: 'input', name: 'title', message: 'Enter the title of your project:' },
    { type: 'input', name: 'description', message: 'Provide a short description of your project:' },
    { type: 'input', name: 'installation', message: 'Enter installation instructions:' },
    { type: 'input', name: 'usage', message: 'Provide usage information:' },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application:',
            choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
        },
    { type: 'input', name: 'contributing', message: 'Provide contribution guidelines:' },
    { type: 'input', name: 'tests', message: 'Provide test instructions:' },
    { type: 'input', name: 'username', message: 'Enter your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' },
    ];

// function to write README file
function writeToFile(fileName, data) {
    const outputPath = path.join(__dirname, fileName);
    const readmeContent = generateMarkdown(data);

    fs.writeFile(outputPath, readmeContent, (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README.md has been successfully created!');
        }
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers);
        })
        .catch((error) => console.error(error));
}


// function call to initialize program
init();
