// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  const ramenDetail = document.getElementById("ramen-detail");
  const ramenImage = ramenDetail.querySelector(".detail-image");
  const ramenHeading = ramenDetail.querySelector(".name");
  const ramenRestaurant = ramenDetail.querySelector(".restaurant");
  const ratingDisplay = document.getElementById("rating-display");
  const commentDisplay = document.getElementById("comment-display");

  ramenImage.src = ramen.image;
  ramenImage.alt = ramen.name;
  ramenHeading.textContent = ramen.name;
  ramenRestaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;

};

const addSubmitListener = () => {
  // Add code
  const ramenForm = document.getElementById("new-ramen");
  ramenForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newName = document.getElementById("new-name").value;
    let newRestaurant = document.getElementById("new-restaurant").value;
    let newImage = document.getElementById("new-image").value;
    let newRating = document.getElementById("new-rating").value;
    let newComment = document.getElementById("new-comment").value;

    let newRamen = {
      id: Math.floor(Math.random()) * 1000,
      name: newName,
      restaurant: newRestaurant,
      image: newImage,
      rating: newRating,
      comment: newComment
    }

    const ramenMenu = document.getElementById("ramen-menu");
    const ramenImage = document.createElement("img");
    ramenImage.src = newRamen.image;
    ramenImage.alt = newRamen.name;
    ramenImage.addEventListener("click", () => handleClick(newRamen));
    ramenMenu.appendChild(ramenImage);


  })
}

const displayRamens = async () => {
  // Add code
  const ramenMenu = document.getElementById("ramen-menu");
  const response = await fetch("http://localhost:3000/ramens");
  const data = await response.json();

  if(data.length > 1) {
    handleClick(data[0]);
  }

  data.forEach(restaurant => {
    let ramenImg = document.createElement("img");
    ramenImg.src = restaurant.image;
    ramenImg.alt = restaurant.name;
    ramenImg.addEventListener("click", () => handleClick(restaurant));
    ramenMenu.appendChild(ramenImg);
  });
};

const main = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // Invoke displayRamens here
    displayRamens()
    // Invoke addSubmitListener here
    addSubmitListener();
  })

}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
