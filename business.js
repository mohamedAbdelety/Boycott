let categories = new Map();
categories.set('burger', ["Buffalo","Max Burger"]);
categories.set('chicken', ["Zack's"]);
categories.set('pizza', ["Primos"]);
categories.set('coffee', ["Abu Auf", "Misr Cafe","Ali Cafe"]);
categories.set('milk', ["Almarai", "juhayna","lactel"]);
categories.set('soda', ["Fayrouz", "Frutz"]);
categories.set('computer', ["Lenovo"]);
categories.set('water', ["SIWA","Hayat"]);
categories.set('tea', ["Ahmed Tea","El Arosa"]);
categories.set('teeth', ["Sensodyne","Miswak"]);
categories.set('potatoes', ["Tiger","Bravo"]);
categories.set('cacao', ["Bonjorno","Corona"]);
categories.set('wash', ["Oxi"]);
categories.set('Pampers', ["Baby Fine"]);
categories.set('sport', ["Activ","Adidas","Reebok","Decathlon"]);
categories.set('shower', ["Sparkle","oriflam","tresemme"]);
categories.set('biscuit', ["loacker","Bisco Misr","Corona"]);
categories.set('games', ["NewBoy"]);
categories.set('streaming', ["Shahid"]);
categories.set('market', ["Saudi","Jomla","Kazyon"]);



let map = new Map();
map.set("McDonald's", 'burger');
map.set("Bruger King", 'burger');
map.set("Papa John's", 'pizza');
map.set("Domino's", 'pizza');
map.set("pizza hut", 'pizza');
map.set("KFC", 'chicken');
map.set('Starbucks', 'coffee');
map.set('NESCAFÉ', 'coffee');
map.set('Coca-Cola', 'soda');
map.set('Mirinda', 'soda');
map.set('Pepsi', 'soda');
map.set('Sprite', 'soda');
map.set('Fanta', 'soda');
map.set('7UP', 'soda');
map.set('Dew', 'soda');
map.set('Schweppes', 'soda');
map.set('Danone', 'milk');
map.set('Nido', 'milk');
map.set('Tang', 'milk');
map.set('Dasani', 'water');
map.set('Aquafina', 'water');
map.set("Lipton", 'tea');
map.set("hp", 'computer');
map.set("Dell", 'computer');
map.set("Crest", 'teeth');
map.set("Oral-B", 'teeth');
map.set("Lay's", 'potatoes');
map.set("Doritos", 'potatoes');
map.set("Pringles", 'potatoes');
map.set("Nesquick", 'cacao');
map.set('Ariel', 'wash');
map.set('Tide', 'wash');
map.set('Vanish', 'wash');
map.set("Pampers", 'Pampers');
map.set('Nike', 'sport');
map.set('Puma', 'sport');
map.set("Levi's", 'sport');
//map.set("Knozz", 'soap');
//map.set("maggi", 'soap');
map.set('Pantene', 'shower');
map.set('Johnson', 'shower');
map.set("Dove", 'shower');
map.set("Lux", 'shower');
map.set("Rexona", 'shower');
map.set("Head & Shoulders", 'shower');
map.set('Oreo', 'biscuit');
map.set('fitness', 'biscuit');
map.set("KitKat", 'biscuit');
map.set("Hohos", 'biscuit');
map.set('Barbie', 'games');
map.set('NetFlix', 'streaming');
map.set('Carrefour', 'market');



let selectElement = document.getElementById('boycott-select');
//$('#boycott-select').select2();

// Iterate over the Map and create options
for (let [key, value] of map) {
    let option = document.createElement('option');
    option.value = value;
    option.text = key;
    selectElement.add(option);
}

selectElement.addEventListener('change', function() {
    let alt = categories.get(this.value);
    let myDiv = document.getElementById('alternatives-products');
    myDiv.innerHTML = "";
    for (let i = 0; i < alt.length; i++) {
        myDiv.insertAdjacentHTML('beforeend', `
            <div class="col-md-3 alt-pro">
                <span>${alt[i]}</span>
                <br>
                <img class="img-thumbnail" src="./assets/good/${alt[i]}.png">
            </div>
        `);

    }

});