// Fetch the JSON file with movie data
const response = await fetch('cinema.json');
let films = await response.json();

const sectionFiches = document.querySelector(".fiches");

// Function to display movies in the "fiches" section
function renderFilms(filmsArray) {
  sectionFiches.innerHTML = '<h2>Programation</h2>'; // Reset section and add title

  filmsArray.forEach(film => {
    const card = document.createElement("article");
    card.classList.add("card");

    // Movie title
    const title = document.createElement("h2");
    title.innerText = film.movie;

    // Movie poster
    const image = document.createElement("img");
    image.src = film.image;
    image.alt = film.movie;

    // Movie description
    const desc = document.createElement("p");
    desc.innerText = film.description;

    // Date, time, duration
    const date = document.createElement("p");
    date.innerText = `Date : ${film.date}`;
    const time = document.createElement("p");
    time.innerText = `Heure : ${film.time}`;
    const duration = document.createElement("p");
    duration.innerText = `Durée : ${film.duration} min`;

    // Tickets sold and progress bar
    const tickets = document.createElement("p");
    tickets.innerText = `Tickets vendus : ${film.ticketsSold}`;

    const progress = document.createElement("progress");
    progress.value = film.ticketsSold;
    progress.max = 100; // Adjust max value if needed
    progress.classList.add("ticket-progress");

    // Price
    const price = document.createElement("p");
    price.innerText = `Prix : ${film.price} €`;

    // Append all elements to the card
    card.append(title, image, desc, date, time, duration, tickets, progress, price);

    // Append the card to the section
    sectionFiches.appendChild(card);
  });
}

// Initial render
renderFilms(films);

// Sort ascending by price
document.querySelector(".btn-trier").addEventListener("click", () => {
  const sorted = [...films].sort((a, b) => a.price - b.price);
  renderFilms(sorted);
});

// Sort descending by price
document.querySelector(".btn-decroissant").addEventListener("click", () => {
  const sorted = [...films].sort((a, b) => b.price - a.price);
  renderFilms(sorted);
});

// Filter price <= 35
document.querySelector(".btn-filtrer").addEventListener("click", () => {
  const filtered = films.filter(f => f.price <= 35);
  renderFilms(filtered);
});

// Filter movies with description only
document.querySelector(".btn-nodesc").addEventListener("click", () => {
  const filtered = films.filter(f => f.description);
  renderFilms(filtered);
});
