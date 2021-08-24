module.exports = templateData => {

    const { title, description, licenses, installation, usage, contribution, test, github, email } = templateData;

return `
# ${title}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Test](#test)
6. [Licenses](#licenses)

# Description
${description}

# Installation
${installation}

# Usage
${usage}

# Contribution
${contribution}

# Test
${test}

# Licenses
${licenses}

# Questions
You may view my Github profile by using this [link](https://github.com/${github}?tab=repositories)


Have further questions?
Write to me at <${email}>
`
}

