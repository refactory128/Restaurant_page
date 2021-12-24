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

export {welcomePage};