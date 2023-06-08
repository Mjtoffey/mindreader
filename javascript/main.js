window.addEventListener("load", () => {
  let symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*"];

  let pages = [
    {
      info: "I can read your mind",
      actionBtnLabel: null,
      description: null,
    },
    {
      info: "Pick a number from 01-99",
      actionBtnLabel: "next",
      description: "when you have your number click next",
    },
    {
      info: "Add both digits together to get a new number",
      actionBtnLabel: "next",
      description: "Ex; 14 is 1 + 4 = 5,\n click next to proceed",
    },
    {
      info: "Subtract your new number from the original number",
      actionBtnLabel: "next",
      description: "Ex; 14 - 5 = 9,\n click next to proceed",
    },
    {
      //disoplay random list from array
      info: null,
      actionBtnLabel: "reveal",
      description: "Find your new number.\n  Note the symbol beside the number",
    },
    {
      info: null,
      actionBtnLabel: null,
      description: 'Your symbol is " " ', //symbols
    },
  ];
  let currentPage = 0;
  document.getElementById("actionBtn").addEventListener("click", function () {
    if (currentPage < pages.length - 1) {
      currentPage++;
    }
    renderPage(pages[currentPage]);
  });
});
function renderPage(pageObj) {
  const webPage = document.getElementById("webPage");
  const info = document.getElementById("info");
  const actionBtn = document.getElementById("actionBtn");
  const description = document.getElementById("description");
  const goRef = document.getElementById("goRef");

  actionBtn.textContent = pageObj.actionBtnLabel;
  description.textContent = pageObj.description;
  info.textContent = pageObj.info;
  if (pageObj.actionBtnLabel === null) {
    actionBtn.classList.add("hide-button");
  }
}
