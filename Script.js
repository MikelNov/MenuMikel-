const toggleButton = document.querySelector("#menu-toggle");

const hiddenMessage = document.querySelector("#hidden");

toggleButton.addEventListener("click", () => {

    hiddenMessage.classList.toggle("hidden");

});

console.log({toggleButton, hiddenMessage});