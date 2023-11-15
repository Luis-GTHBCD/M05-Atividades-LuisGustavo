function enviarReserva(){
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const data = document.getElementById("data").value;

    if(!num(telefone)){
        alert("Digite um número de telefone válido");
        return;
    }

    const div = document.getElementById("dadosReserva");
    div.innerHTML = `
        <span>DADOS DA RESERVA</span>
        <p>Nome: ${nome}</p>
        <p>Telefone: ${telefone}</p>
        <p>Data: ${data}</p>`;
    
        document.getElementById("reservaForm").reset();
}

function num(telefone){
    const tel = telefone.replace(/\D/g, "");
    return tel.length >= 10 && tel.length <= 11;
}
