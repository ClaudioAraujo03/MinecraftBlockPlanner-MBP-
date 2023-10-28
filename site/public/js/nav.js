const linkCalculadora = document.getElementById('link_cal').addEventListener('click', () => {
    window.location.href = '#section_calculator'
});

const linkCalculadoraBtn = document.getElementById('link_cal_btn').addEventListener('click', () => {
    window.location.href = '#section_calculator'
});

const linkSobre = document.getElementById('link_abt').addEventListener('click', () => {
    window.location.href = '#section_about'
});

const linkhome = document.getElementById('link_home').addEventListener('click', () => {
    window.location.href = '#home'
});

const linkLogin = document.getElementById('link_login').addEventListener('click', () => {
    window.location.href = '/login'
});

window.addEventListener('scroll', () => {
    var navBar = document.getElementById('navbar');
    navBar.classList.toggle('sticky', window.scrollY > 0);
})