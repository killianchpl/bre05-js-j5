let crepe = document.getElementById('crepe');
let item = document.createElement('li');

let itemText = document.createTextNode('Beurre'); // je créé mon texte
item.appendChild(itemText); // je l'ajoute dans mon li

crepe.appendChild(item);