let body = document.body;
let lien = document.createElement('a');
let texte = document.createTextNode("l'article de Wikipédia sur le Lorem Ipsum");

lien.appendChild(texte);
lien.setAttribute('href', 'https://fr.wikipedia.org/wiki/Lorem_ipsum');
body.appendChild(lien);
