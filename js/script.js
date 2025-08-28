// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('cinema.json');
const films= await reponse.json();

for (let i = 0; i < films.length; i++) {

    const article = films[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const filmElement = document.createElement("article");
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const movieElement = document.createElement("h2");
    movieElement.innerText = article.movie;
    const priceElement = document.createElement("p");
    priceElement.innerText = `Prix: ${article.price} € `;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ;
    const ticketsSoldElement = document.createElement("p");
    ticketsSoldElement.innerText =  `Tickets vendus: ${article.ticketsSold} ` ;
    const dateElement = document.createElement("p");
    dateElement.innerText =  `Date: ${article.date} ` ;
    const timeElement = document.createElement("p");
    timeElement.innerText =  `time: ${article.time} ` ;
    const durationElement = document.createElement("p");
    durationElement.innerText =  `time: ${article.duration} ` ;

    sectionFiches.appendChild(filmElement);
    filmElement.appendChild(movieElement);
    filmElement.appendChild(dateElement);
    filmElement.appendChild(durationElement);
    filmElement.appendChild(timeElement);
    filmElement.appendChild(imageElement);
    filmElement.appendChild(descriptionElement);
    filmElement.appendChild(ticketsSoldElement);
    filmElement.appendChild(priceElement);


 }
 
 //gestion des boutons 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const filmsOrdonnees = Array.from(films);
    filmsOrdonnees.sort(function (a, b) {
        return a.price - b.price;
     });
     console.log(filmsOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const filmsFiltrees = films.filter(function (film) {
        return film.prix <= 35;
    });
   console.log(filmsFiltrees);
});

//Correction Exercice
const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
    const filmsOrdonnees = Array.from(films);
    filmsOrdonnees.sort(function (a, b) {
        return b.price - a.price;
     });
     console.log(filmsOrdonnees);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
    const filmssFiltrees = films.filter(function (film) {
        return film.description;
    });
   console.log(filmsFiltrees);
});

const noms = films.map(film => film.movie);
for(let i = films.length -1 ; i >= 0; i--){
    if(films[i].price > 35){
        noms.splice(i,1);
    }
}
console.log(noms)

//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
    const movieElement = document.createElement('li');
    movieElement.innerText = noms[i];
    abordablesElements.appendChild(movieElement);
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
    .appendChild(abordablesElements)

//Code Exercice 
const nomsDisponibles = films.map(film => film.movie);
const priceDisponibles = films.map(film => film.price);

for(let i = films.length -1 ; i >= 0; i--){
    if(films[i].disponibilite === false){
        nomsDisponibles.splice(i,1);
        priceDisponibles.splice(i,1);
    }
}

const disponiblesElement = document.createElement('ul');

for(let i=0 ; i < nomsDisponibles.length ; i++){
    const movieElement = document.createElement('li');
    movieElement.innerText = `${nomsDisponibles[i]} - ${priceDisponibles[i]} €`;
    disponiblesElement.appendChild(movieElement);
}

document.querySelector('.disponibles').appendChild(disponiblesElement);