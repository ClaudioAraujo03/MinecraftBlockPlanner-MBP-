const exitIcon = document.getElementById('exit_icon').addEventListener('click', () => {
    window.location = "../index.html";
});

var configIcon = document.getElementById('configs_area').addEventListener('click', () => {
    window.location = "./configsUser.html";
});

var createProjectIcon = document.getElementById('crate_project_area').addEventListener('click', () => {
    window.location = "./createProject.html";
});

var listProjectIcon = document.getElementById('my_project_area').addEventListener('click', () => {
    window.location = `./myProjects.html`;
});

var feedProject = document.getElementById('feed_area').addEventListener('click', () => {
    window.location = `./feed.html`
});

var sideBar = document.getElementById('side_bar');
var contentSite = document.getElementById('content');
var sideBarClick = 0;
var buttonSideBar = document.getElementById('event_side_bar').addEventListener('click', () => {
    sideBar.classList.toggle('hidden-bar');
    contentSite.classList.toggle('expand');
});