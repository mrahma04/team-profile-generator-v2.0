const Engineer = require('../lib/Engineer')

const alec = {
    name: 'Alec',
    id: 2,
    email: 'alec@fakemail.com',
    role: 'Engineer',
    github: 'alec'
}

const { name, id, email, role, github } = alec

test('creates an engineer object', () => {
    const engineer = new Engineer(name, id, email, role, github)

    expect(engineer.name).toBe(name)
    expect(engineer.id).toEqual(id)
    expect(engineer.email).toBe(email)
    expect(engineer.role).toBe(role)
    expect(engineer.github).toBe(github)
})

test('gets engineer object\'s name', () => {
    const engineer = new Engineer(name, id, email, role, github)

    expect(engineer.getName()).toBe(name)
})

test('gets engineer object\'s id', () => {
    const engineer = new Engineer(name, id, email, role, github)

    expect(engineer.getId()).toEqual(2)
})

test('gets engineer object\'s email address', () => {
    const engineer = new Engineer(name, id, email, role, github)

    expect(engineer.getEmail()).toBe(email)
})

test('gets role of engineer object', () => {
    const engineer = new Engineer(name, id, email, role, github)

    expect(engineer.getRole()).toBe(role)
})

test('gets github id of engineer object', () => {
    const engineer = new Engineer(name, id, email, role, github)

    expect(engineer.getGithub()).toBe(github)
})