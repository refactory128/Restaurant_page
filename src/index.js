import './style.css';
import Logo from './img/Logo.jpeg';
import backgroundImageSrc from './img/Welcome.jpeg';

import imgSrc1 from './img/EggBurger.jpeg';
import imgSrc2 from './img/Sushi.jpeg';
import imgSrc3 from './img/Spaghetti.jpeg';


console.log("Hello Webpack");

function navBar(){
    const nav = document.createElement("div");
    nav.classList.add('nav');

    const myLogo = new Image();
    myLogo.src = Logo;
    nav.appendChild(myLogo);

    const ul = document.createElement("ul");
    nav.appendChild(ul);

    const welcomeTab = document.createElement("li");
    welcomeTab.innerHTML = "WELCOME";
    nav.appendChild(welcomeTab);

    const menuTab = document.createElement("li");
    menuTab.innerHTML = "MENU";
    nav.appendChild(menuTab);


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

    const h1 = document.createElement("h1");
    h1.innerHTML = title;
    item.appendChild(h1);

    const p = document.createElement("p");
    p.innerHTML = description;
    item.appendChild(p);

    return item;
}


const content = document.querySelector("#content");

content.appendChild(navBar());
content.appendChild(addMenuItem(imgSrc1, "Egg Burger", "this scrumptions egg burger comes with fries"));
content.appendChild(addMenuItem(imgSrc2, "Sushi", "this scrumptions Sushi comes with soysauce"));
content.appendChild(addMenuItem(imgSrc3, "Spaghetti", "this scrumptions pasta comes with sauce"));

//content.appendChild(welcomePage());
