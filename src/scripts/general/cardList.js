const saveNload = require("../general/saveNloadDatabase");
const CreateCard = require("../general/createCard");

const CardList = Object.create({}, {
    articleList: {
        value: () => {
            saveNload.getArticle()
                .then(articleData => {
                    for (let i in articleData) {
                        CreateCard.articleCard("Natasha Cox", articleData[i].title, articleData[i].summary, articleData[i].url);
                    }
                })
        }
    },
    eventList: {
        value: () => {
            saveNload.getEvent()
                .then(eventData => {
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
                    for (let i in friendData) {
                        CreateCard.friendCard(friendData[i].name);
                    }
                })
        }
    }
})

module.exports = CardList;
