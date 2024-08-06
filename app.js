
// // Funções tradicionais
// function saudacao(){
//     console.log(this.mensagem);
// }

// const  exibir = ()=> console.log(this);

// const obj = {
//     mensagem: "Bem vindo!",
//     exibirArrow: exibir,
// }

// obj.exibirArrow();

// TRY CATCH
// try {
//     console.log(varivale);
// } catch (error) {
//     console.log('Ocorreu um erro');
// } finally {
//     console.log('Finalizado');
// }


function verificarIdade(idade) {
    if (idade < 18 ){
        throw Error("Idade deve ser maior que 18");
    }

    return "Idade Correta";
}

try {
    console.log(verificarIdade(19));
} catch (error) {
    console.log(error);
}
