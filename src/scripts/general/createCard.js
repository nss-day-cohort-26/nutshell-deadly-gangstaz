// // include checkbox for task card creator
// let saveNloadDatabase = require("./saveNloadDatabase")
// let createInputForm = require("./createInputForm")

let taskContainer = document.getElementById("taskContainer");

let taskCard = document.createElement("div")
taskCard.Id = saveNloadDatabase.getTask.id;
let taskPara = document.createElement("p")
let taskCardName = saveNloadDatabase.getTask.taskInput.Name
taskPara.textContent(taskCardName)
taskCard.appendChild(taskPara)
let checkBox = document.createElement("INPUT")
checkBox.setAttribute("type", "checkbox")
taskCard.appendChild(checkBox)