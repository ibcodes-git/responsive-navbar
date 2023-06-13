const nav = document.querySelector(".nav"),
searchIcon = document.querySelector("#search-icon"),
navOpen = document.querySelector(".nav-open"),
navClose = document.querySelector(".nav-close");

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    if(nav.classList.contains("openSearch")) {
        searchIcon.classList.replace("uil-search", "uil-times")
    } else {
        searchIcon.classList.replace("uil-times", "uil-search")
        nav.classList.remove("openNav");  }
});

navOpen.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search")

});
navClose.addEventListener("click", () => {
    nav.classList.remove("openNav");
});


