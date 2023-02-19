const toggle = document.querySelectorAll("input");

toggle.forEach((inputs) => {
  inputs.addEventListener("click", (e) => {
    const inputCurrent = e.currentTarget;
    // check attribute in input radio
    toggle.forEach((input) => {
      if (input.hasAttribute("checked")) {
        input.removeAttribute("checked");
        inputCurrent.setAttribute("checked", "");
      }
    });

    // changeTheme(inputCurrent);
    toggleTheme(inputCurrent);
  });
});

// change theme color when user click
const toggleTheme = (container) => {
  const mainContainer = document.querySelector(".main-container");

  if (container.getAttribute("id") === "toggle-theme-1") {
    mainContainer.setAttribute("data-theme", "theme-1");
  } else if (container.getAttribute("id") === "toggle-theme-2") {
    mainContainer.setAttribute("data-theme", "theme-2");
  } else if (container.getAttribute("id") === "toggle-theme-3") {
    mainContainer.setAttribute("data-theme", "theme-3");
  }
};
