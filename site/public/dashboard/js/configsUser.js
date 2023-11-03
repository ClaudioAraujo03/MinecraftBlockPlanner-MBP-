var nickUser = document.getElementById('nick_user');
var emailUser = document.getElementById('email_user')
var dtCriacaoSession = document.getElementById('dt_cia')

var dtCriacao = new Date(sessionStorage.DT_USER)
var dia = dtCriacao.getDate()
var mes = dtCriacao.getMonth() + 1
var ano = dtCriacao.getFullYear()

nickUser.innerHTML = sessionStorage.NICK_USER;
emailUser.innerHTML = sessionStorage.EMAIL_USER 
dtCriacaoSession.innerHTML = `Conta criada em ${dia}/${mes}/${ano}`

var inputName = document.getElementById('input_name')
var inputNick = document.getElementById('input_nick')
var inputEmail = document.getElementById('input_email')
var inputSenha = document.getElementById('input_senha')

inputName.value = ''
inputNick.value = ''
inputEmail.value = ''
inputSenha.value = sessionStorage.SENHA_USER

var idUsuario = sessionStorage.ID_USER

inputName.placeholder = sessionStorage.NOME_USER
inputNick.placeholder = sessionStorage.NICK_USER
inputEmail.placeholder = sessionStorage.EMAIL_USER
inputSenha.placeholder = 'Sua senha'

var changeTypeInput = document.getElementById('show_password');

changeTypeInput.addEventListener('click', () => {
    if(changeTypeInput.classList.contains("fa-eye")){
        inputSenha.type = 'text'
        changeTypeInput.classList.remove("fa-eye")
        changeTypeInput.classList.add("fa-eye-slash")
    } else{
        inputSenha.type = 'password'
        changeTypeInput.classList.remove("fa-eye-slash")
        changeTypeInput.classList.add("fa-eye")
    }
})

const btnSave = document.getElementById('btn_save')

btnSave.addEventListener('click', () => {
    var nickVar = inputNick.value
    var senhaVar = inputSenha.value
    fetch(`/dashboard/configuracao/${sessionStorage.getItem("ID_USER")}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nickConfigServer: nickVar,
            senhaConfigServer: senhaVar,
        }),
    }).then(function(resposta){
        console.log("Edição realizada com sucesso", resposta);
        if (resposta.ok) {
            alert("Update realizado com sucesso! Redirecionando para tela de configs...")
            window.location = "/dashboard/configuracao";  
        } else {
            throw "Houve um erro ao tentar realizar a edição!, erro no HTML";
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
})