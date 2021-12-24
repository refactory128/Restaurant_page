import './style.css';

import backgroundImageSrc from './img/Welcome.jpeg';
import { welcomePage } from './welcomePage';
import { menuPage } from './menu';
import Logo from './img/Logo.jpeg';

function navBar(currentPage){
    const nav = document.createElement("div");
    nav.classList.add('nav');

    const myLogo = new Image();
    myLogo.src = Logo;
    nav.appendChild(myLogo);

    const ul = document.createElement("ul");
    nav.appendChild(ul);

    const welcomeTab = document.createElement("li");
    welcomeTab.innerHTML = "WELCOME";
    if(currentPage === "Welcome"){
        welcomeTab.classList.add('currentPageNavHighlight');
    }
    nav.appendChild(welcomeTab);

    welcomeTab.addEventListener("click", e =>{
        reloadPage("Welcome");
    });

    const menuTab = document.createElement("li");
    menuTab.innerHTML = "MENU";
    if(currentPage === "Menu"){
        menuTab.classList.add('currentPageNavHighlight');
    }
    nav.appendChild(menuTab);

    menuTab.addEventListener("click", e =>{
        reloadPage("Menu");
    });

    return nav;
}

function reloadPage(page){

    const content = document.querySelector("#content");
    while (content.hasChildNodes()){
        content.removeChild(content.lastChild);
    }

    //content = document.querySelector("#content");
    content.appendChild(navBar(page));


    if (page ==="Welcome"){
        content.appendChild(welcomePage());

    }
    else if(page === "Menu"){
        content.appendChild(menuPage());
 
    }
}


reloadPage("Welcome");