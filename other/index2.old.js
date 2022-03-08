const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

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

const employeePrompts = [
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'addMember',
        choices: ['Engineer', 'Intern', 'Done']
    },
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
    },
    {
        type: 'input',
        message: 'Enter intern\'s name:',
        name: 'name',
        when: ({ addMember }) => addMember === 'Intern' ? true : false
    },
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
        name: 'github',
        when: ({ addMember }) => addMember === 'Intern' ? true : false
    }
]

const addManager = () => {
    return inquirer.prompt(managerPrompts)
        .then(({ name, id, email, officeNumber }) => {
            team.push(new Manager(name, id, email, officeNumber))
        })
}

const addEmployees = () => {
    return inquirer.prompt(employeePrompts)
        .then(({ name, id, email, github, addMember }) => {
            if (addMember === 'Engineer') {
                team.push(new Engineer(name, id, email, github))
            } else if (addMember === 'Intern') {
                team.push(new Intern(name, id, email, github))
            } else {
                return
            }
            return addEmployees()
        })
}

addManager()
    .then(addEmployees)
    .then(() => console.log(team))