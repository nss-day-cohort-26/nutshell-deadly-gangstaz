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
    friendValueAndList: {
        value: () => {
            inputValues.friendValue();
            CardList.friendList();
        }
    }
})

module.exports = ValueAndList;
