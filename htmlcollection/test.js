

function update(){
   // returns NodeList (static and live)
const fruits = document.querySelectorAll('.fruits');
console.log('querySelectorAll-->',fruits);

const fruits2 = document.querySelector('.fruits');
const childFruit = fruits2.childNodes;
console.log('querySelector-->',childFruit);


// returns HTMLCollection (using item method)
const fruits3 = document.getElementsByClassName('fruits');
fruits3.item(0).classList.add('apples');
console.log('getElementsByClassName-->',fruits3);


const divElement = document.querySelector('div');
console.log(divElement.children) // returns an HTMLCollection
console.log(divElement.childNodes) // returns a NodeList

}