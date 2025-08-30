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

  // section 3
  // show main menu items
  document.getElementById("show-main-menu").addEventListener("click", function(){
    document.getElementById("all-menu-items").innerHTML=`
                        <h2 class="pb-2 border-bottom">DA DIVIDERE</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Olive (6.00)</h2>
                                <p>vg</p>
                                <p>Gaeta & Nocellara olives, chilli, garlic & oregano</p> <br>

                                <h2 class="fs-2">Pane</h2>
                                <p>v</p>
                                <p>Hand stretched garlic bread</p>
                                <h2 class="fs-2">Focaccia - Style With Rosemary(7.00)</h2>
                                <h2 class="fs-2">Tomato & Basil (8.00)</h2>
                                <h2 class="fs-2">Mozzarella & Smoked Provola (9.00)</h2> <br>

                                <h2 class="fs-2">Tagliere Misto</h2>
                                <p>All the good things in life... served with a selection of freshly
                                    baked bread: Prosciutto di Parma,
                                    bresaola, mortadella, salame Napoli, mozzarella di bufala, ricotta di bufala,
                                    Pecorino Romano</p>
                                <h2 class="fs-2">Small (14.50)</h2>
                                <h2 class="fs-2">Large (27.00)</h2>

                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Focaccia (6.00)</h2>
                                <p>vg</p>
                                <p>Freshly baked focaccia, extra virgin olive oil & Maldon sea salt</p> <br>

                                <h2 class="fs-2">Scarpetta (11.00)</h2>
                                <p>vg</p>
                                <p>Sweet tomato & garlic sauce, served with freshly baked bread. Using the finest
                                    tomatoes grown
                                    in the rich volcanic soil of San Marzano, the art of 'scarpetta' is to mop up the
                                    sauce until the plate is clean</p> <br>


                                <h2 class="fs-2">Fritto Misto (29.00)</h2>
                                <p>Classic Seafood Appetiser, Lightly Fried & Served To Share. Calamari, wild red
                                    prawns, red mullet, king prawns & whitebait with confit garlic mayonnaise, chilli &
                                    lemon mayonnaise</p>

                            </div>
                        </div>

                        <!-- ANTIPASTI  -->
                        <h2 class="pb-2 border-bottom">ANTIPASTI</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Bruschetta Pomodoro (9.00)</h2>
                                <p>vg</p>
                                <p>Toasted sourdough, vine-ripened tomatoes, garlic, oregano & fresh basil</p> <br>

                                <h2 class="fs-2">Bruschetta Gamberoni (10.20)</h2>
                                <p>Toasted sourdough, pan-fried king prawns & chilli mayonnaise</p> <br>

                                
                                <h2 class="fs-2">Arancini (10.00)</h2>
                                <p>v</p>
                                 <p>Crispy truffle risotto balls, smoked provola & Italian cheese sauce</p> <br>

                                <h2 class="fs-2">Caprese Burrata (12.00)</h2>
                                <p>v</p>
                                 <p>Crispy truffle risotto balls, smoked provola & Italian cheese sauce</p> <br>
                              

                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Calamari (11.00)</h2>
                                <p>Courgette, red pepper & confit garlic aioli</p><br>

                                <h2 class="fs-2">Carpaccio (15.00)</h2>
                                <p>Thinly sliced raw beef, classic Italian dressing, rocket, crispy capers & Pecorino Romano</p><br>

                                <h2 class="fs-2">Capesante (16.00)</h2>
                                <p>Pan-seared king scallops, confit garlic, red chilli & parsley butter</p><br>

                                <h2 class="fs-2">Frittatina Cacio E Pepe (11.00)</h2>
                                <p>Deep fried Neapolitan mac & cheese, smoked provola, Pecorino Romano, black pepper</p><br>
                                

                            </div>
                        </div>
                        <!-- Pasta & Risotto -->
                        <h2 class="pb-2 border-bottom">Pasta & Risotto</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Scialatielli Frutti Di Mare (22.00)</h2>
                                <p>Fresh pasta ribbons with mussels, clams, calamari, tomato, garlic & chilli</p> <br>

                                <h2 class="fs-2">Spaghetti Carbonara (17.00)</h2>
                                <p>Free range eggs, guanciale, Pecorino Romano, cream & flat leaf parsley</p> <br>

                                <h2 class="fs-2">Fettuccine Bolognese (19.00)</h2>
                                <p>Slow-cooked beef ragù, tomato, matured Italian cheese & basil</p> <br>

                                <h2 class="fs-2">Lasagne (16.00)</h2>
                                <p>Slow-cooked beef ragù, tomato, matured Italian cheese & basil</p> <br>

                                <h2 class="fs-2">Risotto Gamberoni (21.00)</h2>
                                <p>Creamy Arborio rice, wild red prawn, king prawns, lemon, samphire & flat leaf parsley</p> <br>

                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Linguine Gamberoni (20.00)</h2>
                                <p>Wild red prawn, king prawns, vine-ripened tomatoes, chilli & garlic</p><br>

                                <h2 class="fs-2">Fettuccine Ortolana (15.00)</h2>
                                <p>vg</p>
                                <p>Mushroom & vegetable ragu, tomato & flat leaf parsley</p><br>

                                <h2 class="fs-2">Rigatoni Arrabbiata (15.00)</h2>
                                <p>vg</p>
                                <p>Slow-cooked tomato & chilli sauce, garlic & flat leaf parsley</p><br>

                                <h2 class="fs-2">Gnocchi Al Ragu (16.00)</h2>
                                <p>Neapolitan sausage ragu, tomato, smoked provola & fresh basil</p><br>


                            </div>
                        </div>
                        <!-- Pizza Napoletana -->
                        <h2 class="pb-2 border-bottom">Pizza Napoletana</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Diavola (22.00)</h2>
                                <p>San Marzano tomato, spianata Calabrese spicy salami, 'nduja, mozzarella, pickled hot peppers, fresh chillies & flat leaf parsley</p> <br>

                                <h2 class="fs-2">Capricciosa (17.00)</h2>
                                <p>San Marzano tomato, chestnut mushrooms, Italian roast ham, mozzarella & crispy Leccino olives</p> <br>

                                <h2 class="fs-2">Calzone (19.00)</h2>
                                <p>Folded pizza stuffed with ricotta, San Marzano tomato, mozzarella & salami Napoli</p> <br>

                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Prosciutto Di Parma (20.00)</h2>
                                <p>White base, DOP Parma ham, Italian cheese & truffle cream, rocket & Pecorino Romano</p><br>

                                <h2 class="fs-2">Margherita (15.00)</h2>
                                <p>San Marzano tomato, mozzarella, tomato & fresh basil</p>
                            </div>
                        </div>
                        <!-- Secondi -->
                        <h2 class="pb-2 border-bottom">SECONDI </h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Tonno Grigliato (22.00)</h2>
                                <p>Grilled yellow fin tuna, Neapolitan peperonata, olives, capers & pine nuts</p> <br>

                                <h2 class="fs-2">Spiedini Di Pesce (17.00)</h2>
                                <p>Grilled seafood skewers; line caught tuna, king scallops, king prawns, with courgette, basil, chilli & lemon</p> <br>

                                <h2 class="fs-2">Polpette (16.00)</h2>
                                <p>Folded pizza stuffed with ricotta, San Marzano tomato, mozzarella & salami Napoli</p> <br>

                                <h2 class="fs-2">Pollo Parmigiana (18.00)</h2>
                                <p>Crispy fried breaded chicken, mozzarella, fresh basil & tomato spaghetti</p> <br>

                                 <h2 class="fs-2">Tagliata Di Manzo (13.00)</h2>
                                <p>Grilled 225g Sirloin steak, semi dried tomato, rocket, aged balsamic, Parmigiano Reggiano</p> <br>

                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Branzino (20.00)</h2>
                                <p>Pan-fried sea bass, tomato, black olive, lemon & basil</p><br>
                                
                                <h2 class="fs-2">Merluzzo (15.00)</h2>
                                <p>Atlantic cod fillet, spicy Calabrian sausage & tenderstem broccoli Can be served without pork</p>

                                <h2 class="fs-2">Parmigiana Melanzane (15.00)</h2>
                                <p>v</p>
                                <p>Fried layers of aubergine, tomato, smoked provola, mature Italian cheese & basil pesto</p>

                                <h2 class="fs-2">Pollo Alla Griglia (15.00)</h2>
                                <p>Grilled chicken breast, Amalfi lemon, rosemary, garlic, rocket</p>

                                <h2 class="fs-2">Fillet 225G (15.00)</h2>
                                <p>British native breed, served with fries and peppercorn sauce</p>

                            </div>
                        </div>
                        <!-- Secondi -->
                        <h2 class="pb-2 border-bottom">INSALATE</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Caesar (22.00)</h2>
                                <p>Chargrilled chicken, gem lettuce, Parmesan, pancetta, anchovies & garlic sourdough croutons *A Lighter Caesar Dressing Is Available On Request</p> <br>

                                <h2 class="fs-2">Burrata (17.00)</h2>
                                <P>v</P>
                                <p>Grilled seafood skewers; line caught tuna, king scallops, king prawns, with courgette, basil, chilli & lemon</p> <br>

                                <h2 class="fs-2">Barbabietola (16.00)</h2>
                                <P>v</P>
                                <p>Salt baked heritage beetroot, ricotta, Italian leaves, chopped roasted hazelnut & Italian cheese dressing</p> <br>

                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Tricolore (20.00)</h2>
                                 <p>v</p>
                                <p>Buffalo mozzarella, heritage mixed variety tomatoes, avocado, basil pesto & fresh basil</p><br>
                                
                                <h2 class="fs-2">Prosciutto (15.00)</h2>
                                <p>Parma ham, buffalo mozzarella, Parmesan, Italian leaves, spinach, semi-dried tomatoes, honey mustard dressing & apple & balsamic glaze</p> <br>

                                <h2 class="fs-2">Arancia (15.00)</h2>
                                <p>vg</p>
                                <p>Orange, fennel, Italian leaves, citrus dressing, black olive crumb</p>

                            </div>
                        </div>
                        <!-- Contorni -->
                        <h2 class="pb-2 border-bottom">CONTORNI</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Patatine Fritte (5.00)</h2>
                                <P>V</P>
                                <p>Potato fries</p> <br>
                                <h2>Add truffle & Pecorino (1.75)</h2>

                                <h2 class="fs-2">Zucchine Fritte (5.00)</h2>
                                <P>V</P>
                                <p>Courgette fries</p> <br>

                                <h2 class="fs-2">Insalata Mista (5.00)</h2>
                                <P>vg</P>
                                <p>Mixed leaves, tomatoes, cucumber & vinaigrette</p> <br>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Patate Al Forno (5.00)</h2>
                                 <p>Roast potatoes & onions, garlic, rosemary</p> <br>

                                <h2 class="fs-2">Broccoli (5.00)</h2>
                                <p>vg</p>
                                <p>Tenderstem, chilli & garlic</p> <br>

                                <h2 class="fs-2">Spinaci (5.00)</h2>
                                <p>vg</p>
                                <p>Garlic baby spinach</p>

                            </div>
                        </div>
                    `;
  });
  // show dessert items
  document.getElementById("show-desserts").addEventListener("click", function(){
    document.getElementById("all-menu-items").innerHTML=`
                        <h2 class="pb-2 border-bottom">DOLCI</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Panna Cotta (9.00)</h2>
                                <p>Amalfi lemon cream, berry compote & amaretti biscuits</p> <br>
                                <h2 class="fs-2">Semifreddo (10.00)</h2>
                                <p>v</p>
                                <p>Chocolate & amaretto iced parfait, white chocolate, hazelnut brittle & Amarena cherries</p> <br>
                                <h2 class="fs-2">Affogato (8.00)</h2>
                                <p>v</p>
                                <p>Amaretti, fresh espresso & vanilla ice cream</p> <br>
                                <h2 class="fs-2">Gelati E Sorbetti (8.50)</h2>
                                <p>Your choice of 3 scoops, served with a mini almond wafer cone</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Tiramisú (9.00)</h2>
                                <p>Coffee, amaretto soaked sponge, mascarpone & cocoa powder</p>
                                <h2 class="fs-2">Tortino Al Cioccolato (10.00)</h2>
                                <p>v</p>
                                <p>Warm chocolate fondant, chocolate sauce, vanilla ice cream & crushed amaretti</p> <br>
                                <h2 class="fs-2">Cioccolatini (7.00)</h2>
                                <p>v</p>
                                <p>Chocolate ganache flavoured with Frangelico</p>
                            </div>
                        </div>

                        <!-- Amore Amalfi -->
                        <h2 class="pb-2 border-bottom">AMORE AMALFI</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Zeppola (9.00)</h2>
                                <p>v</p>
                                <p>The Queen of Neapolitan pastries, a soft choux bun, with vanilla cream & Amarena cherry</p> <br>
                                <h2 class="fs-2">Tiramisu Al Pistacchio (10.20)</h2>
                                <p>Pistachio, coffee, amaretto soaked sponge & mascarpone</p> <br>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Delizia Al Limone (11.00)</h2>
                                <p>v</p>
                                <p>Our twist on the signature Amalfi coast dessert; limoncello & mascarpone cream filling, vanilla sponge, soft lemon centre</p><br>
                            </div>
                        </div>`;
  });