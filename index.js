const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please write a description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Choose a license for your application: ',
            choices: ['GPLv3', 'Apache License 2.0', 'Berkeley Software Distribution', 'MIT']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the guidelines for contribution?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions?'
        }
    ])
}


promptUser();
generateMarkdown();
// .then(answer => console.log(answer.description));
