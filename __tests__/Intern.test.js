const Intern = require('../lib/Intern')

const john = {
    name: 'John',
    id: 3,
    email: 'john@fakemail.com',
    role: 'Intern',
    school: '2University'
}

const { name, id, email, role, school } = john

test('creates an intern object', () => {
    const intern = new Intern(name, id, email, role, school)

    expect(intern.name).toBe(name)
    expect(intern.id).toEqual(id)
    expect(intern.email).toBe(email)
    expect(intern.role).toBe(role)
    expect(intern.school).toBe(school)
})

test('gets intern object\'s name', () => {
    const intern = new Intern(name, id, email, role, school)

    expect(intern.getName()).toBe(name)
})

test('gets intern object\'s id', () => {
    const intern = new Intern(name, id, email, role, school)

    expect(intern.getId()).toEqual(3)
})

test('gets intern object\'s email address', () => {
    const intern = new Intern(name, id, email, role, school)

    expect(intern.getEmail()).toBe(email)
})

test('gets role of intern object', () => {
    const intern = new Intern(name, id, email, role, school)

    expect(intern.getRole()).toBe(role)
})

test('gets school id of intern object', () => {
    const intern = new Intern(name, id, email, role, school)

    expect(intern.getSchool()).toBe(school)
})