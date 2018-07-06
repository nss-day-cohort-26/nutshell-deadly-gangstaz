// function that pops up form fields on navbar
// //event modal

const CardList = require("../general/cardList");
const saveNLoad = require("../general/saveNloadDatabase")

const articleContainer = document.querySelector("#articleContainer");
articleContainer.addEventListener("click", () => {
  if (event.target.className === "articleRemove") {

    let articleId = event.target.parentNode.id;
    console.log(articleId);
    saveNLoad.deleteArticle(articleId)
      .then(() => {
        CardList.articleList()
      })
  }
})