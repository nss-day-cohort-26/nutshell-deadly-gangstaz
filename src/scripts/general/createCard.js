// // include checkbox for task card creator
// let saveNloadDatabase = require("./saveNloadDatabase")
// let createInputForm = require("./createInputForm")
// const saveNLoad = require("./saveNloadDatabase");

const $ = require("jquery");

const CreateCard = Object.create({}, {
    articleCard: {
        value: (username, id, title, summary, url) => {
            const articleContainer = document.querySelector("#articleContainer");

            let card = document.createElement("div");
            card.setAttribute("class", "articleCard");
            card.id = id;

            let userEl = document.createElement("h3");
            userEl.textContent = username;

            let titleEl = document.createElement("a");
            titleEl.id = title;
            titleEl.textContent = title;
            titleEl.setAttribute("href", url);

            let summaryEl = document.createElement("p");
            summaryEl.textContent = summary;

            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.className =  "articleRemove";

            card.appendChild(userEl);
            card.appendChild(titleEl);
            card.appendChild(summaryEl);
            card.appendChild(removeBtn);

            articleContainer.appendChild(card);

            return articleContainer;
        }
    },
    eventCard: {
        value: (username, name, date, location) => {
            const eventContainer = document.querySelector("#eventContainer");

            let card = document.createElement("div");
            card.setAttribute("class", "eventCard");

            let userEl = document.createElement("h3");
            userEl.textContent = username;

            let nameEl = document.createElement("h2");
            nameEl.id = name;
            nameEl.textContent = name;

            let dateEl = document.createElement("h2");
            dateEl.textContent = date;

            let locationEl = document.createElement("h2");
            locationEl.textContent = location;

            let editBtn = document.createElement("button");
            editBtn.textContent = "Edit";

            card.appendChild(userEl);
            card.appendChild(nameEl);
            card.appendChild(dateEl);
            card.appendChild(locationEl);
            card.appendChild(editBtn);

            eventContainer.appendChild(card);

            return eventContainer;
        }
    },
    taskCard: {
        value: (id, username, name, dueDate) => {
            let taskContainer = document.getElementById("taskContainer");

            let card = document.createElement("div")
            card.id = id;
            card.setAttribute("class", "taskCard")

            let userEl = document.createElement("h3");
            userEl.textContent = username;

            card.appendChild(userEl)

            let taskPara = document.createElement("h2");
            taskPara.textContent = name;
            card.appendChild(taskPara)

            let taskDate = document.createElement("h3");
            taskDate.textContent = dueDate;

            let checkDiv = document.createElement("div");
            checkDiv.setAttribute("class", "checkBox")

            let checkBox = document.createElement("INPUT")
            checkBox.setAttribute("type", "checkbox")
            checkBox.setAttribute("id", "checkbox")
            let doneTag = document.createElement("label");
            doneTag.textContent = "Done:"

            checkDiv.appendChild(doneTag)
            checkDiv.appendChild(checkBox)

            card.appendChild(checkDiv)

            let editBtn = document.createElement("button");
            editBtn.textContent = "Edit"
            editBtn.className =  "editTask"

            card.appendChild(editBtn)

            taskContainer.appendChild(card);

            return taskContainer
        }
    },
    friendCard: {
        value: (name, id) => {
            let friendContainer = document.getElementById("friendContainer")
            let card = document.createElement("div");
            card.setAttribute("class", "friendCard");
            card.id = id;
            let nameEl = document.createElement("h3");
            nameEl.textContent = name;

            card.appendChild(nameEl);

            let friendRemoveBtn = document.createElement("button");
            friendRemoveBtn.textContent = "Remove";
            friendRemoveBtn.className = "friendRemove";

            card.appendChild(friendRemoveBtn);
            friendContainer.appendChild(card)

            return friendContainer;
        }
    }
})

module.exports = CreateCard;
