const element = document.querySelector("input");
const staticList = document.querySelectorAll("input");
const liveList = document.getElementsByTagName("input");

element.addEventListener("input", () => {
  // Both of these are references to the live node in the DOM
  console.log(element.value);
  console.log(staticList[0].value);
});

document.getElementById("del").addEventListener("click", () => {
  // Removing the input
  document.body.removeChild(document.querySelector("input"));
  // It's still on the static list
  console.log("staticList.length = " + staticList.length); // 1
  // It's off the live list now
  console.log("liveList.length = " + liveList.length); // 0
  // Since we still have a reference to it, we can still see it's value
  console.log(element.value); // "what you typed"
});



function update(){
// // returns an HTMLCollection
// const paragraphs = document.getElementsByTagName('p')

// console.log("BEFORE UPDATE: ", paragraphs)

// const newParagraph = document.createElement('p');
// const paraContent= document.createTextNode("new Paragraph.")
// newParagraph.appendChild(paraContent);
// document.body.appendChild(newParagraph)

// console.log("AFTER UPDATE: ", paragraphs);

// returns an HTMLCollection
const paragraphs = document.querySelectorAll('p');

console.log("BEFORE UPDATE: ", paragraphs)

const newParagraph = document.createElement('p');
const paraContent= document.createTextNode("new Paragraph.")
newParagraph.appendChild(paraContent);
document.body.appendChild(newParagraph)

console.log("AFTER UPDATE: ", paragraphs)

}