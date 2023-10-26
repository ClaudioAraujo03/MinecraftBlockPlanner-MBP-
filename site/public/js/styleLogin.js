const signup = document.getElementById('signup_link');
const login = document.getElementById('login_link');
const divLogin = document.getElementById('div_login');
const divSignup = document.getElementById('div_signup')
const imgContent = document.getElementById('img_content');

signup.addEventListener('click', () => {
    divLogin.style.opacity = '0';
    setTimeout(function oculta(){
        divLogin.style.display = 'none';
    }, 2000)
    setTimeout(function exibe(){
        divSignup.style.display = 'flex';
        setTimeout(function mudaOpacity() {
            divSignup.style.opacity = '1';
        }, 1000)
        imgContent.style.borderRadius = '2rem 0 0 2rem'
        imgContent.src = 'assets/wallpaper2.png'
    }, 2000)
})