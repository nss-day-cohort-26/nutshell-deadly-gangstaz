let inputValues = require("./getFormVals");
let CardList = require("./cardList");

const ValueAndList = Object.create({}, {
    articleValueAndList: {
        value: () => {
            inputValues.articleValue();
            CardList.articleList();
        }
    },
    eventValueAndList: {
        value: () => {
            inputValues.eventValue();
            CardList.eventList();
        }
    },
    taskValueAndList: {
        value: () => {
            inputValues.taskValue();
            CardList.taskList();
        }
    },
    registerValueAndList: {
        value: () => {
            inputValues.registerValue();
            CardList.friendList();
        }
    }
})

module.exports = ValueAndList;
