// Bill
const billInput = document.getElementById("Bill");
const billError = document.getElementById("BillError");

// Tip
const tipBtns = document.querySelectorAll(".TipBtn");
const customInput = document.getElementById("customInput");

// People
const peopleInput = document.getElementById("People");
const peopleError = document.getElementById("PeopleError");

// Tip Amount
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("Total");

// Reset
const resetBtn = document.getElementById("Reset");

let bill = 0;
let pepole = 1;
let tip = 0;

function handleInput() {
  bill = parseFloat(billInput.value) || 0;
  pepole = parseFloat(peopleInput.value) || 0;

  calculate();
}

billInput.addEventListener("input", () => {
  billInput.value = billInput.value.replace(/[^0-9.]/g, "");

  if (billInput.value === "") {
    billError.classList.remove("hidden");
  } else {
    billError.classList.add("hidden");
  }

  handleInput();
});

peopleInput.addEventListener("input", () => {
  let value = peopleInput.value;

  if (/[^0-9]/.test(value)) {
    peopleError.classList.remove("hidden");
    peopleError.textContent = "Numbers only";

    peopleInput.value = value.replace(/[^0-9]/g, "");
    return;
  }

  peopleInput.value = value.replace(/^0+/, "");

  const num = parseInt(peopleInput.value);

  if (peopleInput.value === "" || num === 0) {
    peopleError.classList.remove("hidden");
    peopleError.textContent = "Can't be zero";
  } else {
    peopleError.classList.add("hidden");
  }

  handleInput();
});

tipBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tip = parseFloat(btn.dataset.tip);

    tipBtns.forEach((btn) => btn.classList.remove("bg-(--Grey-200)", "text-(--Green-900)!", "brightness-110"));

    btn.classList.add("bg-(--Grey-200)", "text-(--Green-900)!", "brightness-110");

    customInput.value = "";
    calculate();
  });
});

customInput.addEventListener("input", () => {
  tip = (parseFloat(customInput.value) || 0) / 100;

  tipBtns.forEach((btn) => btn.classList.remove("bg-(--Grey-200)", "text-(--Green-900)!", "brightness-110"));

  calculate();
});

// Calculate Function
function calculate() {
  if (bill <= 0 || pepole <= 0 || tip <= 0) {
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
    return;
  }

  const TipAmountVal = (bill * tip) / pepole;
  const TotalVal = (bill + bill * tip) / pepole;

  tipAmount.textContent = "$" + TipAmountVal.toFixed(2);
  total.textContent = "$" + TotalVal.toFixed(2);

  resetBtn.classList.remove("opacity-40");
  resetBtn.classList.add("text-white");
  resetBtn.disabled = false;
}

// Reset Button
resetBtn.addEventListener("click", () => {
  bill = 0;
  pepole = 1;
  tip = 0;

  billInput.value = "";
  peopleInput.value = "";
  customInput.value = "";

  tipBtns.forEach((b) => b.classList.remove("bg-(--Grey-200)", "text-(--Green-900)!", "brightness-110"));

  tipAmount.textContent = "$0.00";
  total.textContent = "$0.00";

  resetBtn.classList.add("opacity-40");
  resetBtn.classList.remove("text-white");
  resetBtn.disabled = true;
});
