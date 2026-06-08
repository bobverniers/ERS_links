// Edit WhatsApp group links here.
const GROUPS = {
  alex: {
    label: "Alex",
    student: [
      { label: "Rooms", url: "https://chat.whatsapp.com/DtgvyhNRwRmLl6QyiatjfL" },
      { label: "1 bedroom", url: "https://chat.whatsapp.com/JdjiFW6ZhaY5pdcZVEvHNE" },
      { label: "2 bedrooms", url: "https://chat.whatsapp.com/L3hQjJLhiUTItLQ6QGOwww" },
      { label: "3+ bedrooms", url: "https://chat.whatsapp.com/ItVjWsNKJZJ8OTWMXdwnrj" },
    ],
    working: [
      { label: "Rooms", url: "https://chat.whatsapp.com/Izitgm2aInkABartRnpNRP" },
      { label: "Studios & 1 bedroom", url: "https://chat.whatsapp.com/DvHHQ0Tp7KMCCRorR1DGLI" },
      { label: "2 bedrooms", url: "https://chat.whatsapp.com/LeyrSzvDe8x6RA35TU0nhE" },
      { label: "3+ bedrooms", url: "https://chat.whatsapp.com/HHotR1UHsNA4t6yumvOhRu" },
    ],
  },
  ers: {
    label: "ERS",
    student: [
      { label: "Rooms", url: "https://chat.whatsapp.com/DYNgf1cWncg4DhUqimdRA7" },
      { label: "1 bedroom", url: "https://chat.whatsapp.com/KzAOhoF7tLaHEEHkHmwdHi" },
      { label: "2 bedrooms", url: "https://chat.whatsapp.com/GGQeybgKcff2A694h9MT7M" },
      { label: "3+ bedrooms", url: "https://chat.whatsapp.com/Dz4il2gV2KDJgVhK9fByFe" },
    ],
    working: [
      { label: "Rooms", url: "https://chat.whatsapp.com/I3vimVyrbFk21gKupY8aHV" },
      { label: "1 bedroom", url: "https://chat.whatsapp.com/GMCXQ9mC0GwDT00MOKrWiA" },
      { label: "2 bedrooms", url: "https://chat.whatsapp.com/IscXNI9B5IF6aa5GPEKZmk" },
      { label: "3+ bedrooms", url: "https://chat.whatsapp.com/BuZzwgBF5VTIBLD3qpzixq" },
    ],
  },
};

const TYPE_LABELS = {
  student: "Student",
  working: "Working professional",
};

const stepAgent = document.getElementById("stepAgent");
const stepType = document.getElementById("stepType");
const stepLinks = document.getElementById("stepLinks");
const selectedAgent = document.getElementById("selectedAgent");
const selectedType = document.getElementById("selectedType");
const linkList = document.getElementById("linkList");

let currentAgent = null;
let currentType = null;

function showStep(step) {
  stepAgent.classList.toggle("hidden", step !== "agent");
  stepType.classList.toggle("hidden", step !== "type");
  stepLinks.classList.toggle("hidden", step !== "links");
}

function renderLinks() {
  const links = GROUPS[currentAgent][currentType];

  linkList.innerHTML = links
    .map(
      (item) =>
        `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a>`
    )
    .join("");
}

function selectAgent(agent) {
  currentAgent = agent;
  currentType = null;
  selectedAgent.textContent = `Contact: ${GROUPS[agent].label}`;
  showStep("type");
}

function selectType(type) {
  currentType = type;
  selectedType.textContent = `${GROUPS[currentAgent].label} · ${TYPE_LABELS[type]}`;
  renderLinks();
  showStep("links");
}

document.querySelectorAll("[data-agent]").forEach((button) => {
  button.addEventListener("click", () => selectAgent(button.dataset.agent));
});

document.querySelectorAll("[data-type]").forEach((button) => {
  button.addEventListener("click", () => selectType(button.dataset.type));
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "back-agent") {
      currentAgent = null;
      showStep("agent");
      return;
    }

    if (button.dataset.action === "back-type") {
      currentType = null;
      showStep("type");
    }
  });
});

showStep("agent");
