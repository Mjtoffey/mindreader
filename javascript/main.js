document.addEventListener("load", () => {
    const webPage = document.getElementById('webPage');
const info = document.getElementById("info");
const nextBtn = document.getElementById("next");
const sample = document.getElementById("sample");
const goRef = document.getElementById("goRef");

let symbols = [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*'
]

let pages = [ 
{
    info: info.textContent = 'I can read your mind',
    goRef: goRef.textContent = 'Go',
},
{ 
    info: info.textContent = 'Pick a number from 01-99',
    nextBtn: next.textContent = 'next',
    sample: sample.textContent = 'when you have your number click next',
    goRef: goRef.textContent = img
},
{
    info: info.textContent = 'Add both digits together to get a new number',
    nextBtn: next.textContent = 'next',
    sample: sample.textContent = 'Ex; 14 is 1 + 4 = 5,\n click next to proceed',
    goRef: goRef.textContent = img
},
{
    info: info.textContent = 'Subtract your new number from the original number',
    nextBtn: next.textContent = 'next',
    sample: sample.textContent = 'Ex; 14 - 5 = 9,\n click next to proceed',
    goRef: goRef.textContent = img
},
{//disoplay random list from array
    // fix info: info.textContent = (''),
    nextBtn: next.textContent = 'reveal',
    sample: sample.textContent = 'Find your new number.\n  Note the symbol beside the number',
    goRef: goRef.textContent = img
},
{ //symbol
    info: info.textContent = '',
    sample: sample.textContent = 'Your symbol is " " ',
    goRef: goRef.textContent = img
}
]
let currentPage = pages[0]

nextBtn.addEventListener("click", function() {
    for (let i = 0; i <= 5; i++){
        console.log(pages[i])
        return pages[i];
        
    }
})"

})
