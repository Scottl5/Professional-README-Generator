// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.project}
  ## Description
  ${answers.description}
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ## Installation
  To install necessary dependencies, run the following command:
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  This project is licensed under the ${answers.license} license
  ## Contributing
  ${answers.contributing}
  ## Tests
  To run tests, run the following command:
  ${answers.tests}
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly and ${answers.email}. You can find more of my work at ${answers.name}
`;
}

module.exports = generateMarkdown;
