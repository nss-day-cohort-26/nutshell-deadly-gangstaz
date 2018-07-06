// function that pops up form fields on navbar
// //event modal

const CardList = require("../general/cardList");
const saveNLoad = require("../general/saveNloadDatabase")

const articleContainer = document.querySelector("#articleContainer")
console.log(articleContainer)
console.log("string")
articleContainer.addEventListener("click", () => {
  console.log("look at this")
      if (event.target.className === "articleRemove") {

        let articleId = event.target.parentNode.id;
        console.log(articleId);
        saveNLoad.deleteArticle(articleId)
          .then(() => {
              CardList.articleList()
            })
          }
            // valueAndList.articleValueAndList();
          })













      // const clear = require("./clearDOM");
      // const saveNload = require("../general/saveNloadDatabase");

      // const rebuildArticleList = Object.create({}, {
      //     rebuildArticles: {
      //         value: () => {
      //             let articleId = event.currentTarget.parentNode.id;
      //             clear();
      //             saveNload.getArticle()
      //             .then(response => {
      //                 console.log(response)
      //             })
      //         }
      //     }
      // })



      // rebuildArticleList.rebuildArticles();


      // const contactList = Object.create({}, {
      //   "buildContactList": {
      //     value: function(){
      //       contactCollectionModule.getContacts() // calling ajax function that stores or "gets" data
      //       .then((response) => { // handles a successfull call
      //         console.log("all contacts", response)
      //         const currentListRef = document.querySelector(".list-contacts-article") // getting the className of the <article> element being created below
      //         if(currentListRef){
      //           currentListRef.remove()
      //         }
      //         const contactsArticle = document.createElement("article") // creating <article> element
      //         contactsArticle.className = "list-contacts-article" // assigning a class

      //         // can we not import this outside of function? scope?

      //         const contactModule = require("./Contact") // importing contact object with nested function. this function creates elements for the contact data and takes one paramter for the contact object to be passed in as an argument
      //         response.forEach(contact => { // the function parameter for the .then above is "response". This paramater holds the contact data as an array; therefore, we are using a forEach to loop thru the array
      //           contactsArticle.appendChild(contactModule.createContactComponent(contact)) // appending the function inside contactModule to contactsArticle
      //         });
      //         document.querySelector("#display-container").appendChild(contactsArticle) // appending contactsArticle to dispaly-container located in index.HTML.
      //       })
      //     }
      //   }
      // })