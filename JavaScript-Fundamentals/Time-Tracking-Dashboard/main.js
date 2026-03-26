const buttons = document.body.querySelectorAll("button");
const cards = document.body.querySelectorAll(".card");

// Fetch and parse the JSON data
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // Function to update cards
    function updateCards(timeframe) {
      cards.forEach((card, index) => {
        // Select elements inside each card
        const ttile = card.querySelector(".cardType");
        const current = card.querySelector(".currentHours");
        const previous = card.querySelector(".previousHours");

        // Convert timeframe name (e.g. daily -> day)
        const reducedName = timeframe.replace(/ly$/i, "");
        const goodName = reducedName.replace(/i/i, "y");

        // Update Card Values;
        ttile.textContent = data[index].title;
        current.textContent = data[index].timeframes[timeframe].current + "hrs";
        previous.textContent = "Last " + goodName + " - " + data[index].timeframes[timeframe].previous + "hrs";
      });
    }

    // Initial data display (weekly data)
    updateCards("weekly");

    // Add Event Listener To Buttons
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Get timeframe From Button ttribute
        const timeframe = button.getAttribute("data-timeframe");

        // Update cards
        updateCards(timeframe);

        //  Update active state
        buttons.forEach((button) => button.classList.remove("text-white"));
        button.classList.add("text-white");
      });
    });
  })
  .catch((error) => console.log("Oops! Something went wrong."));
