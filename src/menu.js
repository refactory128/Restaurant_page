import imgSrc1 from './img/EggBurger.jpeg';
import imgSrc2 from './img/Sushi.jpeg';
import imgSrc3 from './img/Spaghetti.jpeg';

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

function menuPage(){
    const menu = document.createElement("div");
    content.appendChild(menu);
    menu.classList.add('menu');

    menu.appendChild(addMenuItem(imgSrc1, "Egg Burger", "this scrumptions egg burger comes with fries"));
    menu.appendChild(addMenuItem(imgSrc2, "Sushi", "this scrumptions Sushi comes with soysauce"));
    menu.appendChild(addMenuItem(imgSrc3, "Spaghetti", "this scrumptions pasta comes with sauce"));

    return menu;
}

export { menuPage };
