// clears the dom

const clear = ()  => {
  const container = document.querySelector("#articleContainer");
  while (container.firstElementChild) {
    container.removeChild(container.firstElementChild)
  };
};

module.exports = clear;