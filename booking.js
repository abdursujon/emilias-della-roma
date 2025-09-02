  // select guest numbers
  const dropdownButton2 = document.getElementById("number-of-guests");
  const dropdownItems2 = document.querySelectorAll(".select");

  // Add click event to each item
  dropdownItems2.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // prevent page jump
      dropdownButton2.textContent = this.textContent; // update button text
    });
  });
  //select a restaurant 
  const dropdownButton3 = document.getElementById("choose-rst");
  const dropdownItems3 = document.querySelectorAll(".rst");

  // Add click event to each item
  dropdownItems3.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // prevent page jump
      dropdownButton3.textContent = this.textContent; // update button text
    });
  });

// calender
  const dateInput = flatpickr("#customDateInput", {
    dateFormat: "d-m-Y", // Example format: 2025-09-01
    defaultDate: new Date(), // Preselect today
    allowInput: false,
    clickOpens: false
  });

  // Open calendar when button is clicked
  document.getElementById("calendarBtn").addEventListener("click", () => {
    dateInput.open();
  });