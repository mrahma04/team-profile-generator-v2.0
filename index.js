const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHtml = require('./src/generateHtml')

const team = []

const managerPrompts = [
    {
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
]

const engineerPrompts = [
    {
        type: 'input',
        message: 'Enter engineer\'s name:',
        name: 'name',
        when: ({ addMember }) => addMember === 'Engineer' ? true : false
    },
    {
        type: 'input',
        message: 'Enter engineer\'s employee id:',
        name: 'id',
        when: ({ addMember }) => addMember === 'Engineer' ? true : false
    },
    {
        type: 'input',
        message: 'Enter engineer\'s email address:',
        name: 'email',
        when: ({ addMember }) => addMember === 'Engineer' ? true : false
    },
    {
        type: 'input',
        message: 'Enter engineer\'s GitHub id:',
        name: 'github',
        when: ({ addMember }) => addMember === 'Engineer' ? true : false
    }
]

const internPrompts = [
    {
        type: 'input',
        message: 'Enter intern\'s name:',
        name: 'name',
        when: ({ addMember }) => addMember === 'Intern' ? true : false
    }
    ,
    {
        type: 'input',
        message: 'Enter intern\'s employee id:',
        name: 'id',
        when: ({ addMember }) => addMember === 'Intern' ? true : false
    },
    {
        type: 'input',
        message: 'Enter intern\'s email address:',
        name: 'email',
        when: ({ addMember }) => addMember === 'Intern' ? true : false
    },
    {
        type: 'input',
        message: 'Enter intern\'s school name:',
        name: 'school',
        when: ({ addMember }) => addMember === 'Intern' ? true : false
    }
]

const addManager = () => {
    return inquirer.prompt(managerPrompts)
        .then(({ name, id, email, officeNumber }) => {
            const manager = new Manager(name, id, email, officeNumber)
            team.push(manager)
        })
}

const addEmployees = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', 'Intern', 'Done']
        }, ...engineerPrompts, ...internPrompts
    ]).then((answers) => {
        if (answers.addMember === 'Engineer') {
            const { name, id, email, github } = answers
            team.push(new Engineer(name, id, email, github))
        } else if (answers.addMember === 'Intern') {
            const { name, id, email, school } = answers
            team.push(new Intern(name, id, email, school))
        } else {
            return
        }
        return addEmployees()
    })
}

addManager()
    .then(() => addEmployees())
    // .then(addEmployees)
    .then(() => generateHtml(team))
    .then(html => fs.writeFile('./dist/index.html', html, err => {
        if(err) throw err
        console.log('HTML generate')
    }))