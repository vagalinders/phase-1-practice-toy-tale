const url = " http://localhost:3000/toys";

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


// Fetchers

function getAllToys(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((toys) => {
      console.log(toys);
    });
}
console.log(getAllToys(url))