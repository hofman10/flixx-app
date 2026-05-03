import { createAppState } from "./config/api.config.js";
import {
  displayPopularMovies,
  displayMovieDetails,
  displaySlider,
} from "./components/movie.component.js";
import {
  displayPopularShows,
  displayShowDetails,
} from "./components/tvShow.component.js";
import { performSearch } from "./components/search.component.js";
import { highlightActiveLink } from "./utils/ui.utils.js";

// Create global application state
const appState = createAppState();

const initApp = () => {
  const currentPage = appState.currentPage;

  // Route to appropriate page handler
  switch (currentPage) {
    case "/":
    case "/index.html":
      displaySlider();
      displayPopularMovies();
      break;

    case "/shows":
    case "/shows.html":
    case "/shows/":
      displayPopularShows();
      break;

    case "/movie-details":
    case "/movie-details.html":
    case "/movie-details/":
      displayMovieDetails();
      break;

    case "/tv-details":
    case "/tv-details.html":
    case "/tv-details/":
      displayShowDetails();
      break;

    case "/search":
    case "/search.html":
    case "/search/":
      performSearch();
      break;

    default:
      // Handle unknown routes
      console.warn("Unknown page:", currentPage);
  }

  // Highlight active navigation link
  highlightActiveLink(currentPage);
};

// Initialize app when DOM is fully loaded
window.addEventListener("DOMContentLoaded", initApp);
