const displayArticleModal = require("../article/articleModal")
// handlers click events from navbar items
const eventBtn = document.querySelector("#eventBtn");
eventBtn.addEventListener("click", () => {
console.log("event works")
})
const taskbtn = document.querySelector("#taskBtn");
taskbtn.addEventListener("click", () => {
    console.log("task works");
})
const articleBtn = document.querySelector("#articleBtn");
<<<<<<< HEAD
articleBtn.addEventListener("click", () => {
    console.log("article works")
})
const friendBtn = document.querySelector("#friendBtn");
friendBtn.addEventListener("click", () => {
    console.log("friend works")
})
=======
articleBtn.addEventListener("click", displayArticleModal)

const friendBtn = document.querySelector("#friendBtn");
friendBtn.addEventListener("click", () => {
    console.log("friend works")
})
>>>>>>> master

const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", () => {
    console.log("login works");
})
