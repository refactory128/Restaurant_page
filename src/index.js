import './style.css';
import Logo from './img/Logo.jpeg';
import backgroundImageSrc from './img/Welcome.jpeg';

import imgSrc1 from './img/EggBurger.jpeg';
import imgSrc2 from './img/Sushi.jpeg';
import imgSrc3 from './img/Spaghetti.jpeg';



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
        console.log("clicked" + e.target);
        reloadPage("Welcome");
    });

    const menuTab = document.createElement("li");
    menuTab.innerHTML = "MENU";
    if(currentPage === "Menu"){
        menuTab.classList.add('currentPageNavHighlight');
    }
    nav.appendChild(menuTab);

    menuTab.addEventListener("click", e =>{
        console.log("clicked" + e.target);
        reloadPage("Menu");
    });

    return nav;
}

function welcomePage(){
    
    const page = document.createElement("div");
    page.classList.add('welcomePage');

    const leftDiv = document.createElement("div");
    leftDiv.classList.add('leftDiv');
    page.appendChild(leftDiv);

    const rightDiv = document.createElement("div");
    rightDiv.classList.add('rightDiv');
    page.appendChild(rightDiv);

    const h1 = document.createElement("h1");
    h1.innerHTML = "WELCOME";
    rightDiv.appendChild(h1);

    const p = document.createElement("p");
    p.innerHTML = "Great Food, Good Times";
    rightDiv.appendChild(p);

    return page;
}


function addMenuItem(pictureSrc, title, description){
    const item = document.createElement("div");
    item.classList.add('menuItem');

    const picture = document.createElement("img");
    picture.src = pictureSrc;
    item.appendChild(picture);

    const itemInfo = document.createElement("div");
    item.appendChild(itemInfo);

    const h1 = document.createElement("h1");
    h1.innerHTML = title;
    itemInfo.appendChild(h1);

    const p = document.createElement("p");
    p.innerHTML = description;
    itemInfo.appendChild(p);

    return item;
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
        const menu = document.createElement("div");
        content.appendChild(menu);
        menu.classList.add('menu');

        menu.appendChild(addMenuItem(imgSrc1, "Egg Burger", "this scrumptions egg burger comes with fries"));
        menu.appendChild(addMenuItem(imgSrc2, "Sushi", "this scrumptions Sushi comes with soysauce"));
        menu.appendChild(addMenuItem(imgSrc3, "Spaghetti", "this scrumptions pasta comes with sauce"));

    }
}


reloadPage("Welcome");