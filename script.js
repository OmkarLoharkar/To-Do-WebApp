let addbutton = document.getElementById('todobutton');

let inputField1 = document.getElementById('inputField1');
let inputField2 = document.getElementById('inputField2');

let table = document.getElementById('table')

console.log(inputField1.value)
if(inputField1.value.length != 0){
  console.log('enters ')
  
  
}

addbutton.addEventListener("click", function(){
  if(inputField1.value.length != 0){
    
  var newrow = table.insertRow();
  var newcell1 = newrow.insertCell();
  var newcell2 = newrow.insertCell();
  var newcell3 = newrow.insertCell();
  
  var name = document.createElement('p');
  var paragraph = document.createElement('p');
  var button = document.createElement('button');
  button.setAttribute('onclick',"deleteRow(this)");
  button.setAttribute('class',"jbutton");

  
  name.innerText = inputField1.value;
  paragraph.innerText = inputField2.value;
  button.innerHTML = "❌"
  
  
  newcell1.appendChild(name);
  newcell2.appendChild(paragraph);
  newcell3.appendChild(button);
  
  inputField1.value = '';
  inputField2.value = '';
}
  else{
  alert("Please Enter value")
}
})


function deleteRow(r){
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById('table').deleteRow(i);
}