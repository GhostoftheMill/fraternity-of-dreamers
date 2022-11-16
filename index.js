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

const generateRead = ({title, description, install, usage, license, contribute, tests, user, email}) =>
  `
  # ${title}

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
        choices: ['MIT', 'Apache', 'GPL', 'WTFPL']
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

    fs.writeFile('README.md', readContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });