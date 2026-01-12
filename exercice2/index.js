let liste = document.querySelector('ol');
let item = document.createElement('li');


item.appendChild(document.createTextNode('Préchauffer le four'));


liste.insertBefore(item, liste.firstChild);
