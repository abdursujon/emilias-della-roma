// Get the dropdown button and menu items
  const dropdownButton = document.getElementById("dropdownMenuButton");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  // Add click event to each item
  dropdownItems.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // prevent page jump
      dropdownButton.textContent = this.textContent; // update button text
    });
  });