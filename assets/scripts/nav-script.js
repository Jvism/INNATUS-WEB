const btnMenu = document.querySelector("#btn-menu");
const logo = document.querySelector("#logo");
const menuPage = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {

    if(btnMenu.classList.contains("close")){

        if("INICIO" == document.querySelector(".active").textContent){
            btnMenu.classList.remove("close", "light");
            btnMenu.classList.add("open", "dark");
        }
        
        if("CONTACTO" == document.querySelector(".active").textContent){1
            btnMenu.classList.remove("close", "x-dark");
            btnMenu.classList.add("open", "dark");
        }

        logo.classList.remove("logo-light");
        logo.classList.add("logo-dark");

        menuPage.classList.remove("close-nav");
        menuPage.classList.add("open-nav")
    }

    else{

        if("INICIO" == document.querySelector(".active").textContent){
            btnMenu.classList.remove("open", "dark");
            btnMenu.classList.add("close" , "light");
        }
        if("CONTACTO" == document.querySelector(".active").textContent){

            btnMenu.classList.remove("open", "dark");
            btnMenu.classList.add("close", "x-dark");
        }

        logo.classList.remove("logo-dark");
        logo.classList.add("logo-light");

        menuPage.classList.remove("open-nav");
        menuPage.classList.add("close-nav")
    }
})