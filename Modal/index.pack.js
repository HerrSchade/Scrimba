let contactMeButton = document.getElementById("open-modal");
let closeButton = document.getElementById("close-modal");

contactMeButton.addEventListener("click", function() {
 document.querySelector(".overlay").style.display = "block";
})

closeButton.addEventListener("click", function() {
     document.querySelector(".overlay").style.display = "none";
})
