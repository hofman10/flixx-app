import { MESSAGES } from "../config/constants.js";

export const getQueryParam = (paramName) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
};

export const getIdFromUrl = () => {
  return getQueryParam("id");
};

export const addCommasToNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const isValidValue = (value) => {
  return value !== null && value !== undefined && value !== "";
};

export const getValueOrFallback = (value, fallback = MESSAGES.notAvailable) => {
  return isValidValue(value) ? value : fallback;
};
