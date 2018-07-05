// clears the dom
const clear = (containerId) => {
  let container = document.querySelector(containerId)
  while (container.firstElementChild) {
    container.removeChild(container.firstElementChild)
  }
}

module.exports = clear;