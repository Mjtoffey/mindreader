
const webPage = document.getElementById ('webPage');
const info = document.getElementById ("info");
const next = document.getElementById ("next");
const sample = document.getElementById ("sample");
const goRef = document.getElementById ("goRef");

let symbols = [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '+',
]

const pages = [ 
{
    info.textContent = ('I can read your mind'),
    goRef.textContent = ("Go"),
}
{
    info.textContent = ('Pick a number from 01-99'),
    next.textContent = ('next'),
    sample.textContent = ('when you have your number click next'),
    goRef.textContent = img
}
{
    info.textContent = ('Add both digits together to get a new number'),
    next.textContent = ('next'),
    sample.textContent = ('Ex; 14 is 1 + 4 = 5, click next to proceed'),
    goRef.textContent = img
}
{
    info.textContent = ('Subtract your new number from the original number'),
    next.textContent = ('next'),
    sample.textContent = ('Ex; 14 - 5 = 9, click next to proceed'),
    goRef.textContent = img
}
{//disoplay random list from array
    info.textContent = (''),
    next.textContent = ('reveal'),
    sample.textContent = ('Find your new number.  Note the symbol beside the number'),
    goRef.textContent = img
}
{ //symbol
    info.textContent = (''),
    sample.textContent = ('Your symbol is :'),
    goRef.textContent = img
}]
