// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
 
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage

  ## License
  ${data.license}

  ## Contributing

  ## Tests

  ## Questions
  If you have any questions about this project you can refer to my GitHub profile: [${data.github}](https://github.com/${data.github})
  OR you may email me at ${data.email}
  `;
}

function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

module.exports = generateMarkdown;
