const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the test instructions?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];
  
  function generateReadme(answers) {
    const licenseBadge = answers.license !== 'None' ? `![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)` : '';
    return `
  # ${answers.title}
  
  ${licenseBadge}
  
  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  \`\`\`
  ${answers.installation}
  \`\`\`
  
  ## Usage
  
  ${answers.usage}
  
  ## License
  
  This project is licensed under the ${answers.license} license.
  
  ## Contributing
  
  ${answers.contribution}
  
  ## Tests
  
  To run tests, run the following command:
  
  \`\`\`
  ${answers.test}
  \`\`\`
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).
  `;
  }
  
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) throw err;
      console.log('Successfully wrote to README.md');
    });
  });