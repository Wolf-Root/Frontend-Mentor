const showButton = document.getElementById("share-button");
const shareBox = document.getElementById("share-option");
const card = document.getElementById("card");

showButton.addEventListener("click", (e) => {
  e.stopPropagation();
  shareBox.classList.toggle("active");
});

card.addEventListener("click", (e) => {
  if (shareBox.classList.contains("active") && !showButton.contains(e.target)) {
    shareBox.classList.remove("active");
  }
});
