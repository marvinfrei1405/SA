function redirecionar () {
    window.location.href = "aula1.html";
}

function login() {
    var email = document.getElementById("mail").value;
    var senha = document.getElementById("senha").value;

    var dados = localStorage.getItem(2);
    var usuario = JSON.parse(dados);

    if(email == usuario.mail_ && senha == usuario.senha_) {
        alert("Login correto!");
        redirecionar ();
    } else {
        alert("Login ou senha incorretos");
        location.reload();
    }
}