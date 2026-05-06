document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
  {
    id: "mothers-magik-range",
    title: "Mothers Magik Jar Label Range",
    client: "Mothers Magik",
    category: "Dry Fruits",
    image: "/assets/work/mothers-magik-pasforan.jpg",
    tags: ["FMCG", "Dry Fruits", "Spices", "Jar Label", "Range"],
    description:
      "A complete jar-label system for dry fruits, seeds, and spices using one shared brand structure with variant-specific colors and ingredient imagery.",
    challenge:
      "Keep every variant instantly recognizable while making the whole range feel like one branded product family on the shelf.",
    tools: ["Photoshop", "Illustrator", "Variant System", "Jar Mockup", "Print Layout"],
    slides: [
      {
        title: "Pasforan Jar Label",
        category: "Spices",
        image: "/assets/work/mothers-magik-pasforan.jpg",
        tags: ["FMCG", "Spices", "Jar Label"],
        description:
          "Green spice label with dense ingredient photography, a central premium badge, and bold product naming for fast recognition.",
        challenge:
          "Balance multiple spice visuals on a curved jar surface without losing readability or brand recall.",
      },
      {
        title: "Souff Jar Label",
        category: "Spices",
        image: "/assets/work/mothers-magik-souff.jpg",
        tags: ["FMCG", "Spices", "Herbs"],
        description:
          "Fresh fennel variant with green tones, ingredient texture, and the same reusable range architecture.",
        challenge:
          "Make a familiar spice feel fresh while retaining the category cues buyers expect.",
      },
      {
        title: "Pista Jar Label",
        category: "Dry Fruits",
        image: "/assets/work/mothers-magik-pista.jpg",
        tags: ["FMCG", "Dry Fruits", "Premium Label"],
        description:
          "Pistachio variant with soft cream tones, product-led imagery, and a clean premium shelf look.",
        challenge:
          "Keep the product variant prominent while preserving enough whitespace for a dry-fruit category feel.",
      },
      {
        title: "Cashew Jar Label",
        category: "Dry Fruits",
        image: "/assets/work/mothers-magik-cashew.jpg",
        tags: ["FMCG", "Dry Fruits", "Jar Label"],
        description:
          "Cashew label with warm cream tones, large product typography, and rich ingredient photography.",
        challenge:
          "Create a rich dry-fruit look while keeping brand mark, product name, and ingredient imagery in order.",
      },
      {
        title: "Almond Jar Label",
        category: "Dry Fruits",
        image: "/assets/work/mothers-magik-almond.jpg",
        tags: ["FMCG", "Dry Fruits", "Variant Design"],
        description:
          "Almond variant with warm orange color, large product naming, and ingredient-led visual composition.",
        challenge:
          "Differentiate the almond variant while keeping it clearly part of the same brand family.",
      },
      {
        title: "Raisins Jar Label",
        category: "Dry Fruits",
        image: "/assets/work/mothers-magik-raisins.jpg",
        tags: ["FMCG", "Dry Fruits", "Food Label"],
        description:
          "Raisins label focused on golden product imagery, soft shelf colors, and clear brand-to-product reading order.",
        challenge:
          "Use light tones without making the label look washed out while keeping the variant name sharp.",
      },
      {
        title: "Magaj Jar Label",
        category: "Dry Fruits",
        image: "/assets/work/mothers-magik-magaj.jpg",
        tags: ["FMCG", "Dry Fruits", "Seeds"],
        description:
          "Bold red seed-pack label using fruit cues and strong contrast so the variant is instantly noticeable.",
        challenge:
          "Make a niche product easy to identify while retaining the same range architecture as the other jars.",
      },
    ],
  },
  {
    id: "jivika-gold-atta",
    title: "Jivika Gold Chakki Atta",
    client: "Jivika Gold",
    category: "Atta/Grains",
    image: "/assets/work/jivika-gold-atta.jpg",
    tags: ["FMCG", "Atta/Grains", "Retail Pack"],
    description:
      "A family-size flour pack system with clear grain cues, weight hierarchy, quality markers, and strong shelf presence for grocery retail.",
    challenge:
      "Build a premium atta pack that keeps product information readable while making grain origin, purity claims, and pack size easy to scan.",
    tools: ["Photoshop", "Illustrator", "Packaging Mockup", "Print Layout"],
  },
  {
    id: "xuwola-tea",
    title: "Xuwola Tea Pouch",
    client: "Xuwola Tea",
    category: "Tea",
    image: "/assets/work/xuwola-tea.jpg",
    tags: ["Tea", "Pouch", "FMCG"],
    description:
      "An Assam tea pouch concept with cultural storytelling, illustration-led packaging, and a scenic product backdrop.",
    challenge:
      "Represent Assam origin and culture in a soft, modern way while keeping the pack suitable for premium tea positioning.",
    tools: ["Photoshop", "Illustrator", "Illustration", "Pouch Mockup"],
  },
  {
    id: "tae-bari-orthodox",
    title: "TAE-BARI Orthodox Tea",
    client: "TAE-BARI",
    category: "Tea",
    image: "/assets/work/tae-bari-orthodox-new.jpg",
    tags: ["Tea", "Pouch", "Brand System"],
    description:
      "A front-and-back orthodox tea pouch with origin illustration, health-benefit layout, contact details, and certification placement.",
    challenge:
      "Handle both storytelling and compliance information without making the premium tea pouch feel cluttered.",
    tools: ["Photoshop", "Illustrator", "Information Design", "Print Layout"],
    slides: [
      {
        title: "TAE-BARI Orthodox Tea",
        category: "Tea",
        image: "/assets/work/tae-bari-orthodox-new.jpg",
        tags: ["Tea", "Pouch", "Brand System"],
        description:
          "Front-and-back orthodox tea pouch showing product story, benefits, contact block, and compliance hierarchy.",
        challenge:
          "Organize all back-panel information without breaking the premium visual identity.",
      },
      {
        title: "TAE-BARI Premium Tea",
        category: "Tea",
        image: "/assets/work/tae-bari-premium-new.jpg",
        tags: ["Tea", "Premium Pack", "Mockup"],
        description:
          "Premium tea pouch mockup with warm material texture, brand badge, tea-cup visual, and garden cues.",
        challenge:
          "Create a simple premium pack face that feels traditional but still clean enough for modern retail.",
      },
      {
        title: "TAE-BARI Premium Tea Concept",
        category: "Tea",
        image: "/assets/work/tae-bari-premium-tea.jpg",
        tags: ["Tea", "Identity", "Pouch"],
        description:
          "Earlier tea-pack direction using warm tones, cup imagery, and a prominent brand badge.",
        challenge:
          "Keep the old tea identity recognizable while improving hierarchy and shelf presence.",
      },
    ],
  },
  {
    id: "evaly-water",
    title: "Evaly Luxury Water",
    client: "Evaly",
    category: "FMCG",
    image: "/assets/work/evaly-water-cropped.jpg",
    tags: ["FMCG", "Label Design", "Print Layout"],
    description:
      "Premium red water-bottle label with brand mark, QR placement, regulatory text, barcode, FSSAI details, and high-contrast shelf visibility.",
    challenge:
      "Fit compliance details into a compact bottle label while keeping the design bold and premium.",
    tools: ["Photoshop", "Illustrator", "Label Design", "Print Layout"],
  },
  {
    id: "binsol-peacock-saunf",
    title: "Binsol Peacock Saunf",
    client: "Binsol",
    category: "Spices",
    image: "/assets/work/binsol-peacock-saunf.webp",
    tags: ["FMCG", "Spices", "Pouch"],
    description:
      "Bright spice pouch design using green freshness cues, peacock illustration, premium-quality badge, and category-forward typography.",
    challenge:
      "Make a retail spice pouch look fresh and memorable while keeping the product name immediately readable.",
    tools: ["Photoshop", "Illustrator", "Pouch Mockup", "Retail Packaging"],
  },
  {
    id: "fresho-clean",
    title: "Fresho Clean Range",
    client: "Fresho Clean",
    category: "Home Care",
    image: "/assets/work/fresho-clean-range.jpg",
    tags: ["Home Care", "Range Design", "Mockup"],
    description:
      "A coordinated cleaning-product range balancing variant colors, hygiene cues, and clear product naming.",
    challenge:
      "Make different home-care products feel like one family while giving every bottle its own category signal.",
    tools: ["Photoshop", "Illustrator", "Range System", "Mockup"],
    slides: [
      {
        title: "Fresho Clean Range",
        category: "Home Care",
        image: "/assets/work/fresho-clean-range.jpg",
        tags: ["Home Care", "Range Design", "Mockup"],
        description:
          "Multi-product visual system for dish wash, floor cleaner, and glass cleaner with clear variant colors.",
        challenge:
          "Balance one brand system across different home-care product types.",
      },
      {
        title: "Fresho Clean Hand Wash",
        category: "Home Care",
        image: "/assets/work/fresho-handwash.jpg",
        tags: ["Home Care", "Label", "Mockup"],
        description:
          "Green hand-wash label with hygiene cues, product naming, benefit callouts, and fresh category styling.",
        challenge:
          "Make a single label stand out while still feeling connected to the wider Fresho Clean range.",
      },
    ],
  },
];

