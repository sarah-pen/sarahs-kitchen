// Recipe Flip Cards

const cards = document.querySelectorAll(".recipe");

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function flipCard() {
  this.classList.toggle("flipCard");
}


// Essentials Carousel

const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('product-list')
const itemWidth = 200
const padding = 10

prev.addEventListener('click',()=>{
  console.log("Previous button clicked")
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  console.log("Next button clicked")
  list.scrollLeft += (itemWidth + padding)
})
