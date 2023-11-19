var inputLoginEmail = document.getElementById('input_email_login');
var inputLoginSenha = document.getElementById('input_password_login');

const btnLogin = document.getElementById('btn_login')

btnLogin.addEventListener('click', () => {
    var emailLoginVar = inputLoginEmail.value
    var senhaLoginVar = inputLoginSenha.value

    var erros = 0

    if(emailLoginVar == ''){
        inputLoginEmail.placeholder = 'Não deixe este campo vazio!'
    }
    if(senhaLoginVar == ''){
        inputLoginSenha.placeholder = 'Não deixe este campo vazio!'
    }
    if(erros == 0){
        fetch("/login/autenticar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              emailLoginServer: emailLoginVar,
              senhaLoginServer: senhaLoginVar
            }),
        }).then(function(resposta) {
            if(resposta.ok){
                resposta.json().then(json =>{
                    sessionStorage.EMAIL_USER = json.email
                    sessionStorage.NOME_USER = json.nome
                    sessionStorage.ID_USER = json.id
                    sessionStorage.SENHA_USER = json.senha
                    sessionStorage.NICK_USER = json.nick
                    sessionStorage.DT_USER = json.dtCriacao
                    
                    setTimeout(function(){
                        window.location = '/dashboard/myListProjects'
                    }, 1000)
                })
            } else{
                console.log("Houve um erro ao tentar realizar o login!");
                resposta.text().then(texto => {
                    console.error(texto);
                });
            }
        }).catch(function(erro){
            console.log(erro)
        })
        return false
    }
})