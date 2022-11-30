const sidebarButton = document.querySelector(".sidebar__btn");
const sidebar = document.querySelector(".sidebar__menu");
const backdrop = document.querySelector(".backdrop");
const body = document.querySelector("body");
const sidebarFeatures = document.getElementById("sidebar__features");
const sidebarCompany = document.getElementById("sidebar__company");
const sidebarFeaturesDropdown = document.getElementById(
  "sidebar__features--dropdown"
);
const sidebarCompanyDropdown = document.getElementById(
  "sidebar__company--dropdown"
);
let sidebarOpen = false;
let sidebarFeaturesOpen = false;
let sidebarCompanyOpen = false;

function showSidebar() {
  body.style.overflow = "hidden";
  sidebar.classList.add("active");
  sidebarButton.style.position = "fixed";
  sidebarButton.innerHTML = '<img src="/images/icon-close-menu.svg" alt="">';
  backdrop.style.display = "block";
  sidebarOpen = true;
}

function hideSidebar() {
  body.style.overflow = "auto";
  sidebar.classList.remove("active");
  sidebarButton.style.position = "absolute";
  sidebarButton.innerHTML = '<img src="/images/icon-menu.svg" alt="">';
  backdrop.style.display = "none";
  sidebarOpen = false;
}

function showFeatures() {
  sidebarFeaturesDropdown.style.display = "block";
  sidebarFeatures.innerHTML =
    'Features <img src="/images/icon-arrow-up.svg" alt="">';
  sidebarFeaturesOpen = true;
}

function hideFeatures() {
  sidebarFeaturesDropdown.style.display = "none";
  sidebarFeatures.innerHTML =
    'Features <img src="/images/icon-arrow-down.svg" alt="">';
  sidebarFeaturesOpen = false;
}

function showCompany() {
  sidebarCompanyDropdown.style.display = "block";
  sidebarCompany.innerHTML =
    'Company <img src="/images/icon-arrow-up.svg" alt="">';
  sidebarCompanyOpen = true;
}

function hideCompany() {
  sidebarCompanyDropdown.style.display = "none";
  sidebarCompany.innerHTML =
    'Company <img src="/images/icon-arrow-down.svg" alt="">';
  sidebarCompanyOpen = false;
}

if (sidebarFeatures) {
  sidebarFeatures.addEventListener("click", () => {
    if (!sidebarFeaturesOpen) {
      showFeatures();
    } else {
      hideFeatures();
    }
  });
}

if (sidebarCompany) {
  sidebarCompany.addEventListener("click", () => {
    if (!sidebarCompanyOpen) {
      showCompany();
    } else {
      hideCompany();
    }
  });
}

if (sidebarButton) {
  sidebarButton.addEventListener("click", () => {
    if (!sidebarOpen) {
      showSidebar();
    } else {
      hideSidebar();
    }
  });
}

if (backdrop) {
  backdrop.addEventListener("click", () => {
    hideSidebar();
  });
}
