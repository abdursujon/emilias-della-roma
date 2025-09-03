
//select a restaurant 
const restaurantButton = document.getElementById("choose-rst");
const restaurant = document.querySelectorAll(".rst");
restaurant.forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    restaurantButton.textContent = this.textContent;
  });
});
function getselectedRestaurant() {
  const selectedRestaurant = restaurantButton.textContent;
  return selectedRestaurant;
}
const selectedRestaurant = getselectedRestaurant();

// select guest numbers
const guestNumberButton = document.getElementById("number-of-guests");
const guestNumber = document.querySelectorAll(".select");
guestNumber.forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    guestNumberButton.textContent = this.textContent;
  });
});
function getSelectedGuestNumber() {
  const selectedGuestNumber = guestNumberButton.textContent;
  return selectedGuestNumber;
}
const selectedGuestNumber = getSelectedGuestNumber();

// Choose a date
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
function getSelectedDate() {
  // flatpickr stores selected dates in an array (even if single selection)
  const selected = dateInput.selectedDates[0]; // Date object
  if (!selected) return null; // If no date is selected
  const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  // Array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayName = dayNames[selected.getDay()];
  const dayOfMonth = selected.getDate(); // 1-31
  const monthName = monthNames[selected.getMonth()];
  const year = selected.getFullYear();
  return `${dayName}, ${dayOfMonth} ${monthName} ${year}`;
}

//Select a time slots
const bookingTimeButton = document.getElementById("time");
const bookingTime = document.querySelectorAll(".time-slot");
bookingTime.forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    bookingTimeButton.textContent = this.textContent;
  });
});
function getSelectedTime() {
  const selectedTime = bookingTimeButton.textContent;
  return selectedTime;
}
const selectedTime = getSelectedTime();

