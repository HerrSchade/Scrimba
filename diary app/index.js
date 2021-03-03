let entryForm = document.getElementById('entryForm');
let entriesSection = document.querySelector("#entries");
let entriesTextbox = document.querySelector(".entry-textbox");
let entriesNav = document.querySelector(".entries-nav")



let count = 1
function addEntryToDom(event) {
     event.preventDefault();
     let entryDiv = document.createElement("div");
     entryDiv.classname = "single-entry";
     entryDiv.textContent = entriesTextbox.value;
     entryDiv.style.display = "none";
     entriesSection.append(entryDiv);
     entriesTextbox.value = "";
     
     let displayEntryButton = document.createElement("button")
     displayEntryButton.className = 'display-entry-button';
     displayEntryButton.textContent = count;
     entriesNav.append(displayEntryButton)

     displayEntryButton.addEventListener("click", function() {
          entryDiv.style.display = "block"
     })

     count++
}
entryForm.addEventListener("submit", addEntryToDom)


