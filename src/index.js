const url = " http://localhost:3000/toys";

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  // makes sure the DOM is loaded
  const addBtn = document.querySelector("#new-toy-btn");
  // adds the "add a new toy" button
  const toyFormContainer = document.querySelector(".container");
  // creates an object for the toy container
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

function getAllToys(url) { // loads all toys from index.json
  return fetch(url) 
    .then((res) => res.json()) 
    .then((toys) => {  // the whole toy list is "toys" (only function scope)
      console.log(toys);
      
    });
}
console.log(getAllToys(url))
const toy = getAllToys(url)

console.log(toy)


function renderToyCard(cardData){
  const card = document.createElement('li')

})