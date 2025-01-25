const overlaySample1 = document.querySelector("#overlaySample1");
const overlaySample2 = document.querySelector("#overlaySample2");
const overlaySample3 = document.querySelector("#overlaySample3");

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