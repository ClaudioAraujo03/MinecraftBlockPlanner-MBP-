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
