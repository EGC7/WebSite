
// window.addEventListener("load", () =>{
//     const hash = window.location.hash;

//     if(hash){
//         const target = document.querySelector(hash);
//         if(target){
//             target.scrollIntoView({behavior: "smooth"});
//         }
//     }
// }) Era Pra Fazer A Animação Na Hora de Trocar a Página, Mas Acho Melhor Deixar Sem Mesmo;

const midiaList = document.querySelector("#midias");
const avaliableColor = document.querySelector("#color");
const overlaySample1 = document.querySelector("#overlaySample1");
const overlaySample2 = document.querySelector("#overlaySample2");
const overlaySample3 = document.querySelector("#overlaySample3");
const samplesLinks = ["../templates/projects.html#project1", "../templates/projects.html#project2", "../templates/projects.html#project3"];

function getHourInBrasil(){    
    const nowDate = new Date();
    const options = {timeZone : 'America/Sao_Paulo', year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    const brDate = new Intl.DateTimeFormat('pt-BR', options).format(nowDate);
    const hourNow = (brDate[39].toString())+(brDate[40].toString()); 
    return hourNow;
}

function windowLocation(link, sout){
    window.location.href = link;
    console.log(sout);
}

if ((getHourInBrasil() < 12 && getHourInBrasil() > 7) || (getHourInBrasil < 22 && getHourInBrasil() > 12) ){
    avaliableColor.style.background = "green";
    console.log("Disponível");
} else{
    avaliableColor.style.background = "red";
    console.log("Indisponível");
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

overlaySample1.addEventListener("click", () => {
    windowLocation(samplesLinks[0], "overlaySample1");
})
overlaySample2.addEventListener("click", () => {
    windowLocation(samplesLinks[1], "overlaySample2");
})
overlaySample3.addEventListener("click", () => {
    windowLocation(samplesLinks[2], "overlaySample3");
})

midiaList.children[0].addEventListener("click", () => {
    windowLocation("https://www.instagram.com/gc.edua/", "inst location");
})

midiaList.children[1].addEventListener("click", () => {
    windowLocation("https://github.com/EGC7?tab=repositories", "git location");
})

midiaList.children[2].addEventListener("click", () => {
    windowLocation("https://www.linkedin.com/in/eduardo-cajueiro-1b0366337")
})
