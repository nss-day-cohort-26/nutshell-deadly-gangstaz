// bulma navbar component. will include:
// Article, Event, Friend, Login
// modals with forms will be added to the above components

const navBar = document.querySelector("#navBar");

navBar.innerHTML = `
<div class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="#">
        <b>
        Nutshell
        </b>
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="#">
          Add
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="#">
            Friend
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="#">
            Article
          </a>
          <a class="navbar-item" href="#">
            Event
          </a>
          <a class="navbar-item" href="#">
            Task
          </a>
        </div>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button is-link" href="#">
                Login
            </a>
          </p>
        </div>
      </div>
    </div>
`;
