if (window.matchMedia("(min-width: 770px)").matches){
    const listOfButtons = document.querySelectorAll(".buttonsMax")

    let circleMax = document.createElement("div")
    let circleMin = document.createElement("div")

    circleMax.style.width = "60px";
    circleMax.style.height = "60px";
    circleMin.style.width = "10px";
    circleMin.style.height = "10px";

    circleMax.style.border = "1px solid white";
    circleMax.style.borderRadius = "100%";
    circleMin.style.background = "wheat";
    circleMin.style.borderRadius = "100%";

    circleMax.style.position = "absolute";
    circleMax.style.transition = "all .3s ease-out";
    circleMin.style.position = "absolute";
    circleMin.style.transition = "all .1s ease-out";

    circleMax.style.overflow = "hidden";
    // circleMax.style.zIndex = "-1";
    circleMin.style.overflow = "hidden";
    // circleMin.style.zIndex = "-1";

    circleMax.style.pointerEvents = "none";
    circleMin.style.pointerEvents = "none";

    circleMax.style.left = `0`;
    circleMax.style.top = `0`;
    circleMin.style.left = `0`;
    circleMin.style.top = `0`;

    circleMax.style.display = "none";
    circleMin.style.display = "none";



    document.addEventListener("DOMContentLoaded", () => {
        let X = document.querySelector("section").offsetWidth;
        let Y = document.querySelector("section").offsetHeight;

        circleMax.style.display = "inherit"
        circleMin.style.display = "inherit"

        document.querySelector("section").appendChild(circleMax);
        document.querySelector("section").appendChild(circleMin);
        
        circleMax.style.transform = `translate(${X/2}px, ${Y/2}px)`;
        circleMin.style.transform = `translate(${X/2}px, ${Y/2}px)`;

    });

    document.addEventListener("mousemove", (e) => {
        let mouseX = e.pageX;
        let mouseY = e.pageY;

        let wid1 = circleMax.offsetWidth;
        let hei1 = circleMax.offsetHeight;

        let wid2 = circleMin.offsetWidth;
        let hei2 = circleMin.offsetHeight;

        circleMax.style.transform = `translate(${mouseX - (wid1/2)}px, ${mouseY - (hei1/2)}px)`;
        circleMin.style.transform = `translate(${mouseX - (wid2/2)}px, ${mouseY - (hei2/2)}px)`;
    });

    listOfButtons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            circleMax.style.transition = "all .1s ease-out";
            circleMax.style.width = "15px";
            circleMax.style.height = "15px";
            circleMax.style.border = "4px solid white";

            circleMin.style.width = "15px";
            circleMin.style.height = "15px";
            circleMin.style.background = "wheat";
            button.style.cursor = "none";
        });

        button.addEventListener("mouseleave", () => {
            circleMax.style.transition = "all .3s ease-out";
            circleMax.style.width = "60px";
            circleMax.style.height = "60px";
            circleMax.style.background = "transparent";
            circleMax.style.border = "1px solid white";

            circleMin.style.width = "10px";
            circleMin.style.height = "10px";
            circleMin.style.background = "wheat";
            circleMin.style.border = "none";

            button.style.cursor = "auto";
        });
    })
}