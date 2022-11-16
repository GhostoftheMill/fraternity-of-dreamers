// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
//const readQuestions = [];

// TODO: Create a function to write README file
//function writeFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

const generateRead = ({title, description, install, usage, license, contribute, tests, user, email, badge}) =>
  `
  # ${title}
  ${badge}

  ## Description
  >${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  </ul>

  ## Installation
  >${install}

  ## Usage
  >${usage}

  ## License
  >${license}

  ## Contributing
  >${contribute}

  ## Tests
  >${tests}

  ## Questions
  >[Click for GitHub Repo](https://github.com/${user})
  \
  [Send me an email](mailto:${email})
  `;

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a short description of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How would one install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license should this project have?',
        choices: ['MIT', 'Apache', 'Creative Commons', 'WTFPL']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How could one contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How would one test this project?',
      },
    {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub name?',
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
  ])
  .then((answers) => {
    const readContent = generateRead(answers);
  
    //var badge = answers.badge
      //if (answers.license === 'MIT') {
      //badge ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
      //} else if (answers.license === 'Apache') {
      //badge ('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
      //} else if (answers.license === 'Creative Commons') {
      //badge ('[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)');
      //} else if (answers.license === 'WTFPL') {
      //badge ('[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)');
    //}};

    fs.writeFile('README.md', readContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });