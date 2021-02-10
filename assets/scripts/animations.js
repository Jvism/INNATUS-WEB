function animations(){

    if("INICIO" == document.querySelector(".active").textContent){
        
        window.addEventListener("load" , function (){

            let aosLeft = document.querySelectorAll(".aos-left");
            let aosFadeIn = document.querySelectorAll(".aos-fadein");

            aosLeft.forEach(e => {
                e.classList.remove("aos-left");
                e.classList.add("aos-view");
            });

            aosFadeIn.forEach(e => {
                e.classList.remove("aos-fadein");
                e.classList.add("aos-view");
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