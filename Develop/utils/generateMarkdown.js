// Function that returns a license badge and license link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === ok) {
    return `
    ![License](https://img.shields.io/badge/License-${data.license}-red)
    (https://img.shields.io/github/license/${github}/${githubRepo})
    `;
  } else {
    return `""`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Table of Contents
  * [Description] (#description)
  * [Installation] (#installation)
  * [License] (#license)
  * [Contributors] (#contributors)
  * [Testing] (#tests)
  * [Languages] (#languages)
  * [Contact] (#contact)
  
  <a name='description'></a>
  ## Description
  # ${data.description}

  <a name='installation'></a>
  ## Installation
  # ${data.installation}

  <a name='license'></a>
  ## License
  # ${data.license}

  <a name='contributors'></a>
  ## Contributors
  # ${data.contributors}

  <a name='testing'></a>
  ## Testing
  # ${data.tests}

   <a name='languages'></a>
  ## Languages
  # ${data.languages}

  <a name='contact'></a>
  ## Contact
  # ${data.contact}
`;
}

module.exports = generateMarkdown;
