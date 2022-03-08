const renderManager = (obj) => {
    const html = `
    <!-- card begin -->
    <div class="col-md m-2">
        <div class="card" style="width: 18rem; min-height: 12rem">
            <div class="card-header bg-primary text-light">
                <h5 class="card-title">${obj.name}</h5>
                <p class="card-subtitle">
                    <i class="fa-solid fa-mug-hot"></i>
                    ${obj.role}
                </p>
            </div>
            <div class="card-body bg-light">
                <div class="list-group list-group-flush">
                    <div class="list-group-item">ID: ${obj.id}</div>
                    <div class="list-group-item">Email: <a href = "mailto: ${obj.email}">${obj.email}</a></div>
                    <div class="list-group-item">Office number: ${obj.officeNumber}</div>
                </div>
            </div>
        </div>
    </div>
    <!-- card end -->

    `
    return html
}

const renderEngineer = (obj) => {
    const html = `
    <!-- card begin -->
    <div class="col-md m-2">
        <div class="card" style="width: 18rem; min-height: 12rem">
            <div class="card-header bg-primary text-light">
                <h5 class="card-title">${obj.name}</h5>
                <p class="card-subtitle">
                    <i class="fa-solid fa-glasses"></i>
                    ${obj.role}
                </p>
            </div>
            <div class="card-body bg-light">
                <div class="list-group list-group-flush">
                    <div class="list-group-item">ID: ${obj.id}</div>
                    <div class="list-group-item">Email: <a href = "mailto: ${obj.email}">${obj.email}</a></div>
                    <div class="list-group-item">GitHub: <a href = "https://github.com/${obj.github}">${obj.github}</a></div>
                </div>
            </div>
        </div>
    </div>
    <!-- card end -->

    `
    return html
}

const renderIntern = (obj) => {
    const html = `
    <!-- card begin -->
    <div class="col-md m-2">
        <div class="card" style="width: 18rem; min-height: 12rem">
            <div class="card-header bg-primary text-light">
                <h5 class="card-title">${obj.name}</h5>
                <p class="card-subtitle">
                    <i class="fa-solid fa-graduation-cap"></i>
                    ${obj.role}
                </p>
            </div>
            <div class="card-body bg-light">
                <div class="list-group list-group-flush">
                    <div class="list-group-item">ID: ${obj.id}</div>
                    <div class="list-group-item">ID: ${obj.id}</div>
                    <div class="list-group-item">Email: <a href = "mailto: ${obj.email}">${obj.email}</a></div>
                    <div class="list-group-item">School: ${obj.school}</div>
                </div>
            </div>
        </div>
    </div>
    <!-- card end -->

    `
    return html
}

const renderCard = (team) => {
    const cardsHtmlArr = []

    team.forEach(element => {
        if (element.role === 'Manager') {
            const managerHtml = renderManager(element)
            cardsHtmlArr.push(managerHtml)
        } else if (element.role === 'Engineer') {
            const engineerHtml = renderEngineer(element)
            cardsHtmlArr.push(engineerHtml)
        } else if (element.role === 'Intern') {
            const internHtml = renderIntern(element)
            cardsHtmlArr.push(internHtml)
        }
    })
    return cardsHtmlArr.join('')
}

const generateHtml2 = (team) => {
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

module.exports = generateHtml2