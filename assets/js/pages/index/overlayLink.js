
let listOfOverlays = document.querySelector("#sampleList").querySelectorAll("li")

listOfOverlays.forEach(overlay => {
    overlay.addEventListener("mouseenter", () => {
        let arrow = overlay.querySelector(".arrowUp")
        arrow.style.transform = "translate(3px, -10px)"
        // overlay.style.transform = "translate(3px, -20px)"
        arrow.style.filter = "invert(75%) sepia(100%) saturate(4560%) hue-rotate(-10deg) brightness(120%) contrast(105%)"
        
    })
    overlay.addEventListener("mouseleave", () => {
        let arrow = overlay.querySelector(".arrowUp")
        arrow.style.transform = "translate(0px, 0px)"
        // overlay.style.transform = "translate(0px, 0px)"
        arrow.setAttribute("fill", "red")
        arrow.style.filter = "invert(1)"
    })
})