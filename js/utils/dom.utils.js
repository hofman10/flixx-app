import { IMAGE_BASE_URL, NO_IMAGE_PLACEHOLDER } from "../config/constants.js";

export const createPosterImage = (posterPath, altText) => {
  return posterPath
    ? `<img
        src="${IMAGE_BASE_URL}${posterPath}"
        class="card-img-top"
        alt="${altText}"
        loading="lazy"
      />`
    : `<img
        src="${NO_IMAGE_PLACEHOLDER}"
        class="card-img-top"
        alt="${altText}"
        loading="lazy"
      />`;
};

export const renderGenresList = (genres) => {
  if (!genres || genres.length === 0) {
    return "<li>Not Available</li>";
  }
  return genres.map((genre) => `<li>${genre.name}</li>`).join("");
};

export const renderCommaSeparatedList = (items, property = "name") => {
  if (!items || items.length === 0) {
    return "Not Available";
  }
  return items.map((item) => `<span>${item[property]}</span>`).join(", ");
};

export const createCard = (item, type) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const title = type === "movie" ? item.title : item.name;
  const releaseDate =
    type === "movie" ? item.release_date : item.first_air_date;

  div.innerHTML = `
    <a href="${type}-details.html?id=${item.id}">
      ${createPosterImage(item.poster_path, title)}
    </a>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">
        <small class="text-muted">Release: ${releaseDate || "N/A"}</small>
      </p>
    </div>
  `;

  return div;
};
