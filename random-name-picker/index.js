let names = []
let namesWrapper = document.getElementById("added-names")
let button = document.getElementById("add-button")

function renderArray() {
     for (let i = 0; i < names.length; i++) {
          let span = document.createElement("span")
          span.textContent = names[i]
          namesWrapper.append(span)
     }
}
renderArray()

function addNewName() {
     let value = document.getElementById("enter-names").value
     names.push(value)
     value = ""
     namesWrapper.innerHTML = ""
     renderArray()
}
button.addEventListener("click", addNewName)



