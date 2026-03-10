import { API_CONFIG } from "../config/api.config.js";
import { showSpinner, hideSpinner, showAlert } from "../utils/ui.utils.js";
import { MESSAGES } from "../config/constants.js";

export const fetchAPIData = async (endpoint) => {
  const { apiKey, apiUrl, language } = API_CONFIG;

  showSpinner();

  try {
    const response = await fetch(
      `${apiUrl}${endpoint}?api_key=${apiKey}&language=${language}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    hideSpinner();
    return data;
  } catch (error) {
    hideSpinner();
    console.error("API Fetch Error:", error);
    showAlert(MESSAGES.networkError);
    throw error;
  }
};

export const searchAPIData = async (query, type, page = 1) => {
  const { apiKey, apiUrl, language } = API_CONFIG;

  showSpinner();

  try {
    const response = await fetch(
      `${apiUrl}search/${type}?api_key=${apiKey}&language=${language}&query=${query}&page=${page}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    hideSpinner();
    return data;
  } catch (error) {
    hideSpinner();
    console.error("API Search Error:", error);
    showAlert(MESSAGES.networkError);
    throw error;
  }
};
