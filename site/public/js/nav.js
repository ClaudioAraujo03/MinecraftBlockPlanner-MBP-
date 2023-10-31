const linkSobre = document.getElementById('link_abt').addEventListener('click', () => {
    window.location.href = '#section_about'
});

const linkhome = document.getElementById('link_home').addEventListener('click', () => {
    window.location.href = '#home'
});

const linkLogin = document.getElementById('link_login').addEventListener('click', () => {
    window.location.href = 'loginSignup.html'
});

window.addEventListener('scroll', () => {
    var navBar = document.getElementById('navbar');
    navBar.classList.toggle('sticky', window.scrollY > 0);
})