let div = document.getElementById("division1");
let head= document.getElementById("division2");
let btn= document.getElementById("division3");

let arr= ["red","white","green","yellow","pink","blue","beize","gray","bronze","coral"];
btn.addEventListener("click" , function() {
let num = Number(Math.floor(Math.random()*10))
div.style.background =  arr[num];
head.innerHTML ="Background color ::" + arr[num];
})