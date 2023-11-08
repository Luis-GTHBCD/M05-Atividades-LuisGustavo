let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
  ];

console.log("Listando tarefas");
for (let i = 0; i < tarefas.length; i++){
    console.log(`${i + 1} - ${tarefas[i]}`);
}

function verify(tarefas){
    return tarefas.incluides("Feito");
}

let pendent_task = tarefas.filter(tarefas => tarefas.includes("Feito"));
console.log("\nTarefas pendentes");
console.log(pendent_task);

tarefas.sort();
console.log("\nLista ordenada")
console.log(tarefas)

let first_task = tarefas.slice(0,2);
console.log("\nLista com as primeiras tarefas");
console.log(first_task);

tarefas.pop();
console.log("\nLista sem a última tarefa");
console.log(tarefas);

tarefas.push("Ler livro novo");
console.log("\nLista atualizada");
console.log(tarefas);

let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];

function odd(num){
    if(num <= 1) return false;
    for(let i = 2; i < num; i++){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

let num_odd = numeros.filter(odd);
console.log("\nLista com números primos");
console.log(num_odd);

let odd_square = num_odd.map(num => num **2);
console.log("\nLista ao quadrado do números primos");
console.log(odd_cube);
