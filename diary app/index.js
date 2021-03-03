let entryForm = document.getElementById('submit-button');
let entriesSection = document.getElementById("entries");
let entriesTextbox = document.getElementsByClassName("entry-textbox");




function addEntryToDom(event) {
     event.preventDefault()
     let entryDiv = document.createElement("div")
     entryDiv.classname = "single-entry"
     entryDiv.textContent = entriesTextbox[0].value
     entriesSection.append(entryDiv)
     entriesTextbox[0].value = ""

}
entryForm = addEventListener("submit", addEntryToDom)

