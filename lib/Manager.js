const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email)

        this.role = role
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager