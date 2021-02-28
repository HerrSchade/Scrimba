/* Buttons */
let addButton = document.getElementById("add");
let pickWinnerButton = document.getElementById("pick");
let winnerContainer = document.getElementById("winner-container")
let addedNames = document.getElementById("added-names")
let winnerDisplay = document.getElementById("winner")

let nameArray = []




function addName() {
     let enterNameInput = document.getElementById("enter-names").value
     nameArray.push(enterNameInput)
     let child = document.createElement("p");
     child.innerHTML += enterNameInput
     addedNames.append(child);
}
     addButton.addEventListener("click", addName)



function pickWinner() {
     let newNumber = Math.floor(Math.random() * nameArray.length);
     let winnerName = nameArray[newNumber]
     winnerDisplay.innerHTML = winnerName

}

pickWinnerButton.addEventListener("click", pickWinner)


