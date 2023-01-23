const techLogos = document.querySelectorAll(".tech-logo");
techLogos.forEach(logo => {
    logo.addEventListener("mouseenter", () => {
        logo.style.display = "block";
    });
    logo.addEventListener("mouseleave", () => {
        logo.style.display = "none";
    });
});


function showPopout() {
    var popoutContainer = document.querySelector(".popout-container");
    if (popoutContainer.style.display === "none") {
        popoutContainer.style.display = "block";
    } else {
        popoutContainer.style.display = "none";
    }
}