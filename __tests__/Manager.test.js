const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 1)

    expect(manager.name).toBe('Jared')
    expect(manager.id).toEqual(1)
    expect(manager.email).toBe('jared@fakemail.com')
    expect(manager.role).toBe('Manager')
    expect(manager.officeNumber).toEqual(1)
})

test('gets manager object\'s name', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 1)

    expect(manager.getName()).toBe('Jared')
})

test('gets manager object\'s id', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 1)

    expect(manager.getId()).toEqual(1)
})

test('gets manager object\'s email address', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 1)

    expect(manager.getEmail()).toBe('jared@fakemail.com')
})

test('gets role of manager object', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 1)

    expect(manager.getRole()).toBe('Manager')
})