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
    value: () => {
      return $.ajax({
        url: "http://localhost:3000/user",
        method: "POST"
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
    value: () => {
      return $.ajax({
        url: "http://localhost:3000/article",
        method: "POST"
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
      return $.ajax("http://localhost:3000/article");
    }
  },
  postTask: {
    value: () => {
      return $.ajax({
        url: "http://localhost:3000/task",
        method: "POST"
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
    value: () => {
      return $.ajax({
        url: "http://localhost:3000/event",
        method: "POST"
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