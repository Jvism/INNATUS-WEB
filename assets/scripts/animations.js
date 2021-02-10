function animations(){

    if("INICIO" == document.querySelector(".active").textContent){
        
        window.addEventListener("load" , function (){

            let aosLeft = document.querySelectorAll(".aos-left");
            let aosFadeIn = document.querySelectorAll(".aos-fadein");
            let aosBgX = document.querySelectorAll(".aos-bgX");

            aosLeft.forEach(e => {
                e.classList.remove("aos-left");
                e.classList.add("aos-view");
            });

            aosFadeIn.forEach(e => {
                e.classList.remove("aos-fadein");
                e.classList.add("aos-view");
            });

            aosBgX.forEach(e => {
                e.classList.remove("aos-bgX");
            });


        });

    }
    else if("COLECCION" == document.querySelector(".active").textContent){

    }
    else if("CONTACTO" == document.querySelector(".active").textContent){

        window.addEventListener("load" , function (){

            document.body.setAttribute("style",
                "background: var(--bg-tertiary-gradient)"
            );

        });


    }
}

animations();