// handles click events from navbar items
let inputValues = require("./getFormVals")

const modal = document.querySelector(".modal"); // queries modal container in index.html

const getArticleVal = () => {
    let articleTitle = document.getElementById("articleTitle").value;
    let articleSummary = document.getElementById("articleSummary").value;
    let articleUrl = document.getElementById("articleUrl").value;
    console.log("Title:", articleTitle);
    console.log("Summary:", articleSummary);
    console.log("Link:", articleUrl);
}

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

    addArticleBtn.addEventListener("click", inputValues.articleValue); // pass in function that will get input values and PUT data into database

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
    addEventBtn.addEventListener("click", inputValues.eventValue); // pass in function that will get input values and PUT data into database

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
                <p>Due Date:</p><input id="taskDueDate" type="text"></input>
            </form>
        </section>
        <footer class="modal-card-foot buttons is-centered">
          <button id="addTaskBtn" class="button is-link">Add Task</button>
        </footer>
      </div>
    `;

    modal.classList.add("is-active"); // bulma's modal component is inactive by default. Therefore, in order to activate the modal, you need to add this classname

    const addTaskBtn = document.getElementById("addTaskBtn"); // queries addTaskBtn located in modal.innerHTML. User will enter value into input fields and use this button to submit data
    addTaskBtn.addEventListener("click", inputValues.taskValue); // pass in function that will get input values and PUT data into database

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
            <select id= "friendDropDown">
                <option>Sathvik Reddy</option>
                <option>Natasha Cox</option>
                <option>Austin Gorman</option>
                <option>Jewel Ramirez</option>
            </select>
        </section>
        <footer class="modal-card-foot buttons is-centered">
          <button id="addFriendBtn" class="button is-link">Add Friend</button>
        </footer>
      </div>
    `;

    modal.classList.add("is-active"); // bulma's modal component is inactive by default. Therefore, in order to activate the modal, you need to add this classname

    const addFriendBtn = document.getElementById("addFriendBtn"); // queries addFriendBtn located in modal.innerHTML. User will enter value into input fields and use this button to submit data
    addFriendBtn.addEventListener("click", () => {}); // pass in function that will get input values and PUT data into database

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
                <p>Email:</p><input id="registerEmail" type="email"></input>
                <p>Password:</p><input id="registerPassword" type="password"></input>
            </form>
        </section>
        <footer class="modal-card-foot buttons is-centered">
          <button id="RegisterBtn" class="button is-link">Register</button>
        </footer>
      </div>
    `;

    modal.classList.add("is-active"); // bulma's modal component is inactive by default. Therefore, in order to activate the modal, you need to add this classname

    const RegisterBtn = document.getElementById("RegisterBtn"); // queries addLoginBtn located in modal.innerHTML. User will select value in dropdown and use this button to submit data
    RegisterBtn.addEventListener("click", inputValues.registerValue); // pass in function that will get select option values and PUT data into database

    let deleteBtn = document.querySelector(".delete"); // queries the '.delete' class attached to the delete button above located in the modal.innerHTML
    deleteBtn.addEventListener("click", () => { // adds click event to button
        modal.classList.remove("is-active"); // removes the "is-active" class in order to exit bulma's modal component
    });
});
