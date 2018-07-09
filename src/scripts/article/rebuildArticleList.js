// function that pops up form fields on navbar
// //event modal

const CardList = require("../general/cardList");
const saveNLoad = require("../general/saveNloadDatabase")

const articleContainer = document.querySelector("#articleContainer");
articleContainer.addEventListener("click", () => {
  if (event.target.className === "articleRemove") {

    let articleId = event.target.parentNode.id;
    // console.log(articleId);
    saveNLoad.deleteArticle(articleId)
      .then(() => {
        CardList.articleList()
      })
  }
})
const eventContainer = document.querySelector("#eventContainer");
eventContainer.addEventListener("click", () => {
  if (event.target.className === "eventRemove") {

    let eventId = event.target.parentNode.id;
    saveNLoad.deleteEvent(eventId)
      .then(() => {
        CardList.eventList()
      })
    }
    })
const friendContainer = document.querySelector("#friendContainer");
// console.log(friendContainer)
friendContainer.addEventListener("click", () => {
  // console.log(event.target)
  if (event.target.className === "friendRemove") {

    let friendId = event.target.parentNode.id;
    // console.log(friendId, "Friend ID");
    // console.log(friendId)
    saveNLoad.deleteFriends(friendId)
      .then(() => {
        CardList.friendList()
      })
  }
})