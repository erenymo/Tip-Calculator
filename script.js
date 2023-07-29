const billInput = document.querySelector("#input__bill");
const customTipInput = document.querySelector("#input__tip");
const peopleInput = document.querySelector("#input__people");
const tipsEl = document.querySelector(".tips");
const tipEl = document.querySelectorAll(".tip");
const tipPerPerson = document.querySelector(".tip-amount");
const totalPerPerson = document.querySelector(".total-amount");
const btnReset = document.querySelector(".btn__reset");
const errorPeople = document.querySelector(".people__error");
const errorBill = document.querySelector(".bill__error");

tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let tipValue = 0;
let curBill = 0.0;
let curPeople = 1;

////////// Functions

// Select Tip
const selectTip = function (curTip) {
  tipEl.forEach((tip) => tip.classList.remove("bg-primaryCyan"));

  if (curTip.classList.contains("tip-6")) return;
  if (curTip.classList.contains("tip")) {
    curTip.classList.add("bg-primaryCyan");
    tipValue = parseFloat(curTip.innerHTML) / 100;
  }

  calculateTip();
};

const billInputFun = function () {
  if (billInput.value < 1) {
    errorBill.classList.remove("hidden");
    billInput.classList.remove("outline-primaryCyan");
    billInput.classList.add("border", "border-red-400", "outline-red-400");
    resetTipTotal();
  } else {
    errorBill.classList.add("hidden");
    billInput.classList.add("outline-primaryCyan");
    billInput.classList.remove("border", "border-red-400", "outline-red-400");
    curBill = parseFloat(billInput.value);
    calculateTip();
  }
};

const peopleInputFun = function () {
  if (peopleInput.value < 1) {
    errorPeople.classList.remove("hidden");
    peopleInput.classList.remove("outline-primaryCyan");
    peopleInput.classList.add("border", "border-red-400", "outline-red-400");
    resetTipTotal();
  } else {
    errorPeople.classList.add("hidden");
    peopleInput.classList.add("outline-primaryCyan");
    peopleInput.classList.remove("border", "border-red-400", "outline-red-400");
    curPeople = parseFloat(peopleInput.value);
    calculateTip();
  }
};

const customTipInputFun = function () {
  if (customTipInput.value < 0) {
    customTipInput.classList.remove("outline-primaryCyan");
    customTipInput.classList.add("border", "border-red-400", "outline-red-400");
    resetTipTotal();
  } else {
    customTipInput.classList.add("outline-primaryCyan");
    customTipInput.classList.remove(
      "border",
      "border-red-400",
      "outline-red-400"
    );
    tipValue = parseFloat(customTipInput.value) / 100;
    calculateTip();
  }
};

const calculateTip = function () {
  if (curPeople >= 1 && curBill >= 1 && tipValue >= 0) {
    let tipAmount = (curBill * tipValue) / curPeople;
    let totalAmount = curBill / curPeople + tipAmount;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + totalAmount.toFixed(2);
  }
};

const reset = function () {
  tipValue = 0;
  curBill = 0.0;
  curPeople = 1;

  tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
  totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

  peopleInput.value = "";
  billInput.value = "";
  customTipInput.value = "";
  tipEl.forEach((tip) => tip.classList.remove("bg-primaryCyan"));
};

const resetTipTotal = function () {
  tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
  totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
};

////////// Event Handlers
billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
customTipInput.addEventListener("input", customTipInputFun);
btnReset.addEventListener("click", reset);

tipsEl.addEventListener("click", function (e) {
  e.preventDefault();
  selectTip(e.target);
});
