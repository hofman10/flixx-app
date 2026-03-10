import { fetchAPIData } from "../services/tmdb.service.js";
import { DOM_SELECTORS, IMAGE_BASE_URL } from "../config/constants.js";
import { createCard } from "../utils/dom.utils.js";
import { createBackdropOverlay } from "../utils/ui.utils.js";
import { getIdFromUrl } from "../utils/helpers.utils.js";
import {
  createPosterImage,
  renderGenresList,
  renderCommaSeparatedList,
} from "../utils/dom.utils.js";

export const displayPopularMovies = async () => {
  try {
    const { results } = await fetchAPIData("movie/popular");

    const container = document.querySelector(DOM_SELECTORS.popularMovies);
    if (!container) return;

    results.forEach((movie) => {
      const card = createCard(movie, "movie");
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error displaying popular movies:", error);
  }
};

export const displayMovieDetails = async () => {
  try {
    const movieId = getIdFromUrl();
    if (!movieId) return;

    const movie = await fetchAPIData(`movie/${movieId}`);

    // Create backdrop overlay if available
    createBackdropOverlay(movie.backdrop_path, DOM_SELECTORS.movieDetails);

    const div = document.createElement("div");
    div.innerHTML = `
      <div class="details-top">
        <div>
          ${createPosterImage(movie.poster_path, movie.title)}
        </div>
        <div>
          <h2>${movie.title}</h2>
          <p>
            <i class="fas fa-star text-primary"></i>
            ${movie.vote_average.toFixed(1)} / 10
          </p>
          <p class="text-muted">Release Date: ${movie.release_date || "N/A"}</p>
          <p>${movie.overview || "No overview available."}</p>
          <h5>Genres</h5>
          <ul class="list-group">
            ${renderGenresList(movie.genres)}
          </ul>
          ${
            movie.homepage
              ? `<a href="${movie.homepage}" target="_blank" rel="noopener noreferrer" class="btn">Visit Movie Homepage</a>`
              : ""
          }
        </div>
      </div>
      <div class="details-bottom">
        <h2>Movie Info</h2>
        <ul>
          <li><span class="text-secondary">Budget:</span> ${
            movie.budget ? "$" + movie.budget.toLocaleString() : "Not Available"
          }</li>
          <li><span class="text-secondary">Revenue:</span> ${
            movie.revenue
              ? "$" + movie.revenue.toLocaleString()
              : "Not Available"
          }</li>
          <li><span class="text-secondary">Runtime:</span> ${
            movie.runtime ? movie.runtime + " minutes" : "Not Available"
          }</li>
          <li><span class="text-secondary">Status:</span> ${
            movie.status || "Not Available"
          }</li>
        </ul>
        <h4>Production Companies</h4>
        <div class="list-group">${renderCommaSeparatedList(
          movie.production_companies,
        )}</div>
      </div>
    `;

    const container = document.querySelector(DOM_SELECTORS.movieDetails);
    if (container) {
      container.appendChild(div);
    }
  } catch (error) {
    console.error("Error displaying movie details:", error);
  }
};

export const displaySlider = async () => {
  try {
    const { results } = await fetchAPIData("movie/now_playing");

    const swiperWrapper = document.querySelector(DOM_SELECTORS.swiperWrapper);
    if (!swiperWrapper) return;

    results.forEach((movie) => {
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      div.innerHTML = `
        <a href="movie-details.html?id=${movie.id}">
          <img 
            src="${IMAGE_BASE_URL}${movie.poster_path}" 
            alt="${movie.title}"
            loading="lazy"
          />
        </a>
        <h4 class="swiper-rating">
          <i class="fas fa-star text-secondary"></i> ${movie.vote_average.toFixed(
            1,
          )} / 10
        </h4>
      `;
      swiperWrapper.appendChild(div);
    });

    // Initialize Swiper after all slides are added
    initSwiper();
  } catch (error) {
    console.error("Error displaying slider:", error);
  }
};

const initSwiper = () => {
  const swiper = new Swiper(".swiper", {
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
  });
};
