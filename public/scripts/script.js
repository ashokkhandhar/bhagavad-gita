const body = document.body;
body.dataset.theme = JSON.parse(localStorage.getItem("theme")) || "light";

if(body.dataset.theme === "dark") {
    document.querySelector(".light-icon").classList.add("active");
} else {
    document.querySelector(".dark-icon").classList.add("active");
}

function toggleTheme(){
    if(body.getAttribute("data-theme") === "dark"){
        body.setAttribute("data-theme", "light");
        document.querySelector(".dark-icon").classList.add("active");
        document.querySelector(".light-icon").classList.remove("active");
        localStorage.setItem("theme", JSON.stringify(body.dataset.theme));
    }
    else {
        body.setAttribute("data-theme", "dark");
        document.querySelector(".light-icon").classList.add("active");
        document.querySelector(".dark-icon").classList.remove("active");
        localStorage.setItem("theme", JSON.stringify(body.dataset.theme));
    }
}