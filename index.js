// Section 4 JS
const restaurants = {
    "london": `
        <div class="row"> 
             <div class="col-md-6 col-lg-4 col-sm-12 custom-img restaurant-img">
                <img src="assets/rst1.jpg" alt="Restaurant one">
                <div class="restaurant">
                    <h1>LONDON CITY CENTRE</h1>
                    <hr class="custom-hr">
                    <p>Oxford St, London W1B 3AG</p>
                    <p>T: 0343 222 1234</p>
                    <button class="custom-btn section-4-btn"  onclick="location.href='booking.html'">BOOK NOW</button>
                    <button class="custom-btn section-4-btn"  onclick="location.href='menu.html'">VIEW MENU</button>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-sm-12 custom-img restaurant-img">
                <img src="assets/rst2.jpg" alt="Restaurant two">
                <div class="restaurant">
                    <h1>LONDON SOHO</h1>
                    <hr class="custom-hr">
                    <p>88 Wardour St, London W1F 0TH</p>
                    <p>T: 0203 909 0427</p>
                    <button class="custom-btn section-4-btn"  onclick="location.href='booking.html'">BOOK NOW</button>
                    <button class="custom-btn section-4-btn"  onclick="location.href='menu.html'">VIEW MENU</button>
                </div>
              </div>    
              <div class="col-md-6  col-lg-4 col-sm-12 custom-img restaurant-img">
                <img src="assets/rst3.jpg" alt="Restaurant three">
                <div class="restaurant">
                    <h1>LONDON BRIDGE</h1>
                    <hr class="custom-hr">
                    <p>90 Tooley St, London SE1 2TH</p>
                    <p>T: 0207 870 9224</p>
                    <button class="custom-btn section-4-btn"  onclick="location.href='booking.html'">BOOK NOW</button>
                    <button class="custom-btn section-4-btn"  onclick="location.href='menu.html'">VIEW MENU</button>
                </div>
              </div>  
        </div>
        `,
    "manchester": `
        <div class="row"> 
             <div class="col-md-6 col-lg-4 col-sm-12 custom-img restaurant-img">
                <img src="assets/rst4.jpg" alt="Restaurant four">
                <div class="restaurant">
                    <h1>MANCHESTER</h1>
                    <hr class="custom-hr">
                    <p>Emilia's Manchester Stretford</p>
                    <p>30 Davyhulme Rd E, Stretford, Manchester M32 0DW</p>
                    <p>T: 0161 283 3375</p>
                    <button class="custom-btn section-4-btn"  onclick="location.href='booking.html'">BOOK NOW</button>
                    <button class="custom-btn section-4-btn"  onclick="location.href='menu.html'">VIEW MENU</button>
                </div>
              </div>
              <div class="col-md-6  col-lg-4 col-sm-12 custom-img restaurant-img">
                <img src="assets/rst5.jpg" alt="Restaurant five">
                <div class="restaurant">
                    <h1>MANCHESTER ARNDALE</h1>
                    <hr class="custom-hr">
                    <p>Unit 19a, Manchester Arndale, Manchester M4 3AQ</p>
                    <p>T: 0161 669 1869</p>
                    <button class="custom-btn section-4-btn"  onclick="location.href='booking.html'">BOOK NOW</button>
                    <button class="custom-btn section-4-btn"  onclick="location.href='menu.html'">VIEW MENU</button>
                </div>
              </div>
        </div>
        `,
    "leeds": `
        <div class="row"> 
             <div class="col-md-6  col-lg-4 col-sm-12 custom-img restaurant-img">
                <img src="assets/rst6.jpg" alt="Restaurant six">
                <div class="restaurant">
                    <h1>LEEDS</h1>
                    <hr class="custom-hr">
                    <p>27 Albion St, Leeds LS1 5ER</p>
                    <p>T: 0113 518 3749</p>
                    <button class="custom-btn section-4-btn"  onclick="location.href='booking.html'">BOOK NOW</button>
                    <button class="custom-btn section-4-btn"   onclick="location.href='menu.html'">VIEW MENU</button>
                </div>
            </div>
        </div>
        `,
    "birmingham": `
        <div class="row"> 
             <div class="col-md-6 col-lg-4 col-sm-12 custom-img restaurant-img">
                <img src="assets/rst7.jpg" alt="Restaurant seven">
                <div class="restaurant">
                    <h1>BIRMINGHAM</h1>
                    <hr class="custom-hr">
                    <p>Stephenson Pl, Birmingham B2 4BQ</p>
                    <p>Floor 1, Grand Central Shopping Centre</p>
                    <p>T: 0121 803 6869</p>
                    <button class="custom-btn section-4-btn"  onclick="location.href='booking.html'">BOOK NOW</button>
                    <button class="custom-btn section-4-btn"  onclick="location.href='menu.html'">VIEW MENU</button>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-sm-12 custom-img restaurant-img">
                <img src="assets/rst8.jpg" alt="Restaurant eight">
                <div class="restaurant">
                    <h1>BIRMINGHAM VICTORIA SQUARE</h1>
                    <hr class="custom-hr">
                    <p>82 New St, Birmingham B2 4BA</p>
                    <p>T: 0121 387 4148</p>
                    <button class="custom-btn section-4-btn"  onclick="location.href='booking.html'">BOOK NOW</button>
                    <button class="custom-btn section-4-btn"  onclick="location.href='menu.html'">VIEW MENU</button>
                </div>
              </div>
        </div>
        `,
    "liverpool": `
        <div class="row"> 
             <div class="col-md-6 col-lg-4 col-sm-12 custom-img restaurant-img">
                <img src="assets/rst9.jpg" alt="Restaurant nine">
                <div class="restaurant">
                    <h1>LIVERPOOL</h1>
                    <hr class="custom-hr">
                    <p>70 Lord St, Liverpool L2 1TL</p>
                    <p>Floor 0, Liverpool ONE</p>
                    <p>T: 0151 305 5014</p>
                    <button class="custom-btn section-4-btn"  onclick="location.href='booking.html'">BOOK NOW</button>
                    <button class="custom-btn section-4-btn"  onclick="location.href='menu.html'">VIEW MENU</button>
                </div>
            </div>
        </div>
        `,
    "bristol": `
        <div class="row"> 
             <div class="col-md-6 col-lg-4 col-sm-12 custom-img restaurant-img">
                <img src="assets/rst10.jpg" alt="Restaurant ten">
                <div class="restaurant">
                    <h1>BRISTOL</h1>
                    <hr class="custom-hr">
                    <p>Bristol (Cabot Circus)</p>
                    <p>Shopping Centre, SU32B, Concorde St, Bristol BS1 3BF</p>
                    <p>T: 0117 374 3049</p>
                    <button class="custom-btn section-4-btn"  onclick="location.href='booking.html'">BOOK NOW</button>
                    <button class="custom-btn section-4-btn"  onclick="location.href='menu.html'">VIEW MENU</button>
                </div>
              </div>
        </div>
        `,
};

