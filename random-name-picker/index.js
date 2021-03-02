let names = ["Katarzyna", "Robert"]

function renderNames() {
let nameContainer = document.getElementById("name-container")
nameContainer.innerHTML = ""
     for(let i = 0; i < names.length; i++) {
          let newElement = document.createElement("span")
          newElement.textContent = names[i]
          nameContainer.append(newElement)
     }
}
renderNames()

/* Add Name Button */
let addNameBtn = document.getElementById("add-names-btn")
function addName() {
     let inputField = document.getElementById("names").value
     if (inputField !== "") {
          names.push(inputField)
          inputField = ""
          renderNames()
          }
}
addNameBtn.addEventListener("click", addName)

/* Remove Name Button */
let removeNameBtn = document.getElementById("remove-names-btn")
function removeName() {
     let inputField = document.getElementById("names").value
          names.pop(inputField)
          inputField = ""
          renderNames()
}
removeNameBtn.addEventListener("click", removeName)

/* Pick Winner Button */
let pickWinnerBtn = document.getElementById("pick-winner-btn")

function pickWinner() {
     let winnerContainer = document.getElementById("winner-name")
     winnerContainer.innerHTML = ""
     let randomNumber = Math.floor(Math.random() * names.length)
     let newElement = document.createElement("span")
     newElement.textContent = names[randomNumber]
     winnerContainer.append(newElement)
}
pickWinnerBtn.addEventListener("click", pickWinner)