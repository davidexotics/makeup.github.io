const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    console.log(visibility);

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

document.querySelectorAll(".image-container img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".popup-image").style.display = 'block';
        document.querySelector(".popup-image img").src = image.getAttribute("src");    
    }
});

document.querySelector(".popup-image").onclick = () => {
    document.querySelector(".popup-image").style.display = 'none';
};