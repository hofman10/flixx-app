import { searchAPIData } from "../services/tmdb.service.js";
import { DOM_SELECTORS, MESSAGES } from "../config/constants.js";
import { showAlert } from "../utils/ui.utils.js";
import { getQueryParam } from "../utils/helpers.utils.js";
import { createCard } from "../utils/dom.utils.js";

// Search state
const searchState = {
  term: "",
  type: "",
  page: 1,
  totalPages: 1,
  totalResults: 0,
};

export const performSearch = async () => {
  searchState.type = getQueryParam("type");
  searchState.term = getQueryParam("search-term");

  if (!searchState.term || searchState.term.trim() === "") {
    showAlert(MESSAGES.enterSearchTerm);
    return;
  }

  try {
    const { results, total_pages, page, total_results } = await searchAPIData(
      searchState.term,
      searchState.type,
      searchState.page,
    );

    searchState.page = page;
    searchState.totalPages = total_pages;
    searchState.totalResults = total_results;

    if (results.length === 0) {
      showAlert(MESSAGES.noResults);
      return;
    }

    displaySearchResults(results);

    // Clear search input after successful search
    const searchInput = document.querySelector(DOM_SELECTORS.searchTerm);
    if (searchInput) {
      searchInput.value = "";
    }
  } catch (error) {
    console.error("Search error:", error);
  }
};

const displaySearchResults = (results) => {
  const resultsContainer = document.querySelector(DOM_SELECTORS.searchResults);
  const headingContainer = document.querySelector(
    DOM_SELECTORS.searchResultsHeading,
  );
  const paginationContainer = document.querySelector(DOM_SELECTORS.pagination);

  // Clear previous search results and pagination
  if (resultsContainer) resultsContainer.innerHTML = "";
  if (headingContainer) headingContainer.innerHTML = "";
  if (paginationContainer) paginationContainer.innerHTML = "";

  // Display results heading
  if (headingContainer) {
    headingContainer.innerHTML = `
      <h2>${results.length} of ${searchState.totalResults} Results for "${searchState.term}"</h2>
    `;
  }

  // Display result cards
  results.forEach((result) => {
    const card = createCard(result, searchState.type);
    if (resultsContainer) {
      resultsContainer.appendChild(card);
    }
  });

  displayPagination();
};

const displayPagination = () => {
  const paginationContainer = document.querySelector(DOM_SELECTORS.pagination);
  if (!paginationContainer) return;

  const div = document.createElement("div");
  div.classList.add("pagination");
  div.innerHTML = `
    <button class="btn btn-primary" id="prev">Prev</button>
    <button class="btn btn-primary" id="next">Next</button>
    <div class="page-counter">Page ${searchState.page} of ${searchState.totalPages}</div>
  `;

  paginationContainer.appendChild(div);

  // Disable prev button if on first page
  const prevBtn = document.querySelector("#prev");
  if (prevBtn && searchState.page === 1) {
    prevBtn.disabled = true;
  }

  // Disable next button if on last page
  const nextBtn = document.querySelector("#next");
  if (nextBtn && searchState.page === searchState.totalPages) {
    nextBtn.disabled = true;
  }

  // Handle next page navigation
  if (nextBtn) {
    nextBtn.addEventListener("click", async () => {
      searchState.page++;
      try {
        const { results } = await searchAPIData(
          searchState.term,
          searchState.type,
          searchState.page,
        );
        displaySearchResults(results);
      } catch (error) {
        console.error("Pagination error:", error);
      }
    });
  }

  // Handle previous page navigation
  if (prevBtn) {
    prevBtn.addEventListener("click", async () => {
      searchState.page--;
      try {
        const { results } = await searchAPIData(
          searchState.term,
          searchState.type,
          searchState.page,
        );
        displaySearchResults(results);
      } catch (error) {
        console.error("Pagination error:", error);
      }
    });
  }
};
