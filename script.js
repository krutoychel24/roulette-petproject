const roulette = document.getElementById("roulette");
const numberDisplay = document.getElementById("number");
const spinButton = document.getElementById("spinButton");

spinButton.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 37);
    roulette.classList.remove("spin");
    numberDisplay.textContent = randomNumber
    setTimeout(() => {
        roulette.classList.add("spin");
    }, 10);   
});
