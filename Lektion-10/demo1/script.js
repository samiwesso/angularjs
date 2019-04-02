const starsTotal = 5;

const ratings = {
    hp: 4.6,
    dell: 1.9,
    sony: 2.8,
    lenovo: 2.2
}




function getRatings() {
    for (let rating in ratings) {
        const starProcentage = (ratings[rating] / starsTotal) * 100;
        const starProcentageRounded = `${Math.round(starProcentage / 10) * 10}%`;

        document.querySelector(`.${rating} .stars-inner`).style.width = starProcentageRounded;
    }
}

document.addEventListener("DOMContentLoaded", getRatings);


