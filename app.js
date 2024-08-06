
// Funções tradicionais
function saudacao(){
    console.log(this.mensagem);
}

const  exibir = ()=> console.log(this);

const obj = {
    mensagem: "Bem vindo!",
    exibirArrow: exibir,
}

obj.exibirArrow();

