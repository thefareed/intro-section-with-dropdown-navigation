function dropdownFeatures() {
  document
    .getElementById("features__dropdown")
    .classList.toggle("dropdown__show");
  document.getElementById("features__arrow").classList.toggle("rotate");
}

function dropdownCompany() {
  document
    .getElementById("company__dropdown")
    .classList.toggle("dropdown__show");
  document.getElementById("company__arrow").classList.toggle("rotate");
}

windows.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
