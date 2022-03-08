const renderCard = () => {}

const generateHtml = (team) => {
    console.log(team)
    const newTeam = []
    team.forEach(element => {

        if (element.role === 'Manager') {
            const manager = {
                name: element.name,
                id: element.id,
                email: element.email,
                role: element.role,
                officeNumber: element.officeNumber
            }
            newTeam.push(manager)
        }
        if (element.role === 'Engineer') {
            const engineer = {
                name: element.name,
                id: element.id,
                email: element.email,
                role: element.role,
                github: element.github
            }
            newTeam.push(engineer)
        }
        if (element.role === 'Intern') {
            const intern = {
                name: element.name,
                id: element.id,
                email: element.email,
                role: element.role,
                school: element.school
            }
            newTeam.push(intern)
        }

        console.log(newTeam)
    })

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

module.exports = generateHtml