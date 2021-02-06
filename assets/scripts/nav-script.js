const btnMenu = document.querySelector("#btn-menu");
const logo = document.querySelector("#logo");
const menuPage = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {

    if(btnMenu.classList.contains("close")){
        btnMenu.classList.remove("close", "dark");
        btnMenu.classList.add("open", "light");

        logo.classList.remove("logo-light");
        logo.classList.add("logo-dark");

        menuPage.classList.remove("close-nav");
        menuPage.classList.add("open-nav")
    }

    else{
        btnMenu.classList.remove("open", "light");
        btnMenu.classList.add("close" , "dark");

        logo.classList.remove("logo-dark");
        logo.classList.add("logo-light");

        menuPage.classList.remove("open-nav");
        menuPage.classList.add("close-nav")
    }
})