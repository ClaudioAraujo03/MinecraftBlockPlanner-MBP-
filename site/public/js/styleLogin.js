const changeBtn = document.getElementById('change_btn');

const overlayer = document.getElementById('overlayer_div');
const signIn = document.getElementById('sign_in');
const signUp = document.getElementById('sign_up');
const container = document.getElementById('container');

var btnClick = 0

changeBtn.addEventListener('click', () => {
    if(btnClick == 0){
        overlayer.classList.add('overlayer-2');
        changeBtn.innerText = 'LOGIN';

        container.style.backgroundColor = '#563C85'
        container.style.border = '1px solid #563C85'
        container.style.boxShadow = '#563C85 0 0 10px 0'

        btnClick++;

        signIn.style.opacity = '0';
        signUp.style.opacity = '1';
    } else{
        overlayer.classList.remove('overlayer-2');
        changeBtn.innerText = 'CADASTRE-SE';

        container.style.backgroundColor = '#00BF63'
        container.style.border = '1px solid #00BF63'
        container.style.boxShadow = '#00BF63 0 0 10px 0'

        btnClick = 0;

        signIn.style.opacity = '1';
        signUp.style.opacity = '0';
    }
});

var inputSenha = document.getElementById('senha_input');

inputSenha.addEventListener('keyup', () => {

    const regexNum = /[0-9]/;
    const regexLow = /[a-z]/;
    const regexUp = /[A-Z]/;

    var senha = inputSenha.value;

    var verificaNum = document.getElementById('ver_num');
    var verificaNumIcon = document.getElementById('icon_num');

    var verificaMai = document.getElementById('ver_mai');
    var verificaMaiIcon = document.getElementById('icon_mai');

    var verificaMin = document.getElementById('ver_min');
    var verificaMinIcon = document.getElementById('icon_min');

    var verificaLen = document.getElementById('ver_len');
    var verificaLenIcon = document.getElementById('icon_len');

    if(regexNum.test(senha)){
        verificaNum.style.color = 'green';
        verificaNumIcon.classList.remove('fa-xmark')
        verificaNumIcon.classList.add('fa-circle-check')
    } else{
        verificaNum.style.color = 'red';
        verificaNumIcon.classList.remove('fa-circle-check')
        verificaNumIcon.classList.add('fa-xmark')
    }
    if(regexUp.test(senha)){
        verificaMai.style.color = 'green';
        verificaMaiIcon.classList.remove('fa-xmark')
        verificaMaiIcon.classList.add('fa-circle-check')
    } else{
        verificaMai.style.color = 'red';
        verificaMaiIcon.classList.remove('fa-circle-check')
        verificaMaiIcon.classList.add('fa-xmark')
    }
    if(regexLow.test(senha)){
        verificaMin.style.color = 'green';
        verificaMinIcon.classList.remove('fa-xmark')
        verificaMinIcon.classList.add('fa-circle-check')
    } else{
        verificaMin.style.color = 'red';
        verificaMinIcon.classList.remove('fa-circle-check')
        verificaMinIcon.classList.add('fa-xmark')
    }
    if(senha.length >= 8){
        verificaLen.style.color = 'green';
        verificaLenIcon.classList.remove('fa-xmark')
        verificaLenIcon.classList.add('fa-circle-check')
    } else{
        verificaLen.style.color = 'red';
        verificaLenIcon.classList.remove('fa-circle-check')
        verificaLenIcon.classList.add('fa-xmark')
    }
})