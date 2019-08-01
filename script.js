let div = document.querySelector("div");
let nome = document.querySelector("#nome");
let sexos = document.querySelectorAll(".sexo");
let email = document.querySelector("#email");
let emailComf = document.querySelector("#emailComf");
let senha = document.querySelector("#password");
let botao = document.querySelector("button");
let naoSou = document.querySelector("a");
let bemVindo = document.querySelector("h2");

function dadosLocalStorage(){
    
    for(sexo of sexos){

if(email.value == emailComf.value){
    localStorage.setItem("Usuario", JSON.stringify({ Usuario: nome.value, Email: email.value,
    Senha: senha.value, Sexo: sexo.value}));
    return;
}
     
else{
    alert('Confirmação de Email Inválido, Tente Novamente.');
        }
    }
}

botao.onclick = dadosLocalStorage;
