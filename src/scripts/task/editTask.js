// // const CardList = require("../general/cardList");
// // const saveNLoad = require("../general/saveNloadDatabase")
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

// const editTask = () => {
//   const taskId = event.currentTarget.parentNode.id
//   database.editTask.(taskId)
//   .then(() => {
//     console.log("task to be edited");
//     buildEditContactForm(response)
//   })
// }


// const taskbtn = document.querySelector(".editTask"); // queries task button in index.html
// taskbtn.addEventListener("click", () => { // adds click event to button
//     // sets the text to be included in modal
//     modal.innerHTML = `
//     <div class="modal-background has-text-centered"></div>
//       <div class="modal-card">
//         <header class="modal-card-head">
//           <p class="modal-card-title has-text-centered">Task</p>
//           <button class="delete" aria-label="close"></button>
//         </header>
//         <section class="modal-card-body has-text-centered">
//             <form>
//                 <p>Name:</p><input id="taskName" type="text"></input>
//                 <p>Due Date:</p><input id="taskDueDate" type="date"></input>
//             </form>
//         </section>
//         <footer class="modal-card-foot buttons is-centered">
//           <button id="addTaskBtn" class="button is-link">Add Task</button>
//         </footer>
//       </div>
//       ;