let div = document.querySelector("div");
let section = document.querySelector("section");
let nomeUsuario = document.querySelector("input1");
let botao = document.querySelector("button");
let texto = document.querySelector("h2");
let naoSou = document.querySelector("a");
let email = document.querySelector("input2")

if(localStorage.nome){
    div.style.display = "none";
    texto.innerHTML=`Seja bem vindo ${localStorage.nome}`;
    naoSou.innerHTML=`Não sou ${localStorage.nome}`;
}
else{
    div.style.display="block";
    section.style.display="none";
    function cadastrar(){
        localStorage.setItem("input1", nomeUsuario.value);
        localStorage.setItem("input2", email.value);
        if(localStorage.nome){
            div.style.display = "none";
            section.style.display="block"
            texto.innerHTML=`Seja bem vindo ${localStorage.nome}`;
            naoSou.innerHTML=`Não sou ${localStorage.nome}`;
        }
    }
}


 function limparStorage(){
    localStorage.clear();
}

botao.onclick = cadastrar;
naoSou.onclick = limparStorage;