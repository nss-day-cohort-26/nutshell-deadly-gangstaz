// // include checkbox for task card creator
// let saveNloadDatabase = require("./saveNloadDatabase")
// let createInputForm = require("./createInputForm")
// const Database = require("../../")

const CreateCard = Object.create({}, {
    articleCard: {
        value: (username, title, summary, url) => {
            const articleContainer = document.querySelector("#articleContainer");

            let card = document.createElement("div");
            card.setAttribute("class", "articleCard");

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
            card.appendChild(removeBtn);
            card.appendChild(editBtn);

            eventContainer.appendChild(card);

            return eventContainer;
        }
    },
    taskCard: {
        value: (username, name, dueDate) => {
            let taskContainer = document.getElementById("taskContainer");

            let card = document.createElement("div")
            card.setAttribute("class", "taskCard")

            let userEl = document.createElement("h3");
            userEl.textContent = username;

            card.appendChild(userEl)

            let taskPara = document.createElement("h2");
            taskPara.id = name;
            taskPara.textContent = name;
            card.appendChild(taskPara)

            let taskDate = document.createElement("h3");
            taskDate.textContent = dueDate;

            let checkDiv = document.createElement("div");
            checkDiv.setAttribute("class", "checkBox")

            let checkBox = document.createElement("INPUT")
            checkBox.setAttribute("type", "checkbox")
            let doneTag = document.createElement("p");
            doneTag.textContent = "Done:"

            checkDiv.appendChild(doneTag)
            checkDiv.appendChild(checkBox)

            card.appendChild(checkDiv)

            let editBtn = document.createElement("button");
            editBtn.textContent = "Edit"

            card.appendChild(editBtn)

            taskContainer.appendChild(card);

            return taskContainer
        }
    },
    friendCard: {
        value: name => {
            let card = document.createElement("div");
            card.setAttribute("class", "friendCard");

            let nameEl = document.createElement("h3");
            nameEl.textContent = name;

            card.appendChild(nameEl)

            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";

            card.appendChild(removeBtn);
            friendContainer.appendChild(card)

            return friendContainer;
        }
    }

})

module.exports = CreateCard;
