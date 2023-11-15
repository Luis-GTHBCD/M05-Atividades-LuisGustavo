function escondefoto(){
    const divfoto = document.getElementById("foto");
    if(divfoto.style.visibility == "hidden"){
        divfoto.style.visibility = "visible";
    }
    else{
        divfoto.style.visibility = "hidden"
    }
}

function formatatexto(){
    const divtexto = document.getElementById("sobre");
    const input = document.getElementById("formato");
    divtexto.style.textAlign = input.value;
}

function alteracor(){
    const footer = document.getElementById("footer");
    const header = document.getElementById("header");
    const input = document.getElementById("cor");
    if(input.value == "white"){
        footer.style.backgroundColor = "white";
        header.style.backgroundColor = "white";
        footer.style.color = "black";
        header.style.color = "black";
    }

    else if(input.value == "black"){
        footer.style.backgroundColor = input.value;
        header.style.backgroundColor = input.value;
        footer.style.color = "white";
        header.style.color = "white";
    }
    
    else{
        footer.style.backgroundColor = input.value;
        header.style.backgroundColor = input.value;
    }
}

function alterarfonte(){
    const divtexto = document.getElementById("sobre");
    const input = document.getElementById("font");
    divtexto.style.fontFamily = input.value;
}

function modo(){
    const sec = document.getElementById("conteudo");
    if(sec.style.backgroundColor == "black"){
        sec.style.backgroundColor = "white";
        sec.style.color = "black";
    }
    
    else{
        sec.style.backgroundColor = "black";
        sec.style.color = "white";
    }
}
