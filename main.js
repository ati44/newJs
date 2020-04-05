var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}
function createList() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addClick() {
    if (inputLength() > 0) {
        createList();
      }
}
function addKeyCode(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createList();
      }
}


button.addEventListener("click", addClick);

input.addEventListener("keypress", addKeyCode);     