// Postcode prefixes for each city
const postcodePrefixes = {
    "london": [
        "E", "EC", "N", "NW", "SE", "SW", "W", "WC"
    ],

    "manchester": [
        "M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M11", "M12", "M13", "M14", "M15",
        "M16", "M17", "M18", "M19", "M20", "M21", "M22", "M23", "M24", "M25", "M26", "M27", "M28",
        "M29", "M30", "M31", "M32", "M33", "M34", "M35", "M38", "M40", "M41", "M43", "M44", "M45"
    ],

    "leeds": [
        "LS1", "LS2", "LS3", "LS4", "LS5", "LS6", "LS7", "LS8", "LS9", "LS10",
        "LS11", "LS12", "LS13", "LS14", "LS15", "LS16", "LS17", "LS18", "LS19",
        "LS20", "LS21", "LS22", "LS23", "LS24", "LS25", "LS26", "LS27", "LS28", "LS29"],

    "liverpool": [
        "L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9",
        "L10", "L11", "L12", "L13", "L14", "L15", "L16", "L17", "L18", "L19",
        "L20", "L21", "L22", "L23", "L24", "L25", "L26", "L27", "L28", "L29",
        "L30", "L31", "L32", "L33", "L34", "L35", "L36", "L37", "L38", "L39",
        "L40"
    ],

    "birmingham": [
        "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9",
        "B10", "B11", "B12", "B13", "B14", "B15", "B16", "B17", "B18", "B19",
        "B20", "B21", "B22", "B23", "B24", "B25", "B26", "B27", "B28", "B29",
        "B30", "B31", "B32", "B33", "B34", "B35", "B36", "B37", "B38", "B40",
        "B42", "B43", "B44", "B45", "B46", "B47", "B48", "B49", "B50", "B60",
        "B61", "B62", "B63", "B64", "B65", "B66", "B67", "B68", "B69", "B70",
        "B71", "B72", "B73", "B74", "B75", "B76", "B77", "B78", "B79"
    ],

    "bristol": [
        "BS1", "BS2", "BS3", "BS4", "BS5", "BS6", "BS7", "BS8", "BS9",
        "BS10", "BS11", "BS13", "BS14", "BS15", "BS16", "BS20", "BS21", "BS22",
        "BS23", "BS24", "BS30", "BS31", "BS32", "BS34", "BS35", "BS36", "BS37",
        "BS39", "BS40", "BS41", "BS48", "BS49"
    ]
};

const input = document.getElementById('location-input');
const suggestions = document.getElementById('suggestions');
const resultDiv = document.getElementById('result');
if (input && suggestions && resultDiv) {
    input.addEventListener('input', async function () {
        const query = input.value.trim();
        suggestions.innerHTML = '';

        if (!query) {
            suggestions.style.display = "none"; // hide if empty
            return;
        }

        suggestions.style.display = "block"; // show list when typing

        // Fetch or generate suggestions here
    });
    // Autocomplete for postcodes using Postcodes.io
    input.addEventListener('input', async function () {
        const query = input.value.trim();
        suggestions.innerHTML = '';

        if (!query) return;

        // Only fetch suggestions if input contains numbers (likely postcode)
        if (/\d/.test(query)) {
            try {
                const res = await fetch(`https://api.postcodes.io/postcodes?q=${encodeURIComponent(query)}`);
                const data = await res.json();

                if (data.status === 200 && data.result) {
                    data.result.slice(0, 5).forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = `${item.postcode} (${item.admin_district})`;
                        li.style.cursor = 'pointer';
                        li.addEventListener('click', () => {
                            input.value = item.postcode;
                            suggestions.innerHTML = '';
                        });
                        suggestions.appendChild(li);
                    });
                }
            } catch (err) {
                console.error(err);
            }
        }
    });

    // Form submission
    document.getElementById('location-form').addEventListener('submit', async function (e) {
        e.preventDefault();
        suggestions.innerHTML = '';
        const userInput = input.value.trim().toUpperCase();
        resultDiv.innerHTML = 'Searching...';

        let cityKey = null;

        // Check if input is a city
        const cityInput = userInput.toLowerCase();
        if (restaurants[cityInput]) {
            cityKey = cityInput;
        } else if (/\d/.test(userInput)) {
            // Check postcode prefixes
            for (const [city, prefixes] of Object.entries(postcodePrefixes)) {
                if (prefixes.some(prefix => userInput.startsWith(prefix))) {
                    cityKey = city;
                    break;
                }
            }
        }

        // Show results
        if (restaurants[cityKey]) {
            resultDiv.innerHTML = restaurants[cityKey]; // inject full HTML block
        } else {
            resultDiv.innerHTML = `<p>No restaurants found for "${userInput}"</p>`;
        }
    });
};
// Book a table 
function myFunction() {
    var x = document.getElementById("book-a-table");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

 document.getElementById("book-a-table-btn").addEventListener("click", function(){
    document.getElementById("book-a-table").innerHTML=`
            <div class="container">
            <a class="navbar-brand custom-brand" href="index.html">
            <h1><span class="logo-left">EMILIA'S </span><span class="logo-right">della roma</span></h1>
            <p class="subtitle">La Tavola & Enoteca</p>
            </a>
            <button class="nav-link" id="book-a-table-btn" onclick="myFunction()"><img src="./assets/closing-btn.png" alt="close menu"></button>
                <div class="row">
                    <div class="col-sm-12">
                        <p>If you would like to make a booking directly click <span>here</span>, for any other enquiries
                            fill in the form below</p>
                    </div>
                    <div class="col-sm-2">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">FIRST NAME</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="First Name">
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-2">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">LAST NAME</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Last Name">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-2">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">EMAIL ADDRESS</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Email Address">
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-12 col-md-2">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">CONTACT NUMBER</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="+447874083967">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <p>RESTAURANT</p>
                        <div class="dropdown" style="width: 100%;">
                            <button id="dropdownMenuButton" class="btn btn-secondary dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false" style="width: 100%;">
                                SELECT A RESTAURANT
                            </button>
                            <ul class="dropdown-menu" id="dropdown" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">LONDON</a></li>
                                <li><a class="dropdown-item" href="#">LEEDS</a></li>
                                <li><a class="dropdown-item" href="#">BIRMINGHAM</a></li>
                                <li><a class="dropdown-item" href="#">BRISTOL</a></li>
                                <li><a class="dropdown-item" href="#">LIVERPOOL</a></li>
                                <li><a class="dropdown-item" href="#">MANCHESTER</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-4">
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">ENQUIRY</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="15" placeholder="Enter your enquiry"></textarea>
                            </div>
                            <button class="">SUBMIT</button><br>
                        </form>
                    </div>
                </div>

            </div>`;
});


//Load common footer html code across different pages 
fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });
const video = document.getElementById("bg-video");
const soundBtn = document.getElementById("sound-toggle");
soundBtn.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false;
        soundBtn.textContent = "🔊 PLAYING: SOUND OF EMILIA'S";
    } else {
        video.muted = true;
        soundBtn.textContent = "🔇PLAY: SOUND OF EMILIA'S";
    }
});