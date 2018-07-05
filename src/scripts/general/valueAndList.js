let inputValues = require("./getFormVals");
let CardList = require("./cardList");
let clear = require("./clearDOM")
const ValueAndList = Object.create({}, {
    articleValueAndList: {
        value: () => {
            inputValues.articleValue();
            clear("#articleContainer");
            CardList.articleList();
        }
    },
    eventValueAndList: {
        value: () => {
            inputValues.eventValue();
            clear("#eventContainer");
            CardList.eventList();
        }
    },
    taskValueAndList: {
        value: () => {
            inputValues.taskValue();
            clear("#taskContainer");
            CardList.taskList();
        }
    },
    registerValueAndList: {
        value: () => {
            inputValues.friendValue();
            clear("#friendContainer");
            CardList.friendList();
        }
    }
})

module.exports = ValueAndList;
