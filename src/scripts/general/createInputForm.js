// import { url } from "inspector";

// article and event to include: ->>>>>>>
// 3 inputs fields and 1 button

// event name field
// date of event
// location of even
// when edit btn clicked field pops up (pre-filled to edit)
// news article title
// synopsis of news
// url

// event name field
// date of event
// location of even
// when edit btn clicked field pops up (pre-filled to edit)

// task to include: ->>>>>>
// 1 input field and button

// login to include: ->>>>
// 2 input fields and a button
const articleContainter = document.querySelector("#articleContainer")
const friendContainter = document.querySelector("#friendContainer")
const taskContainter = document.querySelector("#taskContainer")
const eventContainter = document.querySelector("#eventContainer")

const createInputForms = Object.create({}, {
  articleForm: {
    value: () => {
      const formElement = document.createElement("form")
      formElement.id = "articleForm"
      //creates input field for title
      const titleInput = document.createElement("input")
      titleInput.id = "articleTitle"
      titleInput.value = "title"
      titleInput.type = "text"
      titleInput.name = "title"
      //creates input field for summary
      const summaryInput = document.createElement("input")
      summaryInput.id = "articleSummary"
      summaryInput.value = "summary"
      summaryInput.type = "text"
      summaryInput.name = "summary"
      //creates input field for URL
      const urlInput = document.createElement("input")
      urlInput.id = "articleUrl"
      urlInput.value = "url"
      urlInput.type = "url"
      urlInput.name = "url"

      // const submitButton = document.createElement("button")
      formElement.appendChild(titleInput)
      formElement.appendChild(summaryInput)
      formElement.appendChild(urlInput)
      articleContainter.appendChild(formElement)
    }
  },
  eventForm: {
    value: () => {
      const eventElement = document.createElement("form")
      eventElement.id = "eventForm"
      //creates input field for name
      const nameInput = document.createElement("input")
      nameInput.id = "nameTitle"
      nameInput.value = "name"
      nameInput.type = "text"
      nameInput.name = "name"
      //creates input field for date
      const dateInput = document.createElement("input")
      dateInput.id = "eventDate"
      dateInput.value = "date"
      dateInput.type = "text"
      dateInput.name = "date"
      //creates input field for location
      const locationInput = document.createElement("input")
      locationInput.id = "articleUrl"
      locationInput.value = "url"
      locationInput.type = "url"
      locationInput.name = "url"

      // const submitButton = document.createElement("button")
      eventElement.appendChild(nameInput)
      eventElement.appendChild(dateInput)
      eventElement.appendChild(locationInput)
      eventContainer.appendChild(eventElement)
    }
  },
  loginLogout: {
    value: () => {
      const loginLogoutElement = document.createElement("form")
      loginLogoutElement.id = "loginLogoutForm"
      //creates input field for userName
      const usernameInput = document.createElement("input")
      usernameInput.id = "usernameInput"
      usernameInput.value = "username"
      usernameInput.type = "text"
      usernameInput.name = "username"
      // creates input field for password
      const passwordInput = document.createElement("input")
      passwordInput.id = "passwordInput"
      passwordInput.value = "password"
      passwordInput.type = "text"
      passwordInput.name = "password"
      loginLogoutElement.appendChild(usernameInput)
      loginLogoutElement.appendChild(passwordInput)
      return loginLogoutElement
    }

  },
  taskForm: {
    value: () => {
      const taskForm = document.createElement("form")
      taskForm.id = "taskForm"
      //creates input field for task
      const taskInput = document.createElement("input")
      taskInput.id = "taskName"
      taskInput.value = "task"
      taskInput.type = "text"
      taskInput.name = "task"
      taskForm.appendChild(taskInput)
      taskContainter.appendChild(taskForm)

    }
  },
  friendForm: {
    value: () => {
      // creates form element
      let formElement = document.createElement("form");
      formElement.id = "friendForm";
      let friendInput = document.createElement("input");
      friendInput.list = "names";
      friendInput.name = "names";
      friendInput.id = "friendName";
      // creates datalist element
      let dataListElement = document.createElement("datalist");
      dataListElement.id = "friendSearch";
      // creates input element
      friendInput.appendChild(dataListElement);
      formElement.appendChild(friendInput);
      friendContainter.appendChild(formElement)
      // **need to add <option> element
    }
  }
})

createInputForms.articleForm()
createInputForms.friendForm()
createInputForms.taskForm()
createInputForms.loginLogout()
createInputForms.eventForm()