window.addEventListener("load", () => {
    const navbar = document.getElementById("navbar");
    navbar.setAttribute("style","transform: translateY(0); opacity: 1; transition-delay: .7s;")
});

function animations(section){

    if (document.body.classList.contains("fullpage")){
        //Establecemos la pagina
        if("INICIO" == document.querySelector(".active").textContent){
    
            //Variables
            const sculture = document.getElementById("sculture");
            const titleHeader = document.getElementById("title-header");
            const line = document.querySelectorAll("#line-header");
            const iconInsta = document.getElementById("icon-instagram");
            const iconScroll = document.getElementById("icon-scroll");
    
            if(section == 0){
                sculture.setAttribute("style","background-position: 62%; opacity: 1; transition-delay: .7s;")
                titleHeader.setAttribute("style","transform: translateX(0); opacity: 1; transition-delay: .7s;")
                
                line.forEach(e => {
                    e.setAttribute("style","height: 80%; transition-delay: .7s;")
                });
                iconInsta.setAttribute("style","transform: translateY(0); opacity: 1; transition-delay: .7s;")
                iconScroll.setAttribute("style","transform: rotate(90deg) translateX(0); opacity: 1; transition-delay: .7s;")
    
            }
    
            if(section == 1){
                sculture.setAttribute("style","background-position: 200%; opacity: 0;")
                titleHeader.setAttribute("style","background-position: 100%; opacity: 0;")
    
                line.forEach(e => {
                    e.setAttribute("style","height: 0%;")
                });
    
                iconInsta.setAttribute("style","transform: translateY(-200%); opacity: 0;")
                iconScroll.setAttribute("style","transform: rotate(90deg) translateX(-200%); opacity: 0;")
            }
    
    
    
    
    
        }
        else if("COLECCION" == document.querySelector(".active").textContent){
    
        }
        else if("CONTACTO" == document.querySelector(".active").textContent){
    
    
    
        }

    }
    else{
        
    }
}