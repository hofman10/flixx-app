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

    case "/shows.html":
      displayPopularShows();
      break;

    case "/movie-details.html":
      displayMovieDetails();
      break;

    case "/tv-details.html":
      displayShowDetails();
      break;

    case "/search.html":
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
