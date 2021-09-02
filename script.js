window.onload = () => {
  //Variables
  const dropdownIcon = document.querySelector(".dropdown-icon");
  const dropDown = document.querySelector(".dropdown");

  // Functions
  function toggleDropdown() {
    const dropdownImage = dropdownIcon.firstElementChild;
    let img = "";
    if (dropDown.style.display == "none") {
      dropDown.style.display = "block";
      img = "../images/icon-close.svg";
    } else {
      dropDown.style.display = "none";
      img = "../images/icon-hamburger.svg";
    }
    dropdownImage.src = img;
  }

  // Event listeners
  dropdownIcon.addEventListener("click", toggleDropdown);
};
