function adicionarTarefa(){
    const tarefa = document.getElementById("tarefa").value;
    const listaTarefas = document.getElementById("listaTarefas");

    const novo = document.createElement("li");
    novo.innerHTML = `<p>${tarefa}</p><button onclick ="remove(this)">Remove</button>`;

    listaTarefas.appendChild(novo);
    document.getElementById("tarefaForm").rest();
}

function remove(button){
    const tarefa = button.parentNode;
    tarefa.remove();
}
