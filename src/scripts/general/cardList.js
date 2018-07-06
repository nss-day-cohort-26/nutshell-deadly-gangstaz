const saveNload = require("../general/saveNloadDatabase");
const CreateCard = require("../general/createCard");
const clear = require("./clearDOM")

const CardList = Object.create({}, {
    articleList: {
        value: () => {
            saveNload.getArticle()
                .then(articleData => {
                    clear("#articleContainer")
                    for (let i in articleData) {
                        CreateCard.articleCard("Natasha Cox", articleData[i].id, articleData[i].title, articleData[i].summary, articleData[i].url);
                    }
                })
        }
    },
    eventList: {
        value: () => {
            saveNload.getEvent()
                .then(eventData => {
                    console.log("stff", eventData)
                    clear("#eventContainer")
                    for (let i in eventData) {
                        CreateCard.eventCard("Austin Gorman",eventData[i].name, eventData[i].date, eventData[i].location);
                    }
                })
        }
    },
    taskList: {
        value: () => {
            saveNload.getTask()
                .then(taskData => {
                    clear("#taskContainer")
                    for (let i in taskData) {
                        CreateCard.taskCard("Jewel Ramirez",taskData[i].name, taskData[i].dueDate);
                    }
                })
        }
    },
    friendList: {
        value: () => {
            saveNload.getUser()
                .then(friendData => {
                    clear("#friendContainer")
                    for (let i in friendData) {
                        // console.log(friendData);
                        CreateCard.friendCard(friendData[i].name);
                    }
                })
        }
    }
})

module.exports = CardList;
