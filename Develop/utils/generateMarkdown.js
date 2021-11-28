// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-${data.color})

  ## Table of Contents
  * [Description] (#description)
  * [Installation] (#installation)
  * [License] (#license)
  * [Contributors] (#contributors)
  * [Testing] (#tests)
  * [Languages] (#languages)
  * [Contact] (#contact)
  
  <div id='description'/>
  ## Description
  ${data.description}

  <a name='installation'></a>
  ## Installation
  ${data.installation}

  <a name='license'></a>
  ## License
  ${data.license}
  

  <a name='contributors'></a>
  ## Contributors
  ${data.contributors}

  <a name='testing'></a>
  ## Testing
  ${data.tests}

   <a name='languages'></a>
  ## Languages
  ${data.languages}

  <a name='contact'></a>
  ## Contact
  https://github.com/${data.github}
  If you have any questions or would like to get in contact please email me at: ${data.contact}.

`;
}

module.exports = generateMarkdown;
