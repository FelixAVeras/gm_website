const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add("show");
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.remove("show");
        backToTopButton.classList.add("hidden");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});