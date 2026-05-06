document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
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
      "Build a premium atta pack that keeps product information readable while making the grain origin, purity claims, and pack size easy to scan.",
    tools: ["Photoshop", "Illustrator", "Packaging Mockup", "Print Layout"],
  },
  {
    id: "mothers-magik-pasforan",
    title: "Pasforan Jar Label",
    client: "Mothers Magik",
    category: "Spices",
    image: "/assets/work/mothers-magik-pasforan.jpg",
    tags: ["FMCG", "Spices", "Jar Label"],
    description:
      "A spice jar label using green category cues, ingredient photography, and a centered premium brand badge for quick retail recognition.",
    challenge:
      "Balance dense ingredient imagery with a bold product name so the label stays readable on a curved jar surface.",
    tools: ["Photoshop", "Illustrator", "Label Design", "Mockup"],
  },
  {
    id: "mothers-magik-souff",
    title: "Souff Jar Label",
    client: "Mothers Magik",
    category: "Spices",
    image: "/assets/work/mothers-magik-souff.jpg",
    tags: ["FMCG", "Spices", "Herbs"],
    description:
      "Fresh green fennel packaging built around ingredient texture, product contrast, and a reusable visual language for the brand range.",
    challenge:
      "Make a familiar spice feel fresh without losing the traditional visual cues buyers expect in the category.",
    tools: ["Photoshop", "Illustrator", "Color System", "Product Mockup"],
  },
  {
    id: "mothers-magik-pista",
    title: "Pista Jar Label",
    client: "Mothers Magik",
    category: "Dry Fruits",
    image: "/assets/work/mothers-magik-pista.jpg",
    tags: ["FMCG", "Dry Fruits", "Premium Label"],
    description:
      "A bright dry-fruit label with pistachio imagery, soft cream tones, and a consistent brand header for range extension.",
    challenge:
      "Keep the product variant prominent while preserving enough premium whitespace for a clean dry-fruits shelf look.",
    tools: ["Photoshop", "Illustrator", "Variant System", "Jar Mockup"],
  },
  {
    id: "mothers-magik-cashew",
    title: "Cashew Jar Label",
    client: "Mothers Magik",
    category: "Dry Fruits",
    image: "/assets/work/mothers-magik-cashew.jpg",
    tags: ["FMCG", "Dry Fruits", "Jar Label"],
    description:
      "A cashew variant label with warm cream tones, large product typography, and rich ingredient photography for premium recall.",
    challenge:
      "Create a rich dry-fruit look while keeping the brand mark, product name, and appetizing product imagery in a clean hierarchy.",
    tools: ["Photoshop", "Illustrator", "Photo Compositing", "Mockup"],
  },
  {
    id: "mothers-magik-almond",
    title: "Almond Jar Label",
    client: "Mothers Magik",
    category: "Dry Fruits",
    image: "/assets/work/mothers-magik-almond.jpg",
    tags: ["FMCG", "Dry Fruits", "Variant Design"],
    description:
      "An almond pack variant with warm orange category color, large product naming, and ingredient-led visual composition.",
    challenge:
      "Differentiate the almond variant from the rest of the range while keeping it clearly part of the same brand family.",
    tools: ["Photoshop", "Illustrator", "Packaging System", "Mockup"],
  },
  {
    id: "mothers-magik-raisins",
    title: "Raisins Jar Label",
    client: "Mothers Magik",
    category: "Dry Fruits",
    image: "/assets/work/mothers-magik-raisins.jpg",
    tags: ["FMCG", "Dry Fruits", "Food Label"],
    description:
      "A raisins label focused on golden product imagery, soft shelf colors, and a clear brand-to-product reading order.",
    challenge:
      "Use light tones without making the label look washed out, while keeping the variant name sharp and visible.",
    tools: ["Photoshop", "Illustrator", "Image Treatment", "Mockup"],
  },
  {
    id: "mothers-magik-magaj",
    title: "Magaj Jar Label",
    client: "Mothers Magik",
    category: "Dry Fruits",
    image: "/assets/work/mothers-magik-magaj.jpg",
    tags: ["FMCG", "Dry Fruits", "Seeds"],
    description:
      "A bold red seed-pack label that uses fruit cues and strong contrast to make the variant instantly noticeable.",
    challenge:
      "Make a niche product variant easy to identify while retaining the same range architecture as the other jars.",
    tools: ["Photoshop", "Illustrator", "Variant Design", "Mockup"],
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
      "Make different home-care products feel like one family while giving every bottle its own clear category signal.",
    tools: ["Photoshop", "Illustrator", "Range System", "Mockup"],
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
let activeFilter = "All";
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

function observeRevealItems(scope = document) {
  const items = scope.querySelectorAll(".reveal:not(.is-visible)");

  if (revealObserver) {
    items.forEach((item) => revealObserver.observe(item));
  } else {
    items.forEach((item) => item.classList.add("is-visible"));
  }
}

function projectMatchesFilter(project) {
  return activeFilter === "All" || project.category === activeFilter || project.tags.includes(activeFilter);
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
    .map(
      (project, index) => `
        <article class="work-card reveal ${index % 3 === 1 ? "delay-1" : index % 3 === 2 ? "delay-2" : ""}">
          <button class="work-card-button" type="button" data-project-id="${project.id}">
            <div class="work-image">
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
      `
    )
    .join("");

  gallery.querySelectorAll("[data-project-id]").forEach((card) => {
    card.addEventListener("click", () => openProject(card.dataset.projectId));
  });

  observeRevealItems(gallery);
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  lastFocusedElement = document.activeElement;
  modalImage.src = project.image;
  modalImage.alt = `${project.title} packaging mockup`;
  modalClient.textContent = project.client;
  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalChallenge.textContent = project.challenge;
  modalTools.innerHTML = createTagMarkup(project.tools);

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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeProject();
  }
});

renderFilters();
renderGallery();
observeRevealItems();
