
const midiaList = document.querySelector("#midias");
const sect = document.querySelectorAll("section")[1];

function windowLocation(link, sout){
    window.location.href = link;
    console.log(sout);
}

if (window.innerWidth <= 540){
    const clickIndicator1 = document.createElement("div");
    const clickIndicator2 = document.createElement("div");
    const clickIndicator3 = document.createElement("div");
    clickIndicator1.classList.add("clickIndicator");
    clickIndicator2.classList.add("clickIndicator");
    clickIndicator3.classList.add("clickIndicator");
    overlaySample1.appendChild(clickIndicator1);
    overlaySample2.appendChild(clickIndicator2);
    overlaySample3.appendChild(clickIndicator3);
}

midiaList.children[0].addEventListener("click", () => {
    windowLocation("index.html", "home location");
})

midiaList.children[1].addEventListener("click", () => {
    windowLocation("https://www.instagram.com/gc.edua/", "inst location");
})

midiaList.children[2].addEventListener("click", () => {
    windowLocation("https://github.com/EGC7?tab=repositories", "git location");
})

midiaList.children[3].addEventListener("click", () => {
    windowLocation("https://www.linkedin.com/in/eduardo-cajueiro-1b0366337", "likedin location")
})


window.addEventListener("scroll", () => {
    const targetWindow = window.innerHeight * 0.15;
    if (scrollY > targetWindow){
        sect.style.top = "20%"
    } else {
        sect.style.top = "60%";
    }
})