// // const CardList = require("../general/cardList");
const eventHandler = require("../general/eventHandler");
const saveNLoad = require("../general/saveNloadDatabase");
const cardList = require("../general/cardList")
const valueAndList = require("../general/valueAndList")
// // const checkBox = document.querySelector(".checkbox");


// // console.log(checkBox, "checkbox")
// // checkBox.addEventListener("click", () => {
// //   if (event.target.className === "articleRemove") {

// //     let articleId = event.target.parentNode.id;
// //     console.log(articleId);
// //     saveNLoad.deleteArticle(articleId)
// //       .then(() => {
// //         CardList.articleList()
// //       })
// //   }
// // })


const taskContainer = document.querySelector("#taskContainer"); // queries task button in index.html
taskContainer.addEventListener("click", () => { // adds click event to button
    // sets the text to be included in modal
    if (event.target.className === "editTask") {
        let taskId = event.target.parentNode.id
        // console.log(taskId);
        saveNLoad.getTask(taskId)
        .then((response) => {
            const editModal = document.querySelector(".editModal");
editModal.innerHTML = `
    <div class="modal-background has-text-centered"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">Task</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body has-text-centered">
            <form>
                <p>Name:</p><input id="taskName" type="text"></input>                
            </form>
        </section>
        <footer class="modal-card-foot buttons is-centered">
          <button id="TaskBtn" class="button is-link">Save</button>
        </footer>
      </div>
    `
            editModal.classList.add("is-active")
            })
            .then((response) => {
                editTaskBtn = document.getElementById("TaskBtn")
                editTaskBtn.addEventListener("click", valueAndList.taskValueAndList); // pass in function that will get input values and PUT data into database

                let deleteBtn = document.querySelector(".delete"); // queries the '.delete' class attached to the delete button above located in the modal.innerHTML
                deleteBtn.addEventListener("click", () => { // adds click event to button
                    editModal.classList.remove("is-active");
                })
            })
        }
    })