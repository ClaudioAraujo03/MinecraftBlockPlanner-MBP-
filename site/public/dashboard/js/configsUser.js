var dtCriacaoSession = document.getElementById('dt_cia')

var dtCriacao = new Date(sessionStorage.DT_USER)
var dia = dtCriacao.getDate()
var mes = dtCriacao.getMonth() + 1
var ano = dtCriacao.getFullYear()

var imgLogoUser =  document.getElementById('logo_user')
var abreDisplayImagens = document.getElementById('imgs_display');
var fechaDisplayImg = document.getElementById('close_img')

imgLogoUser.src = sessionStorage.IMG_USER

fechaDisplayImg.addEventListener('click', () => {
    abreDisplayImagens.style.display = 'none'
})

var choseImg = document.getElementById('chose_img').addEventListener('click', () => {
    abreDisplayImagens.style.display = 'flex';
});

function pegaCaminho(img){
    var caminho = img.src
    imgLogoUser.src = caminho
    abreDisplayImagens.style.display = 'none'
    sessionStorage.IMG_USER = caminho
}

dtCriacaoSession.innerHTML = `Conta criada em ${dia}/${mes}/${ano}`

var inputName = document.getElementById('input_name')
var inputNick = document.getElementById('input_nick')
var inputEmail = document.getElementById('input_email')
var inputSenha = document.getElementById('input_senha')

inputName.value = ''
inputNick.value = sessionStorage.NICK_USER
inputEmail.value = ''
inputSenha.value = sessionStorage.SENHA_USER

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
    var caminhoRelativo = imgLogoUser.src.replace(window.location.origin, '');
    fetch(`/dashboard/configuracao/${sessionStorage.getItem("ID_USER")}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nickConfigServer: nickVar,
            senhaConfigServer: senhaVar,
            caminhoImgServer: caminhoRelativo
        }),
    }).then(function(resposta){
        console.log("Edição realizada com sucesso", resposta);
        if (resposta.ok) {
            sessionStorage.SENHA_USER = senhaVar
            sessionStorage.NICK_USER = nickVar
            window.location = "./configsUser.html";  
        } else {
            throw "Houve um erro ao tentar realizar a edição!, erro no HTML";
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
})
const popup = document.getElementById('overlayer');

const closePopUp = document.getElementById('close-popup').addEventListener('click', () => {
    popup.style.display = 'none';
});

const btnDel = document.getElementById('del_conta').addEventListener('click', () => {
    popup.style.display = 'flex';

});

const btnConfirm = document.getElementById('confirm').addEventListener('click', () => {
    fetch(`/dashboard/configuracao/${sessionStorage.getItem("ID_USER")}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    }).then(function(resposta){
        if(resposta.ok){
            window.location = "../index.html"
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar apagar a sua conta! Código da resposta: " + resposta.status);
        }
    }).catch(function(resposta){
        console.log(`#ERRO: ${resposta}`);
    })
});