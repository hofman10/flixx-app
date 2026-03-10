// TODO: Move to environment variables in production
// For now, the API key is here for development purposes
export const API_CONFIG = {
  apiKey: "f1dc3deee62bb7bf44211b2c5742952a",
  apiUrl: "https://api.themoviedb.org/3/",
  language: "en-US",
};

export const createAppState = () => ({
  currentPage: window.location.pathname,
  search: {
    term: "",
    type: "",
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
  api: {
    apiKey: API_CONFIG.apiKey,
    apiUrl: API_CONFIG.apiUrl,
  },
});
