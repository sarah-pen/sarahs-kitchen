// Recipe Flip Cards
if (document.querySelectorAll(".recipe").length > 0) {
  const cards = document.querySelectorAll(".recipe");

  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });

  function flipCard() {
    this.classList.toggle("flipCard");
  }
}

// Essentials Carousel
if (document.getElementById('product-list')) {
  const prev = document.getElementById('prev-btn');
  const next = document.getElementById('next-btn');
  const list = document.getElementById('product-list');
  const itemWidth = 200;
  const padding = 10;

  prev.addEventListener('click', () => {
    console.log("Previous button clicked");
    list.scrollLeft -= (itemWidth + padding);
  });

  next.addEventListener('click', () => {
    console.log("Next button clicked");
    list.scrollLeft += (itemWidth + padding);
  });
}

// Accordion
if (document.getElementsByClassName("tip-category").length > 0) {
  const acc = document.getElementsByClassName("tip-category");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active"); // Toggle active class for the accordion button

      const panel = this.nextElementSibling; // Target the panel
      const icon = this.parentElement.querySelector("i"); // Locate the <i> element

      if (panel.classList.contains("open")) {
        panel.classList.remove("open"); // Hide panel
        // Update the icon class for the collapsed state
        if (icon) {
          icon.className = "fa-solid fa-chevron-down";
        }
      } else {
        panel.classList.add("open"); // Show panel
        // Update the icon class for the expanded state
        if (icon) {
          icon.className = "fa-solid fa-chevron-up";
        }
      }
    });
  }
}
