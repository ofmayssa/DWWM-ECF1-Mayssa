const response = await fetch('cinema.json');
let films = await response.json();

const sectionFiches = document.querySelector(".fiches");

// Fonction pour afficher les films
function renderFilms(filmsArray) {
  sectionFiches.innerHTML = '<h2>Programation</h2>'; // reset + titre

  filmsArray.forEach(film => {
    const card = document.createElement("article");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.innerText = film.movie;

    const image = document.createElement("img");
    image.src = film.image;
    image.alt = film.movie;

    const desc = document.createElement("p");
    desc.innerText = film.description;

    const date = document.createElement("p");
    date.innerText = `Date : ${film.date}`;
    const time = document.createElement("p");
    time.innerText = `Heure : ${film.time}`;
    const duration = document.createElement("p");
    duration.innerText = `Durée : ${film.duration} min`;

    const tickets = document.createElement("p");
    tickets.innerText = `Tickets vendus : ${film.ticketsSold}`;

    const progress = document.createElement("progress");
    progress.value = film.ticketsSold;
    progress.max = 100;
    progress.classList.add("ticket-progress");

    const price = document.createElement("p");
    price.innerText = `Prix : ${film.price} €`;

    card.append(title, image, desc, date, time, duration, tickets, progress, price);
    sectionFiches.appendChild(card);
  });
}

// Affichage initial
renderFilms(films);

// Tri prix croissant
document.querySelector(".btn-trier").addEventListener("click", () => {
  const sorted = [...films].sort((a, b) => a.price - b.price);
  renderFilms(sorted);
});

// Tri prix décroissant
document.querySelector(".btn-decroissant").addEventListener("click", () => {
  const sorted = [...films].sort((a, b) => b.price - a.price);
  renderFilms(sorted);
});

// Filtrer prix <= 35
document.querySelector(".btn-filtrer").addEventListener("click", () => {
  const filtered = films.filter(f => f.price <= 35);
  renderFilms(filtered);
});

// Filtrer films sans description
document.querySelector(".btn-nodesc").addEventListener("click", () => {
  const filtered = films.filter(f => f.description);
  renderFilms(filtered);
});
