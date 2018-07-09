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
                        CreateCard.articleCard(" ", articleData[i].title, articleData[i].summary, articleData[i].url);
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
                        CreateCard.eventCard("", eventData[i].name, eventData[i].date, eventData[i].location);
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
                        CreateCard.taskCard("", taskData[i].name, taskData[i].dueDate);
                    }
                })
        }
    },
    friendList: {
        value: () => {
            saveNload.getFriends()
                .then(friendData => {
                    console.log(friendData);
                    clear("#friendContainer")
                    friendData.forEach((i) => {
                        console.log(i.user)
                        // console.log(friendData);
                        CreateCard.friendCard(i.user.name, i.id);
                    })
                })
        }
    }
})

module.exports = CardList;
