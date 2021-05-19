function renderManager(teamMembers) {
  return ` <div class="row">
<div class="card text-white bg-primary m-3 col-2">
  <div class="card-header">Manager: ${teamMembers[0].name}</div>
  <div class="card-body">
    <p class="card-text">ID: ${teamMembers[0].id}</p>
    <p class="card-text">Email: ${teamMembers[0].email}</p>
    <p class="card-text">Office number: ${teamMembers[0].office}</p>
  </div>
</div>`;
}

function renderEngineer(teamMembers) {
  const engineers = teamMembers.filter((obj) => obj.getRole() === "Engineer");
  console.log(engineers);
  let engString = "";
  engineers.forEach((engineer) => {
    engString += ` <div class="card text-white bg-primary m-3 col-2">
        <div class="card-header">Engineer: ${engineer.getName()}</div>
        <div class="card-body">
          <p class="card-text">ID: ${engineer.getId()}</p>
          <p class="card-text">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
          <p class="card-text">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
        </div>
      </div>`;
  });
  return engString;
}

function renderIntern(teamMembers) {
  const interns = teamMembers.filter((obj) => obj.getRole() === "Intern");
  console.log(interns);
  let internString = "";
  interns.forEach((intern) => {
    internString += ` <div class="card text-white bg-primary m-3 col-2">
        <div class="card-header">Engineer: ${intern.getName()}</div>
        <div class="card-body">
          <p class="card-text">ID: ${intern.getId()}</p>
          <p class="card-text">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
          <p class="card-text">School: ${intern.getSchool()}</p>
        </div>
      </div>`;
  });
  return internString;
}

function renderHeader() {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="./style.css" />
        <title>Team Page</title>
      </head>
      <body>
        <header><h1>My Team</h1></header>`;
}

function renderFooter() {
  return ` </div>
    </div>
  </body>
</html>`;
}

function generateMarkdown(teamMembers) {
  return `
  ${renderHeader()}
 ${renderManager(teamMembers)}
  ${renderEngineer(teamMembers)}
  ${renderIntern(teamMembers)}
  ${renderFooter()}`;
}

module.exports = generateMarkdown;
