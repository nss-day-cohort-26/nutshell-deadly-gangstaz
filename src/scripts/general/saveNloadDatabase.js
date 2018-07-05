// object that makes calls to json
const $ = require("jquery");

const Database = Object.create({}, {
  // USER data ---------->
  getUser: {
    value: () => {
      return $.ajax("http://localhost:3000/user");
    }
  },
  postUser: {
    value: (name, email, password) => {
      return $.ajax({
        url: "http://localhost:3000/user",
        method: "POST",
        data: {
          name: name,
          email: email,
          password: password
        }
      })
    }
  },
  editUser: {
    value: (name, date, location) => {
      return $.ajax({
        url: "http://localhost:3000/user",
        method: "PUT",
        data: {
          name: name,
          date: date,
          location: location
        }
      })
    }
  },
  // ARTICLE data ---------->
  getArticle: {
    value: () => {
      return $.ajax("http://localhost:3000/article");
    },
  },
  postArticle: {
    value: (articleTitle, articleSummary, articleUrl) => {
      return $.ajax({
        url: "http://localhost:3000/article",
        method: "POST",
        data: {
          title: articleTitle,
          summary: articleSummary,
          url: articleUrl,
        }
      })
    }
  },
  deleteArticle: {
    value: () => {
      return $.ajax({
        url: "",
        method: "DELETE"
      })
    }
  },
  // TASK data ---------->
  getTask: {
    value: () => {
      return $.ajax("http://localhost:3000/task");
    }
  },
  postTask: {
    value: (taskName, taskDueDate) => {
      return $.ajax({
        url: "http://localhost:3000/task",
        method: "POST",
        data: {
          name: taskName,
          dueDate: taskDueDate,
        }
      })
    }
  },
  editTask: {
    value: (id, name, dueDate, dateCompleted, userId) => {
      return $.ajax({
        url: "http://localhost:3000/task",
        method: "PUT",
        data: {
          id: id,
          name: name,
          dueDate: dueDate,
          dateCompleted: dateCompleted,
          userId: userId
        }
      })
    }
  },
  // FRIEND data ---------->
  getFriend: {
    value: () => {
      return $.ajax("http://localhost:3000/friend")
    },
    postFriend: {
      value: () => {
        return $.ajax({
          url: "http://localhost:3000/friend",
          method: "POST"
        })
      }
    }
  },
  // EVENT data ---------->
  getEvent: {
    value: () => {
      return $.ajax("http://localhost:3000/event");
    },
  },
  postEvent: {
    value: (eventName, eventDate, eventLocation) => {
      return $.ajax({
        url: "http://localhost:3000/event",
        method: "POST",
        data: {
          name: eventName,
          date: eventDate,
          location: eventLocation
        }
      })
    },
  },
  editEvent: {
    value: (name, date, location, dateCreated) => {
      return $.ajax({
        url: "http://localhost:3000/event",
        method: "PUT",
        data: {
          name: name,
          date: date,
          location: location,
        }
      })
    }
  }
})

module.exports = Database;