// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license. ![License Badge](https://img.shields.io/badge/license-${data.license}-green)

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions or concerns, please contact ${data.email}. You can also visit [my GitHub profile](https://github.com/${data.username}).
`;
}
module.exports = generateMarkdown;
