// TMDB Image Configuration
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const IMAGE_BASE_URL_ORIGINAL = "https://image.tmdb.org/t/p/original";
export const NO_IMAGE_PLACEHOLDER = "images/no-image.jpg";

// DOM Selectors
export const DOM_SELECTORS = {
  popularMovies: "#popular-movies",
  popularShows: "#popular-shows",
  movieDetails: "#movie-details",
  showDetails: "#show-details",
  searchResults: "#search-results",
  searchResultsHeading: "#search-results-heading",
  searchTerm: "#search-term",
  pagination: "#pagination",
  alert: "#alert",
  spinner: ".spinner",
  swiperWrapper: ".swiper-wrapper",
  navLink: ".nav-link",
};

// Alert Configuration
export const ALERT_DURATION = 4000; // milliseconds
export const ALERT_TYPES = {
  error: "error",
  success: "success",
  info: "info",
};

// Messages
export const MESSAGES = {
  noResults: "No results found",
  enterSearchTerm: "Please enter a search term",
  networkError: "Network error. Please check your connection and try again.",
  notAvailable: "Not Available",
};

// Swiper Configuration
export const SWIPER_CONFIG = {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    500: { slidesPerView: 2 },
    700: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
};
