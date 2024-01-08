

function update(){
    const para = document.createElement("li");
    const node = document.createTextNode("new");
    para.appendChild(node);
    
    const element = document.querySelectorAll("ul");
    element[0].appendChild(para);
}