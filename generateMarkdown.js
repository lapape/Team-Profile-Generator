function renderManager() {
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
