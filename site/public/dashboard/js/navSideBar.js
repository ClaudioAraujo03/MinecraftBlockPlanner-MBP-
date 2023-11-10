const exitIcon = document.getElementById('exit_icon').addEventListener('click', () => {
    window.location = "/";
});

const configIcon = document.getElementById('configs_area').addEventListener('click', () => {
    window.location = "/dashboard/configuracao";
});

const createProjectIcon = document.getElementById('crate_project_area').addEventListener('click', () => {
    window.location = "/dashboard/criarProjeto";
});

var sideBar = document.getElementById('side_bar');
var contentSite = document.getElementById('content');
var sideBarClick = 0;
var buttonSideBar = document.getElementById('event_side_bar').addEventListener('click', () => {
    sideBar.classList.toggle('hidden-bar');
    contentSite.classList.toggle('expand');
});