const filters = ["All", "FMCG", "Tea", "Spices", "Home Care", "Dry Fruits", "Atta/Grains"];
const gallery = document.getElementById("workGallery");
const filterBar = document.getElementById("workFilters");
const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalClient = document.getElementById("modalClient");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalChallenge = document.getElementById("modalChallenge");
const modalTools = document.getElementById("modalTools");
const modalCounter = document.getElementById("modalCounter");
const modalThumbs = document.getElementById("modalThumbs");
const modalThumbsWrap = document.getElementById("modalThumbsWrap");
const carouselPrev = document.querySelector("[data-carousel-prev]");
const carouselNext = document.querySelector("[data-carousel-next]");
let activeFilter = "All";
let activeProject = null;
let activeSlideIndex = 0;
let lastFocusedElement = null;

const revealObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
      )
    : null;

function getSlides(project) {
  return project.slides && project.slides.length ? project.slides : [project];
}

function getProjectTags(project) {
  const slideTags = getSlides(project).flatMap((slide) => slide.tags || []);
  return [...new Set([project.category, ...project.tags, ...slideTags])];
}

function observeRevealItems(scope = document) {
  const items = scope.querySelectorAll(".reveal:not(.is-visible)");

  if (revealObserver) {
    items.forEach((item) => revealObserver.observe(item));
  } else {
    items.forEach((item) => item.classList.add("is-visible"));
  }
}

function projectMatchesFilter(project) {
  return activeFilter === "All" || getProjectTags(project).includes(activeFilter);
}

function createTagMarkup(tags) {
  return tags.map((tag) => `<span>${tag}</span>`).join("");
}

function renderFilters() {
  filterBar.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-btn${filter === activeFilter ? " is-active" : ""}" type="button" data-filter="${filter}">
          ${filter}
        </button>
      `
    )
    .join("");
}

function renderGallery() {
  const visibleProjects = projects.filter(projectMatchesFilter);

  gallery.innerHTML = visibleProjects
    .map((project, index) => {
      const count = getSlides(project).length;
      const countLabel = count > 1 ? `<span class="project-count">${count} images</span>` : "";

      return `
        <article class="work-card reveal ${index % 3 === 1 ? "delay-1" : index % 3 === 2 ? "delay-2" : ""}">
          <button class="work-card-button" type="button" data-project-id="${project.id}">
            <div class="work-image">
              ${countLabel}
              <img src="${project.image}" alt="${project.title} packaging mockup by Niraj Roy" loading="lazy" />
            </div>
            <div class="work-content">
              <div class="client-badge">
                <small>Client Brand</small>
                <strong>${project.client}</strong>
              </div>
              <p>${project.category}</p>
              <h3>${project.title}</h3>
              <div class="tag-row">${createTagMarkup(project.tags)}</div>
            </div>
          </button>
        </article>
      `;
    })
    .join("");

  gallery.querySelectorAll("[data-project-id]").forEach((card) => {
    card.addEventListener("click", () => openProject(card.dataset.projectId));
  });

  observeRevealItems(gallery);
}

function renderThumbs(project) {
  const slides = getSlides(project);
  modalThumbsWrap.hidden = slides.length <= 1;
  modalThumbs.innerHTML = slides
    .map(
      (slide, index) => `
        <button class="carousel-thumb${index === activeSlideIndex ? " is-active" : ""}" type="button" data-slide-index="${index}">
          <img src="${slide.image}" alt="${slide.title}" />
          <span>${slide.title}</span>
        </button>
      `
    )
    .join("");
}

function updateCarouselControls(project) {
  const hasMultipleSlides = getSlides(project).length > 1;
  carouselPrev.hidden = !hasMultipleSlides;
  carouselNext.hidden = !hasMultipleSlides;
  modalCounter.hidden = !hasMultipleSlides;
}

function updateModalSlide() {
  if (!activeProject) return;

  const slides = getSlides(activeProject);
  const slide = slides[activeSlideIndex];
  const tags = slide.tags || activeProject.tags;

  modalImage.src = slide.image;
  modalImage.alt = `${slide.title} packaging mockup`;
  modalClient.textContent = activeProject.client;
  modalCategory.textContent = slide.category || activeProject.category;
  modalTitle.textContent = slide.title || activeProject.title;
  modalDescription.textContent = slide.description || activeProject.description;
  modalChallenge.textContent = slide.challenge || activeProject.challenge;
  modalTools.innerHTML = createTagMarkup(activeProject.tools);
  modalCounter.textContent = `${activeSlideIndex + 1} / ${slides.length}`;
  renderThumbs(activeProject);

  modalThumbs.querySelectorAll("[data-slide-index]").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      activeSlideIndex = Number(thumb.dataset.slideIndex);
      updateModalSlide();
    });
  });

  modal.querySelector(".detail-block .tag-row").innerHTML = createTagMarkup(activeProject.tools);
  modal.querySelectorAll(".project-detail-copy > .tag-row").forEach((row) => row.remove());
  modalTitle.insertAdjacentHTML("afterend", `<div class="tag-row modal-tags">${createTagMarkup(tags)}</div>`);
}

function moveSlide(direction) {
  if (!activeProject) return;

  const slides = getSlides(activeProject);
  activeSlideIndex = (activeSlideIndex + direction + slides.length) % slides.length;
  updateModalSlide();
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  lastFocusedElement = document.activeElement;
  activeProject = project;
  activeSlideIndex = 0;
  updateCarouselControls(project);
  updateModalSlide();

  modal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modal.classList.add("is-open"));
  modal.querySelector(".modal-close").focus();
}

function closeProject() {
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");

  window.setTimeout(() => {
    modal.hidden = true;
    modalImage.src = "";
    activeProject = null;
    activeSlideIndex = 0;
    if (lastFocusedElement) lastFocusedElement.focus();
  }, 220);
}

filterBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;
  renderFilters();
  renderGallery();
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-modal-close]")) {
    closeProject();
  }

  if (event.target.closest("[data-modal-more]")) {
    closeProject();
    document.getElementById("work").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

carouselPrev.addEventListener("click", () => moveSlide(-1));
carouselNext.addEventListener("click", () => moveSlide(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeProject();
  }

  if (event.key === "ArrowLeft" && !modal.hidden) {
    moveSlide(-1);
  }

  if (event.key === "ArrowRight" && !modal.hidden) {
    moveSlide(1);
  }
});

renderFilters();
renderGallery();
observeRevealItems();
