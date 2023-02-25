var mode = document.getElementById("jsmode");
mode.addEventListener("click", function(){
  if(mode.innerText == "바뀌기 전 text"){
    mode.innerText="바뀐 후 Text";
  }else{
    mode.innerText="바뀌기 전 text";
  }
});

alert(prompt("안녕하세요\n김치"));


var x =10;

function displayNumber(){
  
  console.log("x is " + x);
  console.log("y is " + y);
  let y=20;
}

displayNumber();
