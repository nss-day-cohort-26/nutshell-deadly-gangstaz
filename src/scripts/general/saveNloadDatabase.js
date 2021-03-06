// object that makes calls to json
const $ = require("jquery");

const Database = Object.create({}, {
  // USER data ---------->
  getUser: {
    value: () => {
      return $.ajax("http://localhost:3000/users");
    }
  },
  postUser: {
    value: (name, email, password) => {
      return $.ajax({
        url: "http://localhost:3000/users",
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
        url: "http://localhost:3000/users",
        method: "PUT",
        data: {
          name: name,
          date: date,
          location: location
        }
      })
    }
  },
  deleteUser: {
    value: id => {
      // console.log(id)
      return $.ajax({
        url: `http://localhost:3000/users/${id}`,
        method: "DELETE"
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
    value: id => {
      // console.log(id)
      return $.ajax({
        url: `http://localhost:3000/article/${id}`,
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
        url: `http://localhost:3000/task/${id}`,
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
  getFriends: {
    value: id => {
      return $.ajax(`http://localhost:3000/friend?currentUserId=${id}&_expand=user`)
    }
  },
  postFriends: {
    value: (userId, palId) => {
      return $.ajax({
        url: "http://localhost:3000/friend",
        method: "POST",
        data: {
          currentUserId: userId,
          userId: palId
        }
      })
    }
  },
  deleteFriends: {
    value: id => {
      return $.ajax({
        url: `http://localhost:3000/friend/${id}`,
        method: "DELETE"
      })
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
      console.log("things", eventName)
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