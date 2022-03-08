const inquirer = require('inquirer')
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const generateHTML = require('./src/generateHtml')

const team = []

const engineerQuestions = [{
    type: 'input',
    message: 'Enter engineer\'s name:',
    name: 'name'
},
{
    type: 'input',
    message: 'Enter engineer\'s employee id:',
    name: 'id'
},
{
    type: 'input',
    message: 'Enter engineer\'s email address:',
    name: 'email'
},
{
    type: 'input',
    message: 'Enter engineer\'s GitHub id:',
    name: 'github'
},
{
    type: 'confirm',
    message: 'Would you like to add another team member?',
    name: 'addMember',
    default: false
}
]
const internQuestions = [{
    type: 'input',
    message: 'Enter intern\'s name:',
    name: 'name'
},
{
    type: 'input',
    message: 'Enter intern\'s employee id:',
    name: 'id'
},
{
    type: 'input',
    message: 'Enter intern\'s email address:',
    name: 'email'
},
{
    type: 'input',
    message: 'Enter intern\'s school name:',
    name: 'school'
},
{
    type: 'confirm',
    message: 'Would you like to add another team member?',
    name: 'addMember',
    default: false
}
]

const addEngineer = () => {
    return inquirer.prompt(engineerQuestions)
}

const addIntern = () => {
    return inquirer.prompt(internQuestions)
}

const addMembers = () => {
    return inquirer.prompt({
        type: 'list',
        message: 'Select additional members to add:',
        name: 'role',
        choices: ['Engineer', 'Intern']
    })
}

const buildTeam = () => {
    return inquirer.prompt([{
        type: 'input',
        message: 'Enter team manager\'s name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter manager\'s employee id:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter manager\'s email address:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter manager\'s office number:',
        name: 'officeNumber'
    }
    ])
}

// buildTeam()
//     .then(({ name, id, email, officeNumber, role }) => {
//         if (role === 'Engineer') {
//             addEngineer()
//         }
//         if (role === 'Intern') {
//             addIntern()
//         }
//         return team.push(new Manager(name, id, email, officeNumber))
//     })
//     .then(team => generateHTML(team))

buildTeam()
    .then(({ name, id, email, officeNumber }) => {
        team.push(new Manager(name, id, email, officeNumber))
        return addMembers()
    }).then(({ role }) => {
        console.log('added manager', team)
        if (role === 'Engineer') {
            addEngineer()
                .then(({ name, id, email, github, addMember }) => {
                    if (addMember) {
                        addMembers()
                    }
                    team.push(new Engineer(name, id, email, github))
                    console.log('added engineer', team)
                })
        }
        if (role === 'Intern') {
            addIntern()
                .then(({ name, id, email, school, addMember }) => {
                    if (addMember) {
                        addMembers()
                    }
                    team.push(new Intern(name, id, email, school))
                    console.log('added intern', team)
                })
        }
    }).then(generateHTML(team))