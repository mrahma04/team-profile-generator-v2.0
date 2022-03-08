const fs = require('fs')

const team = [{
    name: 'Jared',
    title: 'Manager',
    id: 1,
    email: 'jared@fakemail.com',
    officeNumber: 1
}, {
    name: 'Alec',
    title: 'Engineer',
    id: 2,
    email: 'alec@fakemail.com',
    github: 'alec'
}, {
    name: 'Mohammad',
    title: 'Engineer',
    id: 2,
    email: 'mohammad@fakemail.com',
    github: 'mohammad'
},
{
    name: 'John',
    title: 'Intern',
    id: 1,
    email: 'john@fakemail.com',
    school: '2University'
}]

// const engineer = team.filter(element => {
//     if (element.title === 'Engineer') {
//         return element
//     }
//     return false
// }).map(element => element)

// console.log(engineer)

function renderManager(obj) {

   // console.log('running renderManager')

    const html = `
    <!-- card begin -->
    <div class="col-md m-2">
        <div class="card" style="width: 12rem">
            <div class="card-header bg-primary text-light">
                <h5 class="card-title">${obj.name}</h5>
                <p class="card-subtitle">
                    <i class="fa-solid fa-mug-hot"></i>
                    ${obj.title}
                </p>
            </div>
            <div class="card-body bg-light">
                <div class="list-group list-group-flush">
                    <div class="list-group-item">ID: ${obj.id}</div>
                    <div class="list-group-item">Email: ${obj.email}</div>
                    <div class="list-group-item">Office number: ${obj.officeNumber}</div>
                </div>
            </div>
        </div>
    </div>
    <!-- card end -->

    `
   // console.log(html)
    return html
}

function renderEngineer(obj) {

   // console.log('running renderEngineer')

    const html = `
    <!-- card begin -->
    <div class="col-md m-2">
        <div class="card" style="width: 12rem">
            <div class="card-header bg-primary text-light">
                <h5 class="card-title">${obj.name}</h5>
                <p class="card-subtitle">
                    <i class="fa-solid fa-glasses"></i>
                    ${obj.title}
                </p>
            </div>
            <div class="card-body bg-light">
                <div class="list-group list-group-flush">
                    <div class="list-group-item">ID: ${obj.id}</div>
                    <div class="list-group-item">Email: ${obj.email}</div>
                    <div class="list-group-item">GitHub: ${obj.github}</div>
                </div>
            </div>
        </div>
    </div>
    <!-- card end -->

    `

    return html
}

function renderIntern(obj) {

   // console.log('running renderIntern')

    const html = `
    <!-- card begin -->
    <div class="col-md m-2">
        <div class="card" style="width: 12rem">
            <div class="card-header bg-primary text-light">
                <h5 class="card-title">${obj.name}</h5>
                <p class="card-subtitle">
                    <i class="fa-solid fa-graduation-cap"></i>
                    ${obj.title}
                </p>
            </div>
            <div class="card-body bg-light">
                <div class="list-group list-group-flush">
                    <div class="list-group-item">ID: ${obj.id}</div>
                    <div class="list-group-item">Email: ${obj.email}</div>
                    <div class="list-group-item">School: ${obj.school}</div>
                </div>
            </div>
        </div>
    </div>
    <!-- card end -->

    `

    return html
}

function renderCard(team) {

   // console.log('running renderCard')

    const cardsHtmlArr = []

    team.forEach(element => {
        if (element.title === 'Manager') {
            const managerHtml = renderManager(element)
            cardsHtmlArr.push(managerHtml)
        } else if (element.title === 'Engineer') {
            const engineerHtml = renderEngineer(element)
            cardsHtmlArr.push(engineerHtml)
        } else if (element.title === 'Intern') {
            const internHtml = renderIntern(element)
            cardsHtmlArr.push(internHtml)
        }
    })

    console.log(cardsHtmlArr)
    return cardsHtmlArr.join('')

    // const manager = team.filter(element => {
    //     if (element.title === 'Manager') {
    //         return element
    //     }
    //     return false
    // }).map(element => element)

    // console.log(manager)

    // const intern = team.filter(element => {
    //     if (element.title === 'Intern') {
    //         return element
    //     }
    //     return false
    // }).map(element => element)

    // console.log(intern)

    // const engineer = team.filter(element => {
    //     if (element.title === 'Engineer') {
    //         return element
    //     }
    //     return false
    // }).map(element => element)

    // console.log(engineer)

    // if (manager) {
    //     return forEach(manager => renderManager(manager))
    // }
    // if (engineer) {
    //     return forEach(engineer => renderEngineer(engineer))
    // }
    // if (intern) {
    //     return forEach(intern => renderIntern(intern))
    // }
}

function generateHTML(team) {
    // console.log('running generateHTML')
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/93d218ca71.js" crossorigin="anonymous"></script>
    </head>

    <body>
        <div class="container">
            <div class="row mb-4">
                <div class="col bg-danger">
                    <h1 class="display-3 text-center">My Team</h1>
                </div>
            </div>
            <div class="row justify-content-center">
                ${renderCard(team)}
            </div>
        </div>
    </body>

    </html>
    `
}

fs.writeFile('./dist/index.html', generateHTML(team), err => {
    if (err) throw err
    console.log('HTML file generatd! Check dist/ folder for new index.html file')
})