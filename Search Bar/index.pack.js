let namesDOMCollection = document.querySelectorAll(".name")
let inputField = document.getElementById("searchInput")

function inputValue(event) {
     let searchQuery = event.target.value.toLowerCase();

     for (let i = 0; i < namesDOMCollection.length; i++) {
          let currentName = namesDOMCollection[i].textContent.toLowerCase();
          
          if (currentName.includes(searchQuery)) {
               namesDOMCollection[i].style.display = "block"
          } else {
               namesDOMCollection[i].style.display = "none"
          }
     }
}

inputField.addEventListener("keyup", inputValue)