// Confirmation
document.getElementById("book-a-table-btn-confirm").addEventListener("click", function () {
  const selectedRestaurant = getselectedRestaurant();
  const selectedGuestNumber = getSelectedGuestNumber();
  const selectedDate = getSelectedDate();
  const selectedTime = getSelectedTime();
  document.getElementById("book-a-table-container").innerHTML = `
            <h2>Book A Table For Up To 15 Guests</h2>
            <ol>
                <li> Select a restaurant</li>
                <li> Select number of guests</li>
                <li> Select a date</li>
                <li> Select a time</li>
                <li> Click book a table</li>
                <li> Confirm your details</li>
            </ol> <br>
            <h1> YOU HAVE SELECTED<h1>
            <p>RESTAURANT: ${selectedRestaurant}</p>
            <div>
                <p>TIME: ${selectedTime}</p>
                <p>DATE: ${selectedDate}</p>
                <p>NUMBER OF GUESTS: ${selectedGuestNumber}</p>
            </div>
            <p>You are one step away from enjoying your favorite Italian food.
            Reserve your table now and experience authentic flavors, warm hospitality, and a cozy atmosphere.
            Whether it's a casual lunch, a family dinner, or a special celebration,
            we've got the perfect spot waiting for you. Simply click on personal details to confirm your booking</p>
            <button type="button" id="personal-details" style="margin-bottom: 80px;">PERSONAL DETAILS</button>
            <button type="button" id="back">BACK</button>
            `;
});
// Back button to allow user go back to home of book a table
document.getElementById("back").addEventListener("click", function () {
  document.getElementById("book-a-table-container").innerHTML = `
               <h2>Book A Table For Up To 15 Guests</h2>
                <ol>
                    <li> Select a restaurant</li>
                    <li> Select number of guests</li>
                    <li> Select a date</li>
                    <li> Select a time</li>
                    <li> Click book a table</li>
                    <li> Confirm your details</li>
                </ol>
                <p> SELECT A RESTAURANT</p>
                <div class="dropdown" style="width: 100%;">
                    <button id="choose-rst" class="btn btn-secondary dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false" style="width: 100%;">
                        LONDON
                    </button>
                    <ul class="dropdown-menu" id="dropdown" aria-labelledby="dropdownMenuButton">
                        <li><a class="rst" href="#">LONDON</a></li>
                        <li><a class="rst" href="#">LEEDS</a></li>
                        <li><a class="rst" href="#">BIRMINGHAM</a></li>
                        <li><a class="rst" href="#">BRISTOL</a></li>
                        <li><a class="rst" href="#">LIVERPOOL</a></li>
                        <li><a class="rst" href="#">MANCHESTER</a></li>
                    </ul>
                </div>
                <p>NUMBER OF GUESTS</p>
                <div class="dropdown" style="width: 100%;">
                    <button id="number-of-guests" class="btn btn-secondary dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false" style="width: 100%;">
                        1 GUESTS
                    </button>
                    <ul class="dropdown-menu" id="dropdown" aria-labelledby="dropdownMenuButton">
                        <li><a class="select" href="#">1 GUESTS</a></li>
                        <li><a class="select" href="#">2 GUESTS</a></li>
                        <li><a class="select" href="#">3 GUESTS</a></li>
                        <li><a class="select" href="#">4 GUESTS</a></li>
                        <li><a class="select" href="#">5 GUESTS</a></li>
                        <li><a class="select" href="#">6 GUESTS</a></li>
                        <li><a class="select" href="#">7 GUESTS</a></li>
                        <li><a class="select" href="#">8 GUESTS</a></li>
                        <li><a class="select" href="#">9 GUESTS</a></li>
                        <li><a class="select" href="#">10 GUESTS</a></li>
                        <li><a class="select" href="#">11 GUESTS</a></li>
                        <li><a class="select" href="#">12 GUESTS</a></li>
                        <li><a class="select" href="#">13 GUESTS</a></li>
                        <li><a class="select" href="#">14 GUESTS</a></li>
                        <li><a class="select" href="#">15 GUESTS</a></li>
                    </ul>
                </div>
                <!-- Select date  -->
                <form>
                    <div class="mb-3">
                        <label for="customDateInput" class="form-label">DATE</label>
                        <div class="input-group">
                            <!-- The date input -->
                            <input type="text" class="form-control" id="customDateInput" placeholder="Please select">
                            <!-- The button that will trigger calendar -->
                            <button type="button" id="calendarBtn" class="btn btn-outline-secondary">
                                📅
                            </button>
                        </div>
                    </div>
                </form>
                <!-- Booking slot time -->
                <p>TIME</p>
                <div class="dropdown" style="width: 100%;">
                    <button id="time" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false" style="width: 100%;">
                        11:00
                    </button>
                    <ul class="dropdown-menu" id="dropdown" aria-labelledby="dropdownMenuButton">
                        <li><a class="time-slot" href="#">11:00</a></li>
                        <li><a class="time-slot" href="#">11:15</a></li>
                        <li><a class="time-slot" href="#">11:30</a></li>
                        <li><a class="time-slot" href="#">11:45</a></li>
                        <li><a class="time-slot" href="#">12:00</a></li>
                        <li><a class="time-slot" href="#">12:15</a></li>
                        <li><a class="time-slot" href="#">12:30</a></li>
                        <li><a class="time-slot" href="#">12:45</a></li>
                        <li><a class="time-slot" href="#">13:00</a></li>
                        <li><a class="time-slot" href="#">13:15</a></li>
                        <li><a class="time-slot" href="#">13:30</a></li>
                        <li><a class="time-slot" href="#">13:45</a></li>
                        <li><a class="time-slot" href="#">14:00</a></li>
                        <li><a class="time-slot" href="#">14:15</a></li>
                        <li><a class="time-slot" href="#">14:30</a></li>
                        <li><a class="time-slot" href="#">14:45</a></li>
                        <li><a class="time-slot" href="#">15:00</a></li>
                        <li><a class="time-slot" href="#">15:15</a></li>
                        <li><a class="time-slot" href="#">15:30</a></li>
                        <li><a class="time-slot" href="#">15:45</a></li>
                        <li><a class="time-slot" href="#">16:00</a></li>
                        <li><a class="time-slot" href="#">16:15</a></li>
                        <li><a class="time-slot" href="#">16:30</a></li>
                        <li><a class="time-slot" href="#">16:45</a></li>
                        <li><a class="time-slot" href="#">17:00</a></li>
                        <li><a class="time-slot" href="#">17:15</a></li>
                        <li><a class="time-slot" href="#">17:30</a></li>
                        <li><a class="time-slot" href="#">17:45</a></li>
                        <li><a class="time-slot" href="#">18:00</a></li>
                        <li><a class="time-slot" href="#">18:15</a></li>
                        <li><a class="time-slot" href="#">18:30</a></li>
                        <li><a class="time-slot" href="#">18:45</a></li>
                        <li><a class="time-slot" href="#">19:00</a></li>
                        <li><a class="time-slot" href="#">19:15</a></li>
                        <li><a class="time-slot" href="#">19:30</a></li>
                        <li><a class="time-slot" href="#">19:45</a></li>
                        <li><a class="time-slot" href="#">20:00</a></li>
                        <li><a class="time-slot" href="#">20:15</a></li>
                        <li><a class="time-slot" href="#">20:30</a></li>
                        <li><a class="time-slot" href="#">20:45</a></li>
                        <li><a class="time-slot" href="#">21:00</a></li>
                        <li><a class="time-slot" href="#">21:15</a></li>
                        <li><a class="time-slot" href="#">21:30</a></li>
                        <li><a class="time-slot" href="#">21:45</a></li>
                        <li><a class="time-slot" href="#">22:00</a></li>
                        <li><a class="time-slot" href="#">22:15</a></li>
                        <li><a class="time-slot" href="#">22:30</a></li>
                        <li><a class="time-slot" href="#">22:45</a></li>
                        <li><a class="time-slot" href="#">23:00</a></li>
                        <li><a class="time-slot" href="#">23:15</a></li>
                        <li><a class="time-slot" href="#">23:30</a></li>
                    </ul>
                    <button type="button" id="book-a-table-btn-confirm">BOOK A TABLE</button>
                </div>`;
});