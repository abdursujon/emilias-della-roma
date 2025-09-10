// Store original booking form HTML
const bookATableDiv = document.getElementById("book-a-table-div");
const bookingFormHTML = bookATableDiv.innerHTML;

// Function to initialize all dropdowns & date picker
function initializeBookingForm() {
  // Restaurant
  const restaurantButton = document.getElementById("choose-rst");
  const restaurant = document.querySelectorAll(".rst");
  restaurant.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      restaurantButton.textContent = this.textContent;
    });
  });

  // Guest number
  const guestNumberButton = document.getElementById("number-of-guests");
  const guestNumber = document.querySelectorAll(".select");
  guestNumber.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      guestNumberButton.textContent = this.textContent;
    });
  });

  // Date picker
  const dateInput = flatpickr("#customDateInput", {
    dateFormat: "d-m-Y",
    defaultDate: new Date(),
    allowInput: false,
    clickOpens: false
  });
  document.getElementById("calendarBtn").addEventListener("click", () => {
    dateInput.open();
  });

  // Time slots
  const bookingTimeButton = document.getElementById("time");
  const bookingTime = document.querySelectorAll(".time-slot");
  bookingTime.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      bookingTimeButton.textContent = this.textContent;
    });
  });

  // Book a table confirmation
  document.getElementById("book-a-table-btn-confirm").addEventListener("click", function () {
    const selectedRestaurant = restaurantButton.textContent;
    const selectedGuestNumber = guestNumberButton.textContent;
    const selectedDate = dateInput.selectedDates[0] ? dateInput.selectedDates[0].toDateString() : '';
    const selectedTime = bookingTimeButton.textContent;

    bookATableDiv.innerHTML = `
     <h1>BOOK A TABLE UP TO 15 GUESTS</h1>
      <ol>
          <li> Select a restaurant</li>
          <li> Select number of guests</li>
          <li> Choose a date</li>
          <li> Select a time</li>
          <li> Click book a table</li>
          <li> Enter personal details</li>
          <li> Confirm your booking</li>
      </ol>
      <h1>YOU HAVE SELECTED</h1>
      <p> <span class="booking-info"> RESTAURANT: </span> ${selectedRestaurant}</p>
      <p> <span class="booking-info"> DATE: </span> ${selectedDate}</p>
      <p> <span class="booking-info"> TIME: </span>  ${selectedTime}</p>
      <p> <span class="booking-info"> NUMBER OF GUESTS:  </span> ${selectedGuestNumber}</p>
      <p> <span class="booking-info"> Standard </span></p>
      <div class="row">
      <button type="button" id="enter-personal-details">ENTER PERSONAL DETAILS</button>
      <div id="personal-details"></div>
      <button type="button" id="back">BACK</button>
      </div>
      
    `;

    // Personal details form
    document.getElementById("enter-personal-details").addEventListener("click", function () {
      document.getElementById("personal-details").innerHTML = `
        <form action="send_email.php" method="POST" id="booking-form">
          <div class="mb-3">
            <label for="firstname">FIRST NAME:</label>
            <input type="text" id="firstname" name="firstname" required>
          </div>
          <div class="mb-3">
            <label for="lastname">LAST NAME:</label>
            <input type="text" id="lastname" name="lastname" required>
          </div>
          <div class="mb-3">
            <label for="telephone">TELEPHONE NUMBER:</label>
            <input type="text" id="telephone" name="telephone">
          </div>
          <div class="mb-3">
            <label for="email">EMAIL ADDRESS:</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label>BOOKING NOTES</label>
            <textarea class="form-control" rows="5" name="notes" placeholder="Enter your enquiry"></textarea>
          </div>
          <!-- Hidden inputs for booking details -->
          <input type="hidden" name="restaurant" id="restaurant-hidden" value="${selectedRestaurant}">
          <input type="hidden" name="date" id="date-hidden" value="${selectedDate}">
          <input type="hidden" name="time" id="time-hidden" value="${selectedTime}">
          <input type="hidden" name="guests" id="guests-hidden" value="${selectedGuestNumber}">
          <input type="submit" class="btn btn-primary" id="confirm-booking" value="CONFIRM YOUR BOOKING">
        </form>
      `;

      // Attach listener to confirm booking
      document.getElementById('confirm-booking').addEventListener('click', function(e) {
        // Hidden fields already filled with selected values above
        // Just let the form submit normally
      });
    });

    // Reattach back button to restore original form
    document.getElementById("back").addEventListener("click", () => {
      bookATableDiv.innerHTML = bookingFormHTML;
      initializeBookingForm(); // Reinitialize events for the restored form
    });
  });
}

// Initialize form on page load
initializeBookingForm();
