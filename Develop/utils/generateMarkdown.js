// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
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
  If you have any questions about this project you can refer to my GitHub profile: [GitHub](github.com/${data.github})
  OR you may email me at ${data.email}
  `;
}

//michael sent link in Slack for badges
//generate a badge for license. notice is added to the section of the README entitled 'License'
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

module.exports = generateMarkdown;

//Google a method for accessing Readme links section by clicking it in Node.js
//     hardcode table of contents and add links
