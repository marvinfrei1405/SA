var input_tel = document.getElementById("telefone");
input_tel.addEventListener('keyup' , mask_tel);

var input_cpf = document.getElementById("cpf");
input_cpf.addEventListener('keyup' , mask_cpf);


function mask_tel(e){
    
    var caractere = e.target.value.replace(/\D/g,"");
    caractere = caractere.replace(/^(\d\d)(\d)/g,"($1) $2");
    caractere = caractere.replace(/(\d{5})(\d)/, "$1-$2");

    e.target.value = caractere;

}

function mask_cpf(e){

    var caractere = e.target.value.replace(/\D/g,"");
    caractere = caractere.replace(/(\d{3})(\d)/, "$1.$2");
    caractere = caractere.replace(/(\d{3})(\d)/, "$1.$2");
    caractere = caractere.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    e.target.value = caractere;
}

function validar() {
  var chave = 2;
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var mail = document.getElementById("mail").value;
  var senha = document.getElementById("senha").value;
  var conf_senha = document.getElementById("conf_senha").value;
  var cpf = document.getElementById("cpf").value;
  var endereco = document.getElementById("endereco").value;

if(nome == "") {
    alert("Informe o seu nome!");
    return false;
}
if(telefone == "") {
    alert("Informe o seu Telefone!");
    return false;
}
if(mail == ""){
  alert("Informe o seu email!");
  return false;
}
if(senha == "") { 
    alert("Informe a senha!");
    return false;

}
if(conf_senha != senha) {
    alert("As senhas não confere ou o campo não foi informado. ");
    return false;
}
if(cpf == ""){
  alert("Informe o cpf!");
  return false;
}
if(endereco == ""){
  alert("Informe o endereco");
  return false;
} else {
  var usuario = {
    nome_ : nome,
    telefone_ : telefone,
    mail_ : mail,
    senha_ : senha,
    cpf_ : cpf
  };

  localStorage.setItem(chave, JSON.stringify(usuario));
  redirecionar();
}

}

function redirecionar() {
 
 window.location.href = "login.html";

}