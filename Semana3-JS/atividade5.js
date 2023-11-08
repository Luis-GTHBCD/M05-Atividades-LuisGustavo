// const pessoa = {};

// pessoa.nome = "Luís Gustavo";
// pessoa.idade = "19";

// console.log("Nome " + pessoa.nome);
// console.log("Idade " + pessoa.idade);

// pessoa.idade = "23";
// console.log("Idade Atualizada:", pessoa.idade);

// const pessoa2 ={
//     nome: " Mario",
//     idade: " 27"
// };

// for (let i in pessoa2){
//     console.log(i + ":" +pessoa2[i]);
// }

// pessoa2.apresentacao = function(){
//     console.log("Olá meu nome é " + this.nome);
// }

// pessoa.email = "luislima3105@gmail.com";
// console.log("email: " + pessoa.email);

// const livro = {
//     titulo: "Aventuras de Alice no País das Maravilhas",
//     autor: "Lewis Carroll",
//     anopubli: "1865",
//     genero: "Fantasia",
//     disponivel: true,
//     emprestar: function(){
//         this.disponivel = false;
//     }
// };

// console.log("Informações do livro")
// console.log("Título " + livro.titulo)
// console.log("Autor " + livro.autor)
// console.log("Ano de publicação " + livro.anopubli)
// console.log("Gênero " + livro.genero)
// console.log("Disponível para empréstimo " + livro.disponivel)

// livro.emprestar();
// console.log("Disponível para empréstimo " + livro.disponivel)


const pet = {
    nome: "cachorro",
    especie: " Canis lupus familiaris",
    idade: 5,
    fazer_barulho: function(){
        console.log("O " + pet.nome + "está latindo");
    },
    envelhecer: function(){
        this.idade++;
    },
    trocar_nome: function(nome){
        this.nome = nome
        console.log("O nome do animal foi alterado para " + pet.nome);
    },
}

console.log("Nome: " + pet.nome);
console.log("Espécie: " + pet.especie);
console.log("Idade: " + pet.idade);

pet.envelhecer();
pet.envelhecer();
pet.envelhecer();
console.log("Idade atualizada " + pet.idade);

pet.trocar_nome("Caramelo");
console.log("Nome  atualizado " + pet.nome);
