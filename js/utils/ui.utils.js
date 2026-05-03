import { DOM_SELECTORS, ALERT_DURATION } from "../config/constants.js";

export const showSpinner = () => {
  const spinner = document.querySelector(DOM_SELECTORS.spinner);
  if (spinner) {
    spinner.classList.add("show");
  }
};

export const hideSpinner = () => {
  const spinner = document.querySelector(DOM_SELECTORS.spinner);
  if (spinner) {
    spinner.classList.remove("show");
  }
};

export const showAlert = (message, className = "error") => {
  const alertContainer = document.querySelector(DOM_SELECTORS.alert);
  if (!alertContainer) return;

  const alertEl = document.createElement("div");
  alertEl.classList.add("alert", className);
  alertEl.appendChild(document.createTextNode(message));
  alertContainer.appendChild(alertEl);

  setTimeout(() => alertEl.remove(), ALERT_DURATION);
};

export const highlightActiveLink = (currentPage) => {
  const links = document.querySelectorAll(DOM_SELECTORS.navLink);
  links.forEach((link) => {
    const href = link.getAttribute("href");
    // Normalize both paths for comparison (remove trailing slash and .html)
    const normalizedHref = href
      .replace(/\/(index\.html)?$/, "/")
      .replace(/\.html$/, "");
    const normalizedPage =
      currentPage
        .replace(/\/(index\.html)?$/, "/")
        .replace(/\.html$/, "")
        .replace(/\/$/, "") || "/";

    if (normalizedHref === normalizedPage || href === currentPage) {
      link.classList.add("active");
    }
  });
};

export const createBackdropOverlay = (backdropPath, containerId) => {
  // Don't create backdrop if path is missing
  if (!backdropPath) return;

  const container = document.querySelector(containerId);
  if (!container) return;

  const overlayDiv = document.createElement("div");
  overlayDiv.classList.add("backdrop-overlay");
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backdropPath})`;

  container.appendChild(overlayDiv);
};
