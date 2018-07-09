let inputValues = require("./getFormVals");
let clear = require("./clearDOM")
let CardList = require("./cardList");

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
            console.log("something different")
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
            inputValues.registerValue();
        }
    },
    friendValueAndList: {
        value: () => {
            inputValues.friendValue();
            clear("#friendContainer");
            CardList.friendList();
        }
    }
})

module.exports = ValueAndList;
