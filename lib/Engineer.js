const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email)

        this.role = role
        this.github = github
    }
    getRole() {
        return this.role
    }
    getGithub() {
        return this.github
    }
}

module.exports = Engineer