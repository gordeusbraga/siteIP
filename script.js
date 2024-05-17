function cadastrar(){
    const cidade = document.getElementById("selecionarCity").value;
    const unidade = document.getElementById("unidadesMG").value;
    const nome = document.getElementById("nomefunc").value;
    const email = document.getElementById("emails").value;
    const senha = document.getElementById("senhas").value;

    // Passando os valores para a próxima página
    sessionStorage.setItem("cidade", cidade);
    sessionStorage.setItem("unidade", unidade);
    sessionStorage.setItem("nome", nome);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("senha", senha);

    // Redirecionando para a próxima página
    window.location.href = "cadastroRealizado.html";
          
}

