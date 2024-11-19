const cards = document.querySelectorAll(".recipe");

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function flipCard() {
  this.classList.toggle("flipCard");
}
