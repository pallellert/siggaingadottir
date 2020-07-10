const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const mainSection = document.getElementById("main-section");

const home = document.getElementById("home");
const about = document.getElementById("about")
const whole30 = document.getElementById("whole30")
const contact = document.getElementById("contact");


let currentPage = home;

let isMenuShowing = false;

handleRefresh();

function handleRefresh() {
    const prevPageID = sessionStorage.getItem("pageID");

    if (prevPageID) {
        [home, about, whole30, contact].forEach(section =>{
            if (section.id === prevPageID)
                changePage(section);
        });
    }
}

function toggleMenu(){

    if (isMenuShowing)
        closeMenu();
    else
        openMenu();
}


function closeMenu(){
    menuButton.classList ="fa fa-bars fa-4x";

    menu.style.display = "none";

    mainSection.style.opacity = "1";

    isMenuShowing = false;
}

function openMenu(){
    menuButton.classList ="fa fa-times fa-4x";

    menu.style.display = "flex";

    mainSection.style.opacity = "0.1";

    isMenuShowing = true;
}

function showHomePage(){
    changePage(home);
}

function showAboutPage(){
    changePage(about)
}

function showWhole30Page(){
    changePage(whole30);
}

function showContactPage(){
    changePage(contact);
}

function changePage(newPage){
    if (currentPage !== newPage){
        currentPage.style.display = "none";
        newPage.style.display = "block";
        currentPage = newPage;
    }
    closeMenu();
    sessionStorage.setItem("pageID", currentPage.id);
}