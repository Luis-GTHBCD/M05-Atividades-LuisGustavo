function Alert(){alert("BOTÃO");}
document.getElementById("btnClick").onclick = Alert;

document.getElementById("inputText").onchange = function(){
    this.style.color = "purple";
}

document.getElementById("inputText").oninput = function(){
    this.style.color = "brown"
}

document.getElementById("inputText").onkeydown = function(){
    document.getElementById("outputMessage").innerText = "Tecla pressionada";
}

document.getElementById("inputText").onkeypress = function(){
    document.getElementById("outputMessage").innerText = "Tecla sendo  pressionada";
}

document.getElementById("inputText").onkeyup = function(){
    document.getElementById("outputMessage").innerText = "Tecla sendo  liberada";
}

var box = document.getElementById("box");
box.onmouseover = function(){
    this.style.background = "blue";
}

box.onmouseout = function(){
    this.style.background = "black";
}

var box = document.getElementById("box");

box.ondragstart = function(event) {
    event.dataTransfer.setData("text/plain", "Drag me");
};


box.ondragover = function(event) {
    event.preventDefault();
};

box.ondrop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    box.innerText = data;
};

window.onload = function(){
    alert("Página carregada");
}

var btnChallenge = document.getElementById("btnChallenge");
var clickCounter = 0;

btnChallenge.onclick = function(){
    clickCounter ++;
    document.getElementById("count").innerText = clickCounter;
}

setTimeout(function(){
    alert(`Tempo acabou, foram realizados ${clickCounter} clicks`);
},10000)

