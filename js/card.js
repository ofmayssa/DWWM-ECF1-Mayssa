document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filters_buttons button');
    const cards = document.querySelectorAll('.film-card');
    const searchInput = document.getElementById('search');

    // Listen for click events on filter buttons
    buttons.forEach(button => { 
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            cards.forEach(card => {
                // Show or hide cards based on selected filter
                card.style.display = (filter === 'all' || card.dataset.genre === filter) ? 'block' : 'none';
            });
        });
    });

    // Listen for search input changes
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            // Show card only if the title includes the search query
            card.style.display = title.includes(query) ? 'block' : 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => { 
  const filterButtons = document.querySelectorAll(".filters_btn");
  const cards = document.querySelectorAll(".card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove the active class from all buttons
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        // Display cards matching the selected category
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
