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
                        <h2 class="pb-2 border-bottom" id="dividere">DA DIVIDERE</h2>
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
                        <h2 class="pb-2 border-bottom" id="antipasti">ANTIPASTI</h2>
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
                        <!-- PASTA & RISOTTO -->
                        <h2 class="pb-2 border-bottom" id="pasta">PASTA & RISOTTO</h2>
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
                        <!-- PIZZA NAPOLETANA -->
                        <h2 class="pb-2 border-bottom" id="pizza">PIZZA NAPOLETANA</h2>
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
                        <h2 class="pb-2 border-bottom" id="secondi">SECONDI </h2>
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
                        <h2 class="pb-2 border-bottom" id="insalate">INSALATE</h2>
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
                        <h2 class="pb-2 border-bottom" id="contorni">CONTORNI</h2>
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

                                <h2 class="fs-2">Spinaci (5.50)</h2>
                                <p>vg</p>
                                <p>Garlic baby spinach</p>

                            </div>
                        </div>
                    `;
  });
  // show dessert items
  document.getElementById("show-desserts").addEventListener("click", function(){
    document.getElementById("all-menu-items").innerHTML=`
                        <h2 class="pb-2 border-bottom" id="dolci">DOLCI</h2>
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
                        <h2 class="pb-2 border-bottom" id="amore">AMORE AMALFI</h2>
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

//   Show wine list 
  document.getElementById("show-wine").addEventListener("click", function(){
    document.getElementById("all-menu-items").innerHTML=`
                        <h2 class="pb-2 border-bottom" id="sparkling">SPARKLING</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Tempio Prosecco Extra Dry</h2>
                                <p class="fs-2">125Ml (10.00)</p>
                                <p class="fs-2">Bottle (35.00)</p> <br>

                                <h2 class="fs-2">Prosecco Rose Serena 1881</h2>
                                <p class="fs-2">125Ml (10.00)</p>
                                <p class="fs-2">Bottle (38.00)</p> <br>

                                <h2 class="fs-2">Marchese Antinori Franciacorta Cuvee Royale</h2>
                                <p class="fs-2">Bottle (60.00)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Casa Caneval Prosecco Extra Dry</h2>
                                <p class="fs-2">Bottle (35.90)</p> <br>

                                <h2 class="fs-2">Rotari Brut Rose, Mezzacorona</h2>
                                <p class="fs-2">Bottle (60.00)</p> <br>

                                <h2 class="fs-2">Steinbock Alcohol Free Riesling Sparkling</h2>
                                <p class="fs-2">Bottle (29.00)</p>
                            </div>
                        </div>
                        <h2 class="pb-2 border-bottom" id="champagne">CHAMPAGNE</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Castelnau Brut</h2>
                                <p class="fs-2">125Ml (16.00)</p>
                                <p class="fs-2">Bottle (61.50)</p> <br>

                                <h2 class="fs-2">Moet Imperial Brut</h2>
                                <p class="fs-2">Bottle (98.00)</p> <br>

                                <h2 class="fs-2">Laurent-Perrier Rose</h2>
                                <p class="fs-2">Bottle (140.00)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Veuve Clicquot Yellow Label Brut</h2>
                                <p class="fs-2">Bottle (35.90)</p> <br>

                                <h2 class="fs-2">Dom Perignon</h2>
                                <p class="fs-2">Bottle (60.00)</p>
                            </div>
                        </div>
         
                        <h2 class="pb-2 border-bottom" id="white-wine">WHITE WINE</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Regaleali Bianco, Tasca</h2>
                                <p class="fs-2">175Ml (16.00)</p>
                                <p class="fs-2">Bottle (41.50)</p> <br>

                                <h2 class="fs-2">Vermentino Gallura</h2>
                                <p class="fs-2">Bottle (38.00)</p> <br>

                                <h2 class="fs-2">Rocca Leoni Falanghina, Villa Mtalide</h2>
                                <p class="fs-2">Bottle (40.00)</p>

                                <h2 class="fs-2">Pecorino Vellodoro, Umani Ronchi</h2>
                                <p class="fs-2">Bottle (50.00)</p>

                                <h2 class="fs-2">Cortese Nostru Carricante Irc</h2>
                                <p class="fs-2">Bottle (40.00)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Verdicchio Cast Buscareto</h2>
                                <p class="fs-2">Bottle (35.90)</p> <br>

                                <h2 class="fs-2">Sassolino Bianco</h2>
                                <p class="fs-2">Bottle (30.00)</p>

                                <h2 class="fs-2">Stemmari Grillo, Sicilia</h2>
                                <p class="fs-2">Bottle (40.00)</p>

                                <h2 class="fs-2">Roycello, Salentofiano, Tormaresca</h2>
                                <p class="fs-2">Bottle (80.00)</p>

                                <h2 class="fs-2">Tenuta Altavilla Greco Di Tufo, Villa Matilde</h2>
                                <p class="fs-2">Bottle (50.00)</p>
                            </div>
                        </div>
                 
                        <h2 class="pb-2 border-bottom" id="italian-wine">CLASSIC ITALIAN WHITE</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Gavi Villa Sparina</h2>
                                <p class="fs-2">175Ml (16.00)</p>
                                <p class="fs-2">Bottle (41.50)</p> <br>

                                <h2 class="fs-2">Afix Riesling, Jermann</h2>
                                <p class="fs-2">Bottle (38.00)</p> <br>

                                <h2 class="fs-2">Visitini Friulano Irc</h2>
                                <p class="fs-2">Bottle (40.00)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Trovati Igt Pinot Grigio, Mezzacronoa</h2>
                                <p class="fs-2">Bottle (35.90)</p> <br>

                                <h2 class="fs-2">Terre Del Noce Chardonnay Delle Dolomiti</h2>
                                <p class="fs-2">Bottle (30.00)</p>

                                <h2 class="fs-2">Sauvignon Blanc Basaltik</h2>
                                <p class="fs-2">Bottle (40.00)</p>
                            </div>
                        </div>
          
                        <h2 class="pb-2 border-bottom" id="red-wine">RED WINE</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Cannonau Sard Cort</h2>
                                <p class="fs-2">175Ml (18.00)</p>
                                <p class="fs-2">Bottle (41.50)</p> <br>

                                <h2 class="fs-2">Core Rosso Montevetrano</h2>
                                <p class="fs-2">Bottle (38.00)</p> <br>

                                <h2 class="fs-2">Vialetto Negroamaro</h2>
                                <p class="fs-2">Bottle (40.00)</p> <br>

                                <h2 class="fs-2">Angelo Montepulciano D'Abruzzo</h2>
                                <p class="fs-2">Bottle (58.00)</p> <br>

                                <h2 class="fs-2">Tenuta Conte Ciro Rosso Class</h2>
                                <p class="fs-2">Bottle (48.00)</p> <br>

                                <h2 class="fs-2">Ducale Salice Salentino Riserva</h2>
                                <p class="fs-2">Bottle (38.00)</p> <br>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Stemmari Passiata</h2>
                                <p class="fs-2">Bottle (35.90)</p> <br>

                                <h2 class="fs-2">Jnoir, Fattoria Mancini</h2>
                                <p class="fs-2">Bottle (30.00)</p>

                                <h2 class="fs-2">Codici Masserie Primitivo</h2>
                                <p class="fs-2">Bottle (60.00)</p>

                                 <h2 class="fs-2">Ghiaia Nera Nerello Mascalese, Tascante</h2>
                                <p class="fs-2">Bottle (30.00)</p>

                                <h2 class="fs-2">L'Atto Aglianico, Cantine Del Notaio</h2>
                                <p class="fs-2">Bottle (40.00)</p>
                            </div>
                        </div>
                   
                        <h2 class="pb-2 border-bottom" id="italian-rose">CLASSIC ITALIAN ROSE</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Bardolino Pietro</h2>
                                <p class="fs-2">175Ml (18.00)</p>
                                <p class="fs-2">Bottle (41.50)</p> <br>

                                <h2 class="fs-2">Bonacosta Valpolicella Classico, Masi</h2>
                                <p class="fs-2">Bottle (38.00)</p> <br>

                                <h2 class="fs-2">Colombini Brunello Di Mont</h2>
                                <p class="fs-2">Bottle (40.00)</p> <br>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">La Piuma Chianti</h2>
                                <p class="fs-2">Bottle (35.90)</p> <br>

                                <h2 class="fs-2">Costasera Amarone Classico, Masi</h2>
                                <p class="fs-2">Bottle (70.00)</p>

                                <h2 class="fs-2">Vie Cave Malbec, Fattoria Aldobrandesca</h2>
                                <p class="fs-2">Bottle (60.00)</p>
                            </div>
                        </div>
               
                        <h2 class="pb-2 border-bottom" id="rose">ROSE</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Pieno Sud Rosato Igt Puglia</h2>
                                <p class="fs-2">175Ml (18.00)</p>
                                <p class="fs-2">Bottle (41.50)</p> <br>

                                <h2 class="fs-2">Calafuria Neroamaro Rosato, Tormaresca</h2>
                                <p class="fs-2">Bottle (38.00)</p> <br>

                                <h2 class="fs-2">Whispering Angel, Cotes De Provence Rose</h2>
                                <p class="fs-2">Bottle (40.00)</p> <br>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Sessola Pinot Grigio Rose</h2>
                                <p class="fs-2">Bottle (35.90)</p> <br>

                                <h2 class="fs-2">M De Minuty Cotes De Provence Rose</h2>
                                <p class="fs-2">Bottle (70.00)</p>
                            </div>
                        </div>
                        `;
  });
  //   Show cocktails
  document.getElementById("show-cocktails").addEventListener("click", function(){
    document.getElementById("all-menu-items").innerHTML=`
                        <h2 class="pb-2 border-bottom" id="aperitivo">APERITIVO</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Negroni (11.00)</h2>
                                <p class="fs-2">Malfy Originale gin, Campari & Hotel Starlino Rosso</p><br>

                                <h2 class="fs-2">Aperol Spritz (11.00)</h2>
                                <p class="fs-2">Aperol with Prosecco & soda</p><br>

                                <h2 class="fs-2">Biscotti Spritz (11.00)</h2>
                                <p class="fs-2">Malfy Arancia, amaretto, lemon, soda & Prosecco</p><br>

                                <h2 class="fs-2">Rosa Gin Fizz (11.00)</h2>
                                <p class="fs-2">Malfy Rosa Gin, lemon, cranberry, orange bitters & soda</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Campari Spritz (10.00)</h2>
                                <p class="fs-2">Campari with Prosecco & soda (35.90)</p> <br>

                                <h2 class="fs-2">Hugo Spritz  (12.00)</h2>
                                <p class="fs-2">Hotel Starlino elderflower with Prosecco & soda</p> <br>

                                <h2 class="fs-2">Italicus Spritz  (11.00)</h2>
                                <p class="fs-2">Italicus Bergamot liqueur & Prosecco</p>
                            </div>
                        </div>
                        <h2 class="pb-2 border-bottom" id="low-alcohol">LOW ALCOHOL</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                 <h2 class="fs-2">The Peach Thing  (12.00)</h2>
                                 <p class="fs-2">Nectarine apéritif, Cocchi Rosa & Martini Bianco with Fever-Tree tonic</p> 
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Melonade & Tonic  (8.00)</h2>
                                <p class="fs-2">Melonade melon apéritif with Fever-Tree tonic</p>
                            </div>
                        </div>
         
                        <h2 class="pb-2 border-bottom" id="zero-alcohol">ZERO ALCOHOL</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Born-Again Porn-Star (8.00)</h2>
                                <p class="fs-2">Clean G non-alcoholic aperitif, passion fruit, pineapple, vanilla & a shot non-alcoholic sparkling wine</p><br>

                                <h2 class="fs-2">Take Me South (8.00)</h2>
                                <p class="fs-2">Mango & pineapple with passion fruit & lime</p><br>

                                <h2 class="fs-2">Crodino Spritz (8.00)</h2>
                                <p class="fs-2">Non-alcoholic aperitivo with orange</p><br>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Raspberry & Hibiscus No-Jito (8.00)</h2>
                                <p class="fs-2">Raspberry, cranberry, lime & dried hibiscus flower</p><br>

                                <h2 class="fs-2">Coastal Spritz (8.00)</h2>
                                <p class="fs-2">Pentire Coastal non-alcoholic aperitif & Light Tonic</p>
                            </div>
                        </div>
                 
                        <h2 class="pb-2 border-bottom" id="signature-classics">SIGNATURE AND CLASSICS</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Cry Me A Riva (10.00)</h2>
                                <p class="fs-2">Absolut watermelon vodka & passion fruit liqueur, raspberries, peach, lemon & cranberry</p><br>

                                <h2 class="fs-2">Margarita (11.00)</h2>
                                <p class="fs-2">AquaRiva Blanco tequila, lime, triple sec & sugar</p><br>

                                <h2 class="fs-2">Espresso Martini (12.00)</h2>
                                <p class="fs-2">Absolut vanilla vodka & Borghetti coffee liqueur with fresh espresso</p><br>

                                <h2 class="fs-2">Don'T Call Me French (11.00)</h2>
                                <p class="fs-2">Absolut Vanilia vodka, nectarine apéritif, blackberry liqueur, pineapple & lemon</p><br>

                                <h2 class="fs-2">Emilia's Spritz (11.00)</h2>
                                <p class="fs-2">Amalfi limoncello with Prosecco, lemon tonic & fresh basil</p><br>

                                <h2 class="fs-2">Porn Star Martini (11.00)</h2>
                                <p class="fs-2">Absolut vanilla vodka with passion fruit liqueur, pineapple, lemon & a shot of Prosecco</p><br>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Violet & Hibiscus Mojito (12.00)</h2>
                                <p class="fs-2">Raspberry, cranberry, lime & dried hibiscus flower</p><br>

                                <h2 class="fs-2">Amalfi Me (11.00)</h2>
                                <p class="fs-2">Raspberry, cranberry, lime & dried hibiscus flower</p><br>

                                <h2 class="fs-2">Spicy Mango Margarita (13.00)</h2>
                                <p class="fs-2">Raspberry, cranberry, lime & dried hibiscus flower</p><br>

                                <h2 class="fs-2">Sgroppino (11.00)</h2>
                                <p class="fs-2">Raspberry, cranberry, lime & dried hibiscus flower</p><br>

                                <h2 class="fs-2">Old Fashioned (11.00)</h2>
                                <p class="fs-2">Raspberry, cranberry, lime & dried hibiscus flower</p>
                                <h2 class="fs-2">Woodford Reserve Bourbon (8.00)</h2>
                                <h2 class="fs-2">Diplomatico Reserva Rum (8.00)</h2>
                            </div>
                        </div>
                        `;
  });

  // Beer and ciders 
  document.getElementById("show-beer&ciders").addEventListener("click", function(){
    document.getElementById("all-menu-items").innerHTML=`
                        <h2 class="pb-2 border-bottom" id="draught">DRAUGHT</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Moretti (11.00)</h2>
                                <p class="fs-2">Udine | 4.6%</p>
                                <p class="fs-2">Half (3.76)</p>
                                <p class="fs-2">Pint (6.80)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Moretti Shandy</h2>
                                <p class="fs-2">Udine | 4.6%</p>
                                <p class="fs-2">Half (4.06)</p>
                                <p class="fs-2">Pint (6.80)</p>
                            </div>
                        </div>
                        <h2 class="pb-2 border-bottom" id="bottles&cans">BOTTLES & CANS</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                 <h2 class="fs-2">Peroni Nastro Azzurro</h2>
                                <p class="fs-2">Pavia | 5.1%</p><br>

                                <h2 class="fs-2">Peroni Nastro Azzurro Capri Citrus</h2>
                                <p class="fs-2">Pavia | 4.2%</p><br>

                                <h2 class="fs-2">Ichnusa Non Filtrata</h2>
                                <p class="fs-2">Sardegna | 5.0%</p><br>

                                <h2 class="fs-2">Beavertown Neck Oil Session Ipa</h2>
                                <p class="fs-2">UK | 4.3%</p><br>

                                <h2 class="fs-2">Rekorderlig Strawberry & Lime</h2>
                                <p class="fs-2">Sweden | 4.0% (500ml)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Peroni Gluten Free</h2>
                                <p class="fs-2">Pavia | 5.1%</p><br>

                                <h2 class="fs-2">Peroni Gran Riserva</h2>
                                <p class="fs-2">Pavia | 6.6% (500ml)</p><br>

                                <h2 class="fs-2">Menabrea</h2>
                                <p class="fs-2">Piemonte | 4.8%</p><br>

                                <h2 class="fs-2">Bulmers Original Cider</h2>
                                <p class="fs-2">UK | 4.5% (500ml)</p><br>

                                <h2 class="fs-2">Moretti Zero</h2>
                                <p class="fs-2">Udine | 0.0%</p>
                            </div>
                        </div>`;
  });
  // Spirits
  document.getElementById("show-spirits").addEventListener("click", function(){
    document.getElementById("all-menu-items").innerHTML=`
                        <h2 class="pb-2 border-bottom" id="gin">GIN</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Malfy Originale</h2>
                                <p class="fs-2">Piemonte | Lime</p>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Malfy Rosa</h2>
                                <p class="fs-2">Piemonte | Pink grapefruit & strawberry</p>
                                <p class="fs-2">25Ml (5.00)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">24Ml Arber Rhubarb</h2>
                                <p class="fs-2">25Ml (5.50)</p><br>

                                <h2 class="fs-2">Bombay Sapphire</h2>
                                <p class="fs-2">25Ml (5.00)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Arber Pineapple</h2>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (9.00)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Malfy Rosa</h2>
                                <p class="fs-2">Piemonte | Lemon & basil</p>
                                <p class="fs-2">25Ml (5.00)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>
                                  
                                <h2 class="fs-2">Malfy Arancia</h2>
                                <p class="fs-2">Piemonte | Orange & pink grapefruit</p>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Arber Rhubarb</h2>
                                <p class="fs-2">50Ml (12.85)</p><br>

                                <h2 class="fs-2">Hendricks</h2>
                                <p class="fs-2">200Ml (2.25)</p><br>
                            </div>
                        </div>
                        
                        <h2 class="pb-2 border-bottom" id="vodka">VODKA</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Finlandia</h2>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Absolut Vanilia</h2>
                                <p class="fs-2">25Ml (5.00)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Belvedere</h2>
                                <p class="fs-2">25Ml (5.00)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Absolut Mango</h2>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Ketel One Citroen</h2>
                                <p class="fs-2">25Ml (5.00)</p>
                                <p class="fs-2">50Ml (10.00)</p><br>

                                <h2 class="fs-2">Grey Goose</h2>
                                <p class="fs-2">25Ml (6.00)</p>
                                <p class="fs-2">50Ml (12.00)</p>
                            </div>
                        </div>
                        
                        <h2 class="pb-2 border-bottom" id="tequila">TEQUILA & MEZCAL</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Aquariva Blanco</h2>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">El Jimador Reposado</h2>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (9.00)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Patron Silver</h2>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Illegal Mezcal</h2>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (10.00)</p>
                            </div>
                        </div>
                        
                        <h2 class="pb-2 border-bottom" id="rum">RUM</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Bacardi Carta Blanca</h2>
                                <p class="fs-2">25Ml (5.75)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Havana 7</h2>
                                <p class="fs-2">25Ml (5.75)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Gosling'S Black Seal</h2>
                                <p class="fs-2">25Ml (5.75)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Diplimatico</h2>
                                <p class="fs-2">25Ml (5.75)</p>
                                <p class="fs-2">50Ml (9.00)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Bacardi Coconut</h2>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Goslings Black Seal</h2>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (10.00)</p><br>

                                <h2 class="fs-2">Bacardi Spiced</h2>
                                <p class="fs-2">25Ml (6.00)</p>
                                <p class="fs-2">50Ml (12.00)</p>
                            </div>
                        </div>
                        
                        <h2 class="pb-2 border-bottom" id="whiskey">WHISKEY</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Jameson</h2>
                                <p class="fs-2">25Ml (5.75)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Maker'S</h2>
                                <p class="fs-2">25Ml (5.75)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Highland Park 12Yr</h2>
                                <p class="fs-2">25Ml (5.75)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Nikka From The Barel</h2>
                                <p class="fs-2">25Ml (5.75)</p>
                                <p class="fs-2">50Ml (9.00)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Jack Daniels</h2>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Woodford</h2>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (10.00)</p><br>

                                <h2 class="fs-2">Laphroaig 10Yr</h2>
                                <p class="fs-2">25Ml (6.00)</p>
                                <p class="fs-2">50Ml (12.00)</p>
                            </div>
                        </div>
                        
                        <h2 class="pb-2 border-bottom" id="cognac">COGNAC</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Courvoisier Vs</h2>
                                <p class="fs-2">25Ml (5.75)</p>
                                <p class="fs-2">50Ml (9.00)</p><br>

                                <h2 class="fs-2">Hennessy Vs</h2>
                                <p class="fs-2">25Ml (5.75)</p>
                                <p class="fs-2">50Ml (9.00)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Remy Vsop</h2>
                                <p class="fs-2">25Ml (5.50)</p>
                                <p class="fs-2">50Ml (9.00)</p>
                            </div>
                        </div>
                        
                        <h2 class="pb-2 border-bottom" id="amari">AMARI</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Amaro Averna</h2>
                                <p class="fs-2">45Ml (6.75)</p><br>

                                <h2 class="fs-2">Cynar</h2>
                                <p class="fs-2">45Ml (6.75)</p><br>

                                <h2 class="fs-2">Vecchio Amaro Del Capo</h2>
                                <p class="fs-2">45Ml (6.75)</p>

                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Amaro Montenegro</h2>
                                <p class="fs-2">45Ml (6.75)</p><br>

                                <h2 class="fs-2">Branca Menta</h2>
                                <p class="fs-2">45Ml (6.75)</p>
                            </div>
                        </div>
                        
                        <h2 class="pb-2 border-bottom" id="liqueurs">LIQUEURS</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Amalfi Limoncello</h2>
                                <p class="fs-2">45Ml (6.75)</p>
                                <p class="fs-2">75Ml (10.75)</p><br>

                                <h2 class="fs-2">Pentire Coastal Non-Alcoholic Liqueur</h2>
                                <p class="fs-2">45Ml (6.75)</p>
                                <p class="fs-2">75Ml (10.75)</p><br>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Cazcabel Coffee Tequila</h2>
                                <p class="fs-2">45Ml (6.75)</p>
                                <p class="fs-2">75Ml (10.75)</p>
                            </div>
                        </div>`;
  });
  // Mineral and juices
  document.getElementById("show-mineral&juices").addEventListener("click", function(){
    document.getElementById("all-menu-items").innerHTML=`
                        <h2 class="pb-2 border-bottom" id="sodas">FRUIT SODAS</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Aranciata</h2>
                                <p class="fs-2">330Ml (3.25)</p><br>
                                <h2 class="fs-2">Pompelmo (Grapefruit)</h2> <br>
                                <h2 class="fs-2">330Ml (4.00)</h2>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Limonata </h2>
                                <p class="fs-2">330Ml (3.25)</p>
                            </div>
                        </div>

                        <h2 class="pb-2 border-bottom" id="juices">JUICES</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Fresh Orange</h2>
                                <p class="fs-2">330Ml (3.25)</p><br>

                                <h2 class="fs-2">Apple</h2>
                                <p class="fs-2">300Ml (3.85)</p><br>

                                <h2 class="fs-2">Cranberry & Raspberry</h2>
                                <p class="fs-2">200Ml (2.25)</p><br>

                                <h2 class="fs-2">Tomato</h2>
                                <p class="fs-2">330Ml (3.25)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Pear</h2>
                                <p class="fs-2">230Ml (3.25)</p><br>

                                <h2 class="fs-2">Pineapple</h2>
                                <p class="fs-2">200Ml (4.85)</p><br>

                                <h2 class="fs-2">Grapefruit</h2>
                                <p class="fs-2">200Ml (2.25)</p><br>

                                <h2 class="fs-2">Mango & Passion Fruit</h2>
                                <p class="fs-2">430Ml (4.25)</p>
                            </div>
                        </div>

                        <h2 class="pb-2 border-bottom" id="tree-range">FEVER TREE RANGE</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Lemonade</h2>
                                <p class="fs-2">200Ml (3.25)</p><br>

                                <h2 class="fs-2">Soda</h2>
                                <p class="fs-2">200Ml (3.85)</p><br>

                                <h2 class="fs-2">Elderflowertonic</h2>
                                <p class="fs-2">200Ml (2.25)</p><br>

                                <h2 class="fs-2">Lighttonic</h2>
                                <p class="fs-2">200Ml (3.25)</p> <br>

                                <h2 class="fs-2">Cucumbertonic</h2>
                                <p class="fs-2">200Ml (3.25)</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Gingerale</h2>
                                <p class="fs-2">200Ml (3.25)</p><br>

                                <h2 class="fs-2">Indiantonic</h2>
                                <p class="fs-2">200Ml (3.85)</p><br>

                                <h2 class="fs-2">Mediterraneantonic</h2>
                                <p class="fs-2">200Ml (2.25)</p><br>

                                <h2 class="fs-2">Acqua Panna</h2>
                                <p class="fs-2">200Ml (3.45)</p> 
                                <p class="fs-2">500Ml (3.35)</p> 
                                <p class="fs-2">750Ml (5.25)</p> 

                                <h2 class="fs-2">Aromatictonic</h2>
                                <p class="fs-2">200Ml (3.25)</p>
                            </div>
                        </div>

                        <h2 class="pb-2 border-bottom" id="water">WATER</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Acqua Panna</h2>
                                <p class="fs-2">200Ml (3.45)</p> 
                                <p class="fs-2">500Ml (3.35)</p> 
                                <p class="fs-2">750Ml (5.25)</p>
                            </div>
                            <div class="feature col">
                                 <h2 class="fs-2">San Pellegrino</h2>
                                <p class="fs-2">500Ml (3.35)</p> 
                                <p class="fs-2">750Ml (5.25)</p>
                            </div>
                        </div>
                        
                        <h2 class="pb-2 border-bottom" id="soft-drinks">SOFT DRINKS</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Coca-Cola</h2>
                                <p class="fs-2">200Ml (3.45)</p> 
                                <p class="fs-2">500Ml (4.35)</p> 

                                <h2 class="fs-2">Diet-Coke</h2>
                                <p class="fs-2">200Ml (3.45)</p> 
                                <p class="fs-2">500Ml (4.35)</p> 

                                <h2 class="fs-2">Appletiser</h2>
                                <p class="fs-2">200Ml (3.45)</p> 
                                <p class="fs-2">500Ml (4.35)</p> 
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Diet Coke</h2>
                                <p class="fs-2">200Ml (3.45)</p> 
                                <p class="fs-2">500Ml (4.35)</p> 

                                <h2 class="fs-2">Coke Zero</h2>
                                <p class="fs-2">200Ml (3.45)</p> 
                                <p class="fs-2">500Ml (4.35)</p> 

                                <h2 class="fs-2">Crodino</h2>
                                <p class="fs-2">200Ml (3.45)</p> 
                            </div>
                        </div>`;
  });

  // Coffee and tea 
  document.getElementById("show-coffee&tea").addEventListener("click", function(){
    document.getElementById("all-menu-items").innerHTML=`
                        <h2 class="pb-2 border-bottom" id="coffee">COFFEE</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Espresso</h2>
                                <p class="fs-2">Small (3.25)</p>
                                <p class="fs-2">Large (3.75)</p> <br>
                                <h2 class="fs-2">Americano (4.00)</h2> <br>
                                <h2 class="fs-2">Flat White(4.00)</h2> <br>
                                <h2 class="fs-2">Mocha (4.00)</h2>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Macchiato</h2>
                                <p class="fs-2">Small (3.85)</p>
                                <p class="fs-2">Large (4.75)</p> <br>
                                <h2 class="fs-2">Cappucino (4.00)</h2> <br>
                                <h2 class="fs-2">Caffe Latte (4.00)</h2> <br>
                                <h2 class="fs-2">Cortado (4.00)</h2>
                            </div>
                        </div>
                        <h2 class="pb-2 border-bottom" id="tea">TEA</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Breakfast Tea (3.25)</h2><br>
                                <h2 class="fs-2">Camomile Tea (4.00)</h2> <br>
                                <h2 class="fs-2">Peppermint Tea (4.00)</h2>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Earl Grey Tea (3.25)</h2><br>
                                <h2 class="fs-2">Green Tea (4.00)</h2> <br>
                                <h2 class="fs-2">Fresh Mint Tea (4.00)</h2>
                            </div>
                        </div>`;
  });

   // Kids menu
  document.getElementById("show-kids-main").addEventListener("click", function(){
    document.getElementById("all-menu-items").innerHTML=`
                        <h2 class="pb-2 border-bottom" id="kids-pasta-menu">PASTA</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Bolognese (8.50)</h2>
                                <p class="fs-2">Beef & tomato ragù</p><br>

                                <h2 class="fs-2">Pomodoro (vg) (8.50)</h2>
                                <p class="fs-2">Baby plum tomato & basil sauce</p><br>

                                <h2 class="fs-2">Sausage Ragu (8.50)</h2>
                                <p class="fs-2">Italian sausage ragu, tomato, smoked provola cheese & fresh basil</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Carbonara (8.50)</h2>
                                <p class="fs-2">Cheesy pasta made with free range eggs & bacon</p><br>

                                <h2 class="fs-2">Pesto (8.50)</h2>
                                <p class="fs-2">Creamy basil pesto made with Italian cheese & tree nuts </p> <br>

                                <h2 class="fs-2">Lasagne (8.50)</h2>
                                <p class="fs-2">Layers of pasta with beef ragù, béchamel sauce, cheese & basil</p>
                            </div>
                        </div> 
                        
                        <h2 class="pb-2 border-bottom" id="kids-pizza-menu">PIZZA</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Mozzeralla & Tomatoes (v) (8.50)</h2>
                                <p class="fs-2">Your base comes with our fresh pizza sauce, mozzarella cheese</p><br>

                                <h2 class="fs-2">Pepperni (9.50)</h2>
                                <p class="fs-2">Your base comes with our fresh pizza sauce, mozzarella cheese</p><br>

                                <h2 class="fs-2">Ham (9.50)</h2>
                                <p class="fs-2">Buffalo mozzarella & baby plum tomatoes </p><br>

                                <h2 class="fs-2">Chicken (9.50)</h2>
                                <p class="fs-2">Buffalo mozzarella & baby plum tomatoes </p><br>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Peppers (v) (8.50)</h2>
                                <p class="fs-2">Your base comes with our fresh pizza sauce, mozzarella cheese</p><br>

                                <h2 class="fs-2">Mushrooms (v) (8.50)</h2>
                                <p class="fs-2">Buffalo mozzarella & baby plum tomatoes </p><br>

                                <h2 class="fs-2">Olives (v) (8.50)</h2>
                                <p class="fs-2">Buffalo mozzarella & baby plum tomatoes </p><br>
                            </div>
                        </div> `;
  });
   // kids menu drinks
   document.getElementById("show-kids-drinks").addEventListener("click", function(){
    document.getElementById("all-menu-items").innerHTML=`
                        <h2 class="pb-2 border-bottom" id="kids-cold-drinks">COLD DRINKS</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Innocent Juicy Water (3.50)</h2>
                                <p class="fs-2">Apples & Mangoes Apples & Strawberries </p><br>

                                <h2 class="fs-2">Pago Fruit Juices  (3.50)</h2>
                                <p class="fs-2">Apple | Pear | Orange | Cranberry | Mango</p><br>

                                <h2 class="fs-2">San Pellegrino Fruit Sodas  (3.50)</h2>
                                <p class="fs-2">Orangeade | Lemonade </p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Mango  (3.50)</h2>
                                <p class="fs-2">Mango, apple, pineapple & passion fruit</p><br>

                                <h2 class="fs-2">Watermelon  (3.50)</h2>
                                <p class="fs-2">Cranberry, watermelon, raspberry & peach</p> <br>

                                <h2 class="fs-2">Strawberry Fields  (3.50)</h2>
                                <p class="fs-2">Strawberry, apple & lime</p>
                            </div>
                        </div> 
                        
                        <h2 class="pb-2 border-bottom" id="kids-warm-drinks">WARM DRINKS</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
                            <div class="feature col">
                                <h2 class="fs-2">Happycino  (4.50)</h2>
                                <p class="fs-2">Frothy whole milk served with a chocolate smile & marshmallows</p>
                            </div>
                            <div class="feature col">
                                <h2 class="fs-2">Hot Cioccololata  (4.50)</h2>
                                <p class="fs-2">Hot chocolate with whole milk, whipped cream & marshmallows</p>
                            </div>
                        </div> `;
  });