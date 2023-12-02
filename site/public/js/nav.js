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

const instagram = document.getElementById('insta').addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/araujo.clau18/'
})
const linkedin = document.getElementById('linkedin').addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/cláudio-araújo-31750a25b/'
})
const github = document.getElementById('github').addEventListener('click', () => {
    window.location.href = 'https://github.com/ClaudioAraujo03/MinecraftBlockPlanner-MBP-'
})