var addButton = document.getElementById("addItem");
var listOutput = document.getElementById("output");
var schemeButton = document.getElementById("scheme");
var inputField = document.getElementById("itemInput");
addButton.addEventListener('click', addListItem);
schemeButton.addEventListener('click', changeScheme);
//Allows the enter button to be used
inputField.addEventListener('keydown', function(e){
  if(e.keyCode == 13){
      addListItem();
  }
});
//Appends new list items
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
//Adds the ability to remove list items
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
//If a list item is pressed it becomes crossed out and the background becomes darker.
var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);
//Function to add list items
function addListItem(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("itemInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("Add an Item");
  }else{
    listOutput.appendChild(li);
  }
  
  document.getElementById("itemInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++){
    close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
    }
  }
}
//Function that toggles day mode and night mode
function changeScheme(){
  if (schemeButton.innerHTML == "N"){
    schemeButton.innerHTML = "D";
  }else{
    schemeButton.innerHTML = "N";
  }
  var header = document.getElementById("header");
  var inputs = document.getElementById("inputDiv");
  var inputBox = document.getElementById("itemInput");
  header.classList.toggle('darkMode');
  inputs.classList.toggle('darkModeInput');
  inputBox.classList.toggle('darkModeInputBox');
  addButton.classList.toggle('darkModeButton');
  listOutput.classList.toggle('darkModeOutput');
}