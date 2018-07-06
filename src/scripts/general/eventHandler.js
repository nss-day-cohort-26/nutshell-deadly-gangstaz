// handles click events from navbar items

const valueAndList = require("./valueAndList");
const dropDown = require("../friend/dropDown");

const modal = document.querySelector(".modal"); // queries modal container in index.html

const articleBtn = document.querySelector("#articleBtn"); // queries article button in index.html
articleBtn.addEventListener("click", () => { // adds click event to button
    // sets the text to be included in modal
    modal.innerHTML = `
    <div class="modal-background has-text-centered"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">Article</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body has-text-centered">
            <form>
                <p>Name:</p><input id="articleTitle" type="text"></input>
                <p>Summary:</p><input id="articleSummary" type="text"></input>
                <p>Link:</p><input id="articleUrl" type="url"></input>
            </form>
        </section>
        <footer class="modal-card-foot buttons is-centered">
          <button id="addArticleBtn" class="button is-link">Add Article</button>
        </footer>
      </div>
    `;

    modal.classList.add("is-active"); // bulma's modal component is inactive by default. Therefore, in order to activate the modal, you need to add this classname

    const addArticleBtn = document.getElementById("addArticleBtn"); // queries addArticleBtn located in modal.innerHTML. User will enter value into input fields and use this button to submit data

    addArticleBtn.addEventListener("click", valueAndList.articleValueAndList); // pass in function that will get input values and PUT data into database

    let deleteBtn = document.querySelector(".delete"); // queries the '.delete' class attached to the delete button above located in the modal.innerHTML
    deleteBtn.addEventListener("click", () => { // adds click event to button
        modal.classList.remove("is-active"); // removes the "is-active" class in order to exit bulma's modal component
    });
});

const eventBtn = document.querySelector("#eventBtn"); // queries event button in index.html
eventBtn.addEventListener("click", () => { // adds click event to button
    // sets the text to be included in modal
    modal.innerHTML = `
    <div class="modal-background has-text-centered"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">Event</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body has-text-centered">
            <form>
                <p>Name:</p><input id="eventTitle" type="text"></input>
                <p>Date:</p><input id="eventDate" type="date"></input>
                <p>Location:</p><input id="eventLocation" type="text"></input>
            </form>
        </section>
        <footer class="modal-card-foot buttons is-centered">
          <button id="addEventBtn" class="button is-link">Add Event</button>
        </footer>
      </div>
    `;

    modal.classList.add("is-active"); // bulma's modal component is inactive by default. Therefore, in order to activate the modal, you need to add this classname

    const addEventBtn = document.getElementById("addEventBtn"); // queries addEventBtn located in modal.innerHTML. User will enter value into input fields and use this button to submit data
    addEventBtn.addEventListener("click", valueAndList.eventValueAndList); // pass in function that will get input values and PUT data into database

    let deleteBtn = document.querySelector(".delete"); // queries the '.delete' class attached to the delete button above located in the modal.innerHTML
    deleteBtn.addEventListener("click", () => { // adds click event to button
        modal.classList.remove("is-active"); // removes the "is-active" class in order to exit bulma's modal component
    });
});

const taskbtn = document.querySelector("#taskBtn"); // queries task button in index.html
taskbtn.addEventListener("click", () => { // adds click event to button
    // sets the text to be included in modal
    modal.innerHTML = `
    <div class="modal-background has-text-centered"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">Task</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body has-text-centered">
            <form>
                <p>Name:</p><input id="taskName" type="text"></input>
                <p>Due Date:</p><input id="taskDueDate" type="date"></input>
            </form>
        </section>
        <footer class="modal-card-foot buttons is-centered">
          <button id="addTaskBtn" class="button is-link">Add Task</button>
        </footer>
      </div>
    `;

    modal.classList.add("is-active"); // bulma's modal component is inactive by default. Therefore, in order to activate the modal, you need to add this classname

    const addTaskBtn = document.getElementById("addTaskBtn"); // queries addTaskBtn located in modal.innerHTML. User will enter value into input fields and use this button to submit data
    addTaskBtn.addEventListener("click", valueAndList.taskValueAndList); // pass in function that will get input values and PUT data into database

    let deleteBtn = document.querySelector(".delete"); // queries the '.delete' class attached to the delete button above located in the modal.innerHTML
    deleteBtn.addEventListener("click", () => { // adds click event to button
        modal.classList.remove("is-active"); // removes the "is-active" class in order to exit bulma's modal component
    });
});

const friendBtn = document.querySelector("#friendBtn"); // queries friend button in index.html
friendBtn.addEventListener("click", () => { // adds click event to button
    // sets the text to be included in modal
    modal.innerHTML = `
    <div class="modal-background has-text-centered"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">Friend</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body has-text-centered">
            <p>Select a Friend!</p>
            <select id="friendDropDown"></select>
        </section>
        <footer class="modal-card-foot buttons is-centered">
          <button id="addFriendBtn" class="button is-link">Add Friend</button>
        </footer>
      </div>
    `;

    modal.classList.add("is-active"); // bulma's modal component is inactive by default. Therefore, in order to activate the modal, you need to add this classname

    dropDown.addFriendDropDown(); // adds friend names to drop down list

    const addFriendBtn = document.getElementById("addFriendBtn"); // queries addFriendBtn located in modal.innerHTML. User will enter value into input fields and use this button to submit data
    // addFriendBtn.addEventListener("click", valueAndList.friendValueAndList); // pass in function that will get input values and PUT data into database

    let deleteBtn = document.querySelector(".delete"); // queries the '.delete' class attached to the delete button above located in the modal.innerHTML
    deleteBtn.addEventListener("click", () => { // adds click event to button
        modal.classList.remove("is-active"); // removes the "is-active" class in order to exit bulma's modal component
    });
});

const registerBtn = document.querySelector("#registerBtn"); // queries login button in index.html
registerBtn.addEventListener("click", () => { // adds click event to button
    // sets the text to be included in modal
    modal.innerHTML = `
    <div class="modal-background has-text-centered"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">Register</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body has-text-centered">
            <form>
                <p>Name:</p><input id="registerName" type="text"></input>
                <p>Email:</p><input id="registerEmail" type="email"></input>
                <p>Password:</p><input id="registerPassword" type="password"></input>
            </form>
        </section>
        <footer class="modal-card-foot buttons is-centered">
          <button id="registrationBtn" class="button is-link">Register</button>
        </footer>
      </div>
    `;

    modal.classList.add("is-active"); // bulma's modal component is inactive by default. Therefore, in order to activate the modal, you need to add this classname

    const registrationBtn = document.getElementById("registrationBtn"); // queries addLoginBtn located in modal.innerHTML. User will select value in dropdown and use this button to submit data
    registrationBtn.addEventListener("click", valueAndList.registerValueAndList) // pass in function that will get select option values and PUT data into database

    let deleteBtn = document.querySelector(".delete"); // queries the '.delete' class attached to the delete button above located in the modal.innerHTML
    deleteBtn.addEventListener("click", () => { // adds click event to button
        modal.classList.remove("is-active"); // removes the "is-active" class in order to exit bulma's modal component
    });
});
