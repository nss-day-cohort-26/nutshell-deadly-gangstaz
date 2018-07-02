// new task btn exported to tasks (function)
// checkbox btn for completed tasks
// save task btn
// remove task btn that removes from saved database
// edit task btn that upon click a form pops up

// add event btn
// save event btn
// edit event btn


// new article btn
// save article btn
// delete article btn
// remove article btn removes from saved database


const createButton = Object.create({}, {
  newButton: {
    value: (id, text) => {
      let buttonElement = document.createElement("button");
      buttonElement.id = id;
      buttonElement.textContent = text;

      return buttonElement;
    }
  }
})

<<<<<<< HEAD
module.exports = createButton;
=======
module.exports = createButton;
>>>>>>> master
