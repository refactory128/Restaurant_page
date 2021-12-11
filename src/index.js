import './style.css';
import Logo from './img/Logo.jpeg';
import backgroundImageSrc from './img/Welcome.jpeg';

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
    welcomeTab.innerHTML = "Welcome";
    nav.appendChild(welcomeTab);

    const menuTab = document.createElement("li");
    menuTab.innerHTML = "Menu";
    nav.appendChild(menuTab);


    return nav;
}

function welcomePage(){
    const page = document.createElement("div");
    page.classList.add('page');

    const backgroundImage = new Image();
    backgroundImage.src = backgroundImageSrc;
    page.appendChild(backgroundImage);
  
    return page;
}


const content = document.querySelector("#content");

content.appendChild(navBar());
content.appendChild(welcomePage());
