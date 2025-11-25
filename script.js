const listItems = [
  {
    "name": "Blommigt tyg",
    "id": "BlommigtTyg",
    "description": "Ett blommigt viskostyg",
   "unit": "1 meter",
    "image": "https://overgrownemo.files.wordpress.com/2015/09/image3.jpeg",
    "price": 200,
    "valuta": "SEK",
  },
  {
    "name": "Tråd",
    "id": "tråd",
    "description": "Röd tråd från Gütermann, 500 m",
    "unit": "Styckpris",
    "image":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSyXKf2-kU2d7ofHFMT3sSBQEtQlGc5Lm5bg&usqp=CAU",
    "price": 70,
    "valuta": "SEK",
  },
  {
    "name": "Knappar",
    "id": "knappar",
    "description": "En förpackning av 10 knappar, 20mm* 20mm",
    "unit": "Förpackning",
    "image":
      "https://images.fyndiq.se/images/f_auto/t_600x600/prod/001392bb085d4734/9e99f8f2aa8a/100-knappar-11-mm",
    "price": 45,
    "valuta": "SEK",
  },
  {
    "name": "Bomull",
    "id": "bomull",
    "description": "Bomull för stoppning, 1 kg",
    "unit": "Kilopris",
    "image":
      "https://cdn11.bigcommerce.com/s-2xpiua6uup/images/stencil/640w/products/29796/5389/1568884989__27790.1657728527.jpg?c=1",
    "price": 150,
    "valuta": "SEK",
  },
  {
    "name": "Symaskin",
    "id": "symaskin",
    "description": "Symaskin av märket Singer",
    "unit": "Styckpris",
    "image":
      "https://www.netonnet.se/GetFile/ProductImagePrimary/hem-fritid/kladvard/symaskiner/singer-2250(209835)_265218_2_Normal_Large.webp",
    "price": 1600,
    "valuta": "SEK",
  },
];
/* Ovanför har vi deklarerat en objektvariabel med namnet listItems. Den skapar en array med fem objekt där varje objekt har attributnamnen name, id, descripition, unit, image, price och valuta. */

let inköpslista = {};
/* Vi deklarerar en tom variabel som kommer återanvändas flera gånger i koden. Det är för att vi ska kunna justera datan och de funktioner som variabeln innehåller och kontinuerligt kunna uppdatera innehållet. Funkar som en container som går att fylla på utan att råka overskriva eller radera annan kod. */
function initShoppingList() {
  for (let listItem of listItems) {
    inköpslista[listItem.name] = 0;
  }
}
/* Vi skapar en funktion som består av en for of loop. Loopen kör igenom alla name-boxar inuti listItem och ger dem värdet 0 */

function renderShoppingList() {
    let tbody = document.querySelector("#inköpslista > tbody");
    tbody.innerHTML = "";
    for (let listItem of listItems) {
      let row = tbody.insertRow(-1);
      let cellName = row.insertCell(-1);
      let cellAmount = row.insertCell(-1);
      let cellprice = row.insertCell(-1);
      let itemRemove = row.insertCell(-1); 
      let amount = inköpslista[listItem.name];
      cellName.textContent = listItem.name;
      cellAmount.textContent = amount;
      cellprice.textContent = amount * listItem.price;
      let removeButton = document.createElement("button"); 
      removeButton.innerHTML = '<i class="bi bi-trash"></i>'; 
      removeButton.addEventListener("click", function() { 
        inköpslista[listItem.name] = 0; 
        renderShoppingList(); 
      });
      itemRemove.appendChild(removeButton);
    }
  }  
/* Vi skapar en funktion för att skapa kolumner för namn, antal, pris och en ny kolumnrad. Vi deklarerar tbody genom att hämta ID:t inköpslista och sedan gå in längre och hämta taggen tbody. Vi använder innerHTML för att göra tbody till en tom sträng. Vi fyller sedan den med rader/celler för att få in informationen om varje produkt som ska vara med på sidan. Sedan fyller vi i informationen med metoden textContent. Vi skapar även en knapp för att kunna ta bort alla varor i en enskild rad, stylar den med bootstrap, lägger till en eventlistener och använder appendchild för att lägga in knappen i itemRemove. Eftersom det här görs inom en for of loop kommer koden ske för varje objekt i vår listLitems. */

function renderItems() {
    const template = `
      <div class="row">
          <div class="col-sm-3 col-md-4">
              <img src="path/to/image1" alt="image1 description">
          </div>
          <div class="col-sm-9 col-md-8">
              <div class="info d-flex flex-column">
                  <div>
                      <span class="name"></span>
                          <span class="plus float-end p-2" title="Lägg till i varukorg">
                          <i class="bi bi-plus-square"></i>
                          </span>
                          <input id="amountInput" type="number" class="no-arrows amount float-end p-2" min="0" value="1" data-listItem="listItem.name"> 
                      <span class="minus float-end p-2" title="Ta bort">
                      <i class="bi bi-dash-circle"></i>
                      </span>
                  </div>
                  <span class="price"></span>
                  <span class="valuta"></span>
                  <div class="unit"></div>
                  <div class="description"></div>
              </div>
          </div>
      </div>
      `;
/* Här har vi skapat en funktion där vi lagt in en template literal för att skapa en HTML-sträng som vi sedan använder för att rendera listan med våra produkter i listItems. Vi har variabler och uttryck i strängen för att skapa dynamiska värden för varje produkt som finns i listan. Stylingen sker med bootstrap och templaten används längre ner i funktionen i en loop där the template literal skrivs in med hjälp av innerHTML. */

  function increment(name, input) {
    inköpslista[name] += parseInt(input.value);
    renderShoppingList();
  }
/* Vi skapar en funktion, definerar den till increment och med name och input som argument. Funktionen tar värdet från vårt inputfält adderar det till shoppinglist. Den här funktionen är kopplad till plus knappen längre ned i koden.   */


  function decrement(name, input) {
    if (inköpslista[name] > 0) {
      inköpslista[name] -= parseInt(input.value);
      if (inköpslista[name] < 0) {
        inköpslista[name] = 0;
      }
      renderShoppingList(); 
    }
  }
/* Den här funktionen är kopplad till minus knappen längre ned i koden. Den består av två if-satser, den första säger att om inköpslistan är större än noll så ska värdet från inpultfältet subtraheras med det angivna antalet. Den andra if-satsen säger att om om inköpslistans värde är lägre än noll så ska bara noll skrivas ut (detta för att det inte ska bli minus av antal produkter eller pris i shoppinglistan). Slutligen kallar den på renderShoppingList funktionen. */


  const container = document.querySelector("#list_items");
  for (let listItem of listItems) {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = template;
    item.querySelector("img").src = listItem.image;
    item.querySelector(".name").textContent = listItem.name;
    item.querySelector(".price").textContent = listItem.price;
    item.querySelector(".valuta").textContent = listItem.valuta;
    item.querySelector(".unit").textContent = listItem.unit;
    item.querySelector(".description").textContent = listItem.description;
    let amountInput = item.querySelector(".amount");
    amountInput.dataset.listItem = listItem.name;
    amountInput.addEventListener("change", function(event) {
      let newAmount = parseInt(event.target.value);
      updateShoppingList(listItem.name, newAmount);
    });
    /* Vi deklarerar variabeln container som hämtar ID:t list_items från HTML-dokumentet. Sen skapar vi en for of loop som deklarerar item där en div skapas. Vi kopplar div-en till CSS genom classList.add() och kan därigenom ändra stylingen på containern. Därefter skriver vi över item genom innerHTML med vår skapade template literal. Sedan hämtar vi alla våra attributnamn med querySelector. Det gör att varje objekts bild/namn/pris/valuta/enhet/beskrivning skrivs ut på sidan. amountInput.dataset hämtar datan från inputfältet och lagrar det i inköpslistan. Vi lägger till en addEventListener med change som reagerar på när värdet ändras i inputfältet. När change-eventet aktiveras skapas funktionen som kommer därefter. Den funktionen hämtar det nya värdet med hjälp av event.target.value och deklarerar det. Det nya värdet läggs till och uppdaterar inköpslistan. */

    item.querySelector(".plus").addEventListener("click", function () {increment(listItem.name, amountInput
      )});
    item.querySelector(".minus").addEventListener("click", function () {decrement(listItem.name, amountInput
        )});
    container.appendChild(item);
    /* Vi hämtar plus och minusknapparna och ger dem en klickfunktion med addEventListener. Med amountInput ser vi till att det inskrivna antalet läggs till i shoppinglistan. */
  }
}

function updateSummary() {
  let totalAmount = 0;
  let totalPrice = 0;
  for (let listItem of listItems) {
    totalAmount += inköpslista[listItem.name];
    totalPrice += inköpslista[listItem.name] * listItem.price;
  }
  let checkBox = document.getElementById("checkbox");
  if (checkBox.checked == true) {
    totalPrice = totalPrice * 1.25;
  }
  document.querySelector("#summary_amount").textContent = totalAmount;
  document.querySelector("#summary_price").textContent = totalPrice;
}
/* Den här koden definierar en funktion som beräknar summan av inköpslistans artiklar och priser. Om checkbox är markerad lägger funktionen till en momsavgift på 25%. Den sätter totalAmount och totalPrice till 0 och loopar alla listItem objekt i listItems arrayen. Genom variabeln inköpslista hämtar den sedan antal av varje item till totalAmount. I totalPrice räknas det ut genom att ta antalet och multiplicera det med priset listItem. Om man sedan checkar av checkboxen genom checked kommandot så mulitpliceras totalPrice med 25%. Den hämtar summary_amount och summary_price från HTML-koden genom querySelector. Variablen totalAmount och totalSummary är sedan respektive kopplat till HTML med textContent och uppdateras när man klickar på knappen #summary_button, som är skapad i HTML koden (ligger längre ner i JS-dokumentet). */

window.onload = function () {
  renderItems();
  initShoppingList();
  renderShoppingList();
};
/* En event handler som sker när sidan har slutat ladda sidan. När eventet sker så händer de tre funktionerna i ordningen de är skrivna. Funktionerna finns löpande genom koden och beskvina där. */

document
  .querySelector("#summary_button")
  .addEventListener("click", updateSummary);
/* Här hämtar vi ID:t summary_button och lägger till en eventlistener click och kopplar till vår funktion updateSummary */