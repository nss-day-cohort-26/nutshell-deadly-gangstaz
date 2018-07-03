const saveNLoad = require("./saveNloadDatabase")


const inputValues = Object.create({}, {
  articleValue: {
    value: () => {
      const articleTitle = document.querySelector("#articleTitle").value
      const articleSummary = document.querySelector("#articleSummary").value
      const articleUrl = document.querySelector("#articleUrl").value
      saveNLoad.postArticle(articleTitle, articleSummary, articleUrl)
      .then(response => {
        console.log(response)
      })
  }
  },
  eventValue: {
    value: () => {
      let eventName = document.querySelector("#eventTitle").value
      let eventDate = document.querySelector("#eventDate").value
      let eventLocation = document.querySelector("#eventLocation").value
      saveNLoad.postEvent(eventName, eventDate, eventLocation)
        .then(response => {
          console.log(response)
        })
    }
  },
  taskValue: {
    value: () => {
      let taskName = document.querySelector("#taskName").value
      saveNLoad.postTask(taskName, taskDueDate)
        .then(response => {
          console.log(response)
        })
    }
  },
  searchValue: {
    value: () => {
      let searchResult = document.querySelector("#friendDropDown").value
      console.log(searchResult)
    }
  },
  loginValue: {
    value: () => {
      let loginEmail = document.querySelector("#loginEmail").value
      let loginPassword = document.querySelector("#loginPassword").value
      console.log(loginEmail, loginPassword)
    }
  },
})

module.exports = inputValues;