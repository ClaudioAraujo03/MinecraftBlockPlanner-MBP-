var nickUser = document.getElementById('nick_user');
var emailUser = document.getElementById('email_user')
var imgUserSideBar = document.getElementById('logo_user_side')

nickUser.innerHTML = sessionStorage.NICK_USER;
emailUser.innerHTML = sessionStorage.EMAIL_USER 
imgUserSideBar.src = sessionStorage.IMG_USER

imgUserSideBar.addEventListener('click', () => {
    var idUser = sessionStorage.getItem('ID_USER')
    abrirPerfil(idUser)
})
function abrirPerfil(idUser){
    sessionStorage.ID_PERFIL = idUser
    window.location = `./userPage.html`
}