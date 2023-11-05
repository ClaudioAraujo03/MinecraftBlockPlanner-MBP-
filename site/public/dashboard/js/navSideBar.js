const exitIcon = document.getElementById('exit_icon').addEventListener('click', () => {
    window.location = "/";
});

const configIcon = document.getElementById('configs_area').addEventListener('click', () => {
    window.location = "/dashboard/configuracao";
});

const createProjectIcon = document.getElementById('crate_project_area').addEventListener('click', () => {
    window.location = "/dashboard/criarProjeto";
});