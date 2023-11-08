const prompt = require("prompt-sync")();

let first = parseInt(prompt("Digite o primeiro número: "));
let second = parseInt(prompt("Digite o segundo número: "));
let result = 0;

for(let i = first; i >= 1; i--){
    result += second;
}
console.log(result)







const prompt = require("prompt-sync")();

let number = 1;
let result = 0;
let count = 0;

while (number =! 0){
    number = parseInt(prompt("Digite um número [Pressione 0 para sair]: "));
    if (number == 0){
        console.log(`A média dos números digitados é: ${result/count}`);
        break;
    }
    result += number;
    count++;
}






const prompt = require("prompt-sync")();

function rectangle(width, heigth){
    let result = " ";
    for (let i = 0; i < heigth; i++){
        for (let j = 0; j < width; j++){
            result += "*";
        }
        result += "\n";
    }
    return result;
}

let print = prompt("Gostaria de imprimir um rerângulo? [s/n]: ");
if (print == "s") {
    let width = parseInt(prompt("Digite a largura: "));
    let heigth = parseInt(prompt("Digite a altura: "));
    if (width > heigth) 
        console.log(rectangle(width, heigth));
    if (width < heigth) 
        console.log(rectangle(width, heigth));
    if (width == heigth) 
        console.log(rectangle(width, heigth));
    }
    else{
        console.log("Error: Entrada inválida")
    }





const prompt = require("prompt-sync")();

let num = parseInt(prompt("Digite um número: "));
if (num > 0){
    switch (num){
        case 1:
            console.log("Sequência: 0");
            break;
        case 2:
            console.log("SequÊncia: 0 1");
            break;
        default:
            let first = 0;
            let second = 1;
            let result = "0 1";
            for (let i = 3; i <= num; i++){
                let third = first + second;
                result += `${third}`;
                first = second;
                second = third;
            }
            console.log(result);
            break;
    }
}





const prompt = require("prompt-sync")();

let input = prompt("Digite uma frase: ");

let len = input.length;
let reverse = "";
for (let i = len - 1; i >= 0; i--){
    reverse += input[i];
}
''
console.log(`texto invertido: ${reverse}`)
