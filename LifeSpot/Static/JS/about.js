function getReview() {
    let review = new Map();

    review.set("userName", prompt("Как вас зовут ?"));
    if (review.get("userName") == null) {
        return;
    }

    review.set("comment", prompt("Напишите свой отзыв"));
    if (review.get("comment") == null) {
        return
    }

    review.set("date", new Date().toLocaleString());

    writeReview(review)
}

const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review.get("userName")}</b>  ${review.get("comment")}</i></p>` +
        `<p>${review.get("date")}</p>` +
        '</div>';
}