// searchbox for user to search for friend

const saveNLoad = require("../general/saveNloadDatabase");

const dropDown = Object.create({}, {
    addFriendDropDown: {
        value: () => {
            saveNLoad.getUser()
                .then(friends => {
                    console.log(friends);
                    for (let i in friends) {
                        let optionEl = document.createElement("option");
                        let friendName = `${friends[i].name}`;
                        optionEl.textContent = friendName;
                        optionEl.value = friendName;
                    }
                })
        }
    }
})


module.exports = dropDown.addFriendDropDown();