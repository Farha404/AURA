const heart = document.querySelectorAll(".heart-icon");
heart.forEach((heart) => {
  heart.addEventListener("click", function () {
    this.classList.toggle("fa-regular");
    this.classList.toggle("fa-solid");
  });
});

const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.getAttribute('data-filter');
        
        cards.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            if (category === 'all' || category === cardCat) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// const explore = document.getElementsByClassName("explore-btn");
// explore.addEventListener("click", function(){

// });