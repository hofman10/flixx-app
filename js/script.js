// apiKljuc = "f1dc3deee62bb7bf44211b2c5742952a";

const global = {
  currentPage: window.location.pathname,
};

//Highlight active link
const highlightActiveLink = function () {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
};

//Init App
const init = function () {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("Home");
      break;

    case "/shows.html":
      console.log("Shows");
      break;

    case "/movie-details.html":
      console.log("Movie Details");
      break;

    case "/tv-details.html":
      console.log("TV Details");
      break;

    case "/search.html":
      console.log("Search");
      break;
  }

  highlightActiveLink();
};

window.addEventListener("DOMContentLoaded", init);
