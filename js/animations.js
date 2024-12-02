// Recipe Flip Cards
if (document.querySelectorAll(".recipe").length > 0) {
  const cards = document.querySelectorAll(".recipe");

  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
    card.addEventListener("keydown", handleKeyDown); 
    card.setAttribute("tabindex", "0"); 
  });

  function flipCard() {
    this.classList.toggle("flipCard");
  }

  function handleKeyDown(event) {
    if (event.key === "Tab") {
      this.classList.toggle("flipCard");
    }
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
      this.classList.toggle("active"); 

      const panel = this.nextElementSibling; 
      const icon = this.querySelector("i"); 

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        if (icon) {
          icon.className = "fa-solid fa-chevron-down"; 
        }
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px"; 
        if (icon) {
          icon.className = "fa-solid fa-chevron-up"; 
        }
      }
    });
  }
}

