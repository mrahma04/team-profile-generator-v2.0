const inquirer = require('inquirer')

const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

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
        message: 'Select additional members to add:',
        name: 'role',
        choices: ['Engineer', 'Intern']
    },

]

const engineerPrompts = [
    {
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
const internPrompts = [
    {
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

const addManager = () => {
    return inquirer.prompt(managerPrompts)
        .then(({ name, id, email, officeNumber }) => {
            console.log('pushing to team')
            const test = new Manager(name, id, email, officeNumber)
            team.push(test)
        })
}

const addEmployees = () => {
    return inquirer.prompt(employeePrompts)
        .then(({ role }) => {
            if (role === 'Engineer') {
                return inquirer.prompt(engineerPrompts)
                    .then(({name, id, email, github}) => {
                        team.push(new Engineer(name, id, email, github))
                    })
            }
            if (role === 'Intern') {
                return inquirer.prompt(internPrompts)
                    .then(({name, id, email, school}) => {
                        team.push(new Intern(name, id, email, school))
                    })
            }
        })
}

const addEngineer = () => {
    return inquirer.prompt(engineerPrompts)
    // .then(() => {
    //     team.push(new Engineer(name, id, email, github))
    // })
}

const addIntern = () => {
    return inquirer.prompt(internPrompts)
    // .then(({name, id, email, school}) => {
    //     team.push(new Intern(name, id, email, school))
    // })
}


addManager()
    // .then((answers) => console.log(answers))
    .then(() => addEmployees())
    .then(() => console.log(team))
    // .then(addEmployees)
    // .then(() => console.log(team))
    // .then(() => console.log(team))
    // .then(({role}) => {
    //     if(role === 'Engineer') {
    //         addEngineer()
    //             .then(({name, id, email, github}) => {
    //                 team.push(new Engineer(name, id, email, github))
    //             })
    //     }
    //     if(role === 'Intern') {
    //         addIntern()
    //             .then(({name, id, email, school}) => {
    //                 team.push(new Intern(name, id, email, github))
    //             })
    //     }
    // })
    // .then(() => console.log(team))