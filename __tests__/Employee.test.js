const Employee = require('../lib/Employee')

test('creates a new employee object', () => {
    const employee = new Employee('Jared', 1, 'jared@fakemail.com')

    expect(employee.name).toBe('Jared')
    expect(employee.id).toEqual(1)
    expect(employee.email).toBe('jared@fakemail.com')
})

test('gets employee object\'s name', () => {
    const employee = new Employee('Jared', 1, 'jared@fakemail.com')

    expect(employee.getName()).toBe('Jared')
})

test('gets employee object\'s id', () => {
    const employee = new Employee('Jared', 1, 'jared@fakemail.com')

    expect(employee.getId()).toEqual(1)
})

test('gets employee object\'s email address', () => {
    const employee = new Employee('Jared', 1, 'jared@fakemail.com')

    expect(employee.getEmail()).toBe('jared@fakemail.com')
})

test('gets employee object\'s role', () => {
    const employee = new Employee('Jared', 1, 'jared@fakemail.com')

    expect(employee.getRole()).toBe('Employee')
})