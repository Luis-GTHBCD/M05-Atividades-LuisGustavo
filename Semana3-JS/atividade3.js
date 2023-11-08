const prompt = require("prompt-sync")();

function verify_email(email){
    if(email.indexOf("@gmail.com") !== -1){
        console.log("O email contém o domínio");
        let domain_index = email.indexOf("@");
        let username = email.slice(0, domain_index);
        console.log(`O nome do usuário é ${username}`);
    }else{
        console.log("O domínio do email está inválido, o domínio deve conter [@gmail.com]");
        let domain_index = email.indexOf("@");
        let domain = email.slice(domain_index);
        console.log("O domínio do email é " + domain);
    }
}

let email = prompt("Digite o email:");
verify_email(email);




const prompt = require("prompt-sync")();
let control = 0;

while(control != 1){
    let username = prompt("Digite o nome do usuário: ");
    
    if (username.length >= 12){
        if (username.indexOf("@") === -1){
            console.log("Erro: O nome do usuário deve conter @");
        }
        
        if (username.indexOf("admin") !== -1);{
            console.log("Erro: O nome do usuário não pode conter admin");
        }

        if (username.indexOf("user") !== -1){
            console.log("Nome válido");
            console.log(`O nome do usuário é ${username}`);
            control = 1
        }else {console.log("Erro: O nome do usuário deve conter pelo menos 12 dígitos")}
    }
}
