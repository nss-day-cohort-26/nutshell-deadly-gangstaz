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
      let taskDueDate = document.querySelector("#taskDueDate").value
      saveNLoad.postTask(taskName, taskDueDate)
        .then(response => {
          console.log(response)
        })
    }
  },
  friendValue: {
    value: () => {
      let searchResult = document.querySelector("#friendDropDown").value
    }
  },
  registerValue: {
    value: () => {
      let registerName = document.querySelector("#registerName").value
      let registerEmail = document.querySelector("#registerEmail").value
      let registerPassword = document.querySelector("#registerPassword").value
      saveNLoad.postUser(registerName, registerEmail, registerPassword)
        .then(response => {
          console.log(registerName, registerEmail, registerPassword)
        })
    }
  },
})

module.exports = inputValues;