import { fetchAPIData } from "../services/tmdb.service.js";
import { DOM_SELECTORS } from "../config/constants.js";
import { createCard } from "../utils/dom.utils.js";
import { createBackdropOverlay } from "../utils/ui.utils.js";
import { getIdFromUrl } from "../utils/helpers.utils.js";
import {
  createPosterImage,
  renderGenresList,
  renderCommaSeparatedList,
} from "../utils/dom.utils.js";

export const displayPopularShows = async () => {
  try {
    const { results } = await fetchAPIData("tv/popular");

    const container = document.querySelector(DOM_SELECTORS.popularShows);
    if (!container) return;

    results.forEach((show) => {
      const card = createCard(show, "tv");
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error displaying popular shows:", error);
  }
};

export const displayShowDetails = async () => {
  try {
    const showId = getIdFromUrl();
    if (!showId) return;

    const show = await fetchAPIData(`tv/${showId}`);

    // Create backdrop overlay if available
    createBackdropOverlay(show.backdrop_path, DOM_SELECTORS.showDetails);

    const div = document.createElement("div");
    div.innerHTML = `
      <div class="details-top">
        <div>
          ${createPosterImage(show.poster_path, show.name)}
        </div>
        <div>
          <h2>${show.name}</h2>
          <p>
            <i class="fas fa-star text-primary"></i>
            ${show.vote_average.toFixed(1)} / 10
          </p>
          <p class="text-muted">Last Air Date: ${
            show.last_air_date || "N/A"
          }</p>
          <p>${show.overview || "No overview available."}</p>
          <h5>Genres</h5>
          <ul class="list-group">
            ${renderGenresList(show.genres)}
          </ul>
          ${
            show.homepage
              ? `<a href="${show.homepage}" target="_blank" rel="noopener noreferrer" class="btn">Visit Show Homepage</a>`
              : ""
          }
        </div>
      </div>
      <div class="details-bottom">
        <h2>Show Info</h2>
        <ul>
          <li><span class="text-secondary">Number of Episodes:</span> ${
            show.number_of_episodes || "Not Available"
          }</li>
          <li><span class="text-secondary">Last Episode To Air:</span> ${
            show.last_episode_to_air?.name || "Not Available"
          }</li>
          <li><span class="text-secondary">Status:</span> ${
            show.status || "Not Available"
          }</li>
        </ul>
        <h4>Production Companies</h4>
        <div class="list-group">${renderCommaSeparatedList(
          show.production_companies,
        )}</div>
      </div>
    `;

    const container = document.querySelector(DOM_SELECTORS.showDetails);
    if (container) {
      container.appendChild(div);
    }
  } catch (error) {
    console.error("Error displaying show details:", error);
  }
};
