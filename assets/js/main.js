const accentMap = {
  cyan: "var(--cyan)",
  pink: "var(--pink)",
  purple: "var(--purple)",
  yellow: "var(--yellow)",
  red: "var(--red)",
  orange: "var(--orange)",
  green: "var(--green)"
};

const workGrid = document.querySelector("#workGrid");

function renderExtra(extra) {
  if (!extra) {
    return "";
  }

  if (extra.type === "manga") {
    const images = (extra.images || []).map((src, index) => {
      return `
        <figure class="shot">
          <img src="${src}" alt="${extra.title || "STORY"} ${index + 1}" loading="lazy" data-lightbox>
        </figure>
      `;
    }).join("");

    return `
      <div class="gallery workExtra">
        <p class="gallery__title">${extra.title || "STORY"}</p>
        <p class="work__desc">${extra.lead || ""}</p>
        <div class="gallery__strip">
          ${images}
        </div>
      </div>
    `;
  }

  if (extra.type === "gif") {
    return `
      <div class="gallery workExtra">
        <p class="gallery__title">${extra.title || "GIF PREVIEW"}</p>
        <div class="gallery__strip">
          <figure class="shot">
            <img src="${extra.image}" alt="${extra.title || "GIF PREVIEW"}" loading="lazy" data-lightbox>
          </figure>
        </div>
        <p class="work__desc">${extra.lead || ""}</p>
      </div>
    `;
  }

  return "";
}

function renderWork(work) {
  const article = document.createElement("article");
  article.className = "work";
  article.style.setProperty("--accent", accentMap[work.accent] || "var(--cyan)");

  const tags = (work.tags || []).map((tag) => {
    return `<span class="tag">${tag}</span>`;
  }).join("");

  const links = (work.links || []).map((link) => {
    return `<a class="action" href="${link.url}">${link.label}</a>`;
  }).join("");

  const shots = (work.screenshots || []).map((src, index) => {
    return `
      <figure class="shot">
        <img src="${src}" alt="${work.title} スクリーンショット ${index + 1}" loading="lazy" data-lightbox>
      </figure>
    `;
  }).join("");

  article.innerHTML = `
    <div class="work__head">
      <div class="work__thumb" style="background-image:url('${work.thumbnail}')"></div>

      <div class="work__body">
        <span class="status">${work.status}</span>
        <h3>${work.title}</h3>
        <p class="work__catch">${work.catch}</p>
        <p class="work__desc">${work.description}</p>

        <div class="tags">
          ${tags}
        </div>

        <div class="actions">
          ${links}
        </div>
      </div>
    </div>

    <div class="gallery">
      <p class="gallery__title">SCREENSHOTS</p>
      <div class="gallery__strip">
        ${shots}
      </div>
    </div>

    ${renderExtra(work.extra)}
  `;

  workGrid.appendChild(article);
}

if (workGrid && typeof WORKS !== "undefined" && Array.isArray(WORKS)) {
  WORKS.forEach((work) => {
    renderWork(work);
  });
}

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const closeButton = document.querySelector(".lightbox__close");

document.addEventListener("click", (event) => {
  const target = event.target;

  if (!target || !target.matches("[data-lightbox]")) {
    return;
  }

  if (!lightbox || !lightboxImage) {
    return;
  }

  lightboxImage.src = target.src;
  lightboxImage.alt = target.alt || "";
  lightbox.classList.add("isOpen");
  lightbox.setAttribute("aria-hidden", "false");
});

function closeLightbox() {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.classList.remove("isOpen");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

if (closeButton) {
  closeButton.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});