let active = null;

async function getRequest(url) {
    const req = await fetch(url);
    return await req.text();
}

async function setActive(elem) {
    if (active !== null) active.classList.remove("active");
    if (!elem.classList.contains("active")) elem.classList.add("active");
    
    active = elem;
    document.querySelector("#main").innerHTML = await getRequest(elem.getAttribute("page"));
}

document.querySelector("nav").querySelectorAll("li").forEach((elem) => {
    if (elem.classList.contains("active")) setActive(elem);

    elem.addEventListener("click", (event) => {
        if (elem != active) setActive(elem);
    });
});