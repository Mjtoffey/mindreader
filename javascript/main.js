let webPage = document.getElementById("webPage");
let info = document.getElementById("info");
let actionBtn = document.getElementById("actionBtn");
let description = document.getElementById("description");
let goRef = document.getElementById("goRef");

let pages = [
  {
    info: "I can read your mind",
    actionBtnLabel: false,
    description: null,
    goRef: "Go",
  },
  {
    info: "Pick a number from 01-99",
    actionBtnLabel: "next",
    description: "when you have your number click next",
    goRef: "↻",
  },
  {
    info: "Add both digits together to get a new number",
    actionBtnLabel: "next",
    description: "Ex; 14 is 1 + 4 = 5,\n click next to proceed",
    goRef: "↻",
  },
  {
    info: "Subtract your new number from the original number",
    actionBtnLabel: "next",
    description: "Ex; 14 - 5 = 9,\n click next to proceed",
    goRef: "↻",
  },
  {
    //disoplay random list from array
    info: null,
    actionBtnLabel: "reveal",
    description: "Find your new number.\n  Note the symbol beside the number",
    goRef: "↻",
  },
  {
    info: null,
    actionBtnLabel: false,
    description: "", //symbols
    goRef: "🍔",
  },
];

let symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*"];

let currentPage = 0;

function nextPage() {
  currentPage++;
  render();
}

function goBtn() {
  if (currentPage === 0) {
    nextPage();
  } else {
    currentPage--;
    render();
  }
}

goRef.addEventListener("click", goBtn);

actionBtn.addEventListener("click", nextPage);

function render() {
  info.textContent = pages[currentPage].info;
  description.textContent = pages[currentPage].description;
  goRef.innerHTML = pages[currentPage].goRef;

  if (pages[currentPage].actionBtnLabel === false) {
    actionBtn.style.visibility = "hidden";
  } else {
    actionBtn.style.visibility = "visible";
    actionBtn.textContent = pages[currentPage].actionBtnLabel;
  }

  if (pages[currentPage].info === null) {
    pages[currentPage].info = divisNine();
  }
}

let chosenSymbol = symbols[Math.floor(Math.random() * symbols.length)];

function divisNine() {
  //capture string to return
  //create string variable to hold all
  // remove return
  //concatanate the string
  //at end of function return string and functions
  var str = "";
  let chosenSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  for (let i = 0; i < 100; i++) {
    if (i % 9 === 0) {
      str = str + i + " = " + chosenSymbol + "<br>";
    } else {
      let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      str = str + i + " = " + randomSymbol + "<br>";
    }
  }
  pages[5].info = chosenSymbol;
  pages[4].description = str;
}

render();
