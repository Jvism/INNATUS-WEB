window.addEventListener("load", () => {

    const imgCover = document.getElementById("img-cover");
    const titlesClt = document.getElementById("titles-clt");
    const imgBg = document.getElementById("bgs-clt");
    const contentClt = document.getElementById("content-clt");

    // asignamos las propiedades iniciales 

    let heightImg = imgCover.clientHeight;
    let widthImg = imgCover.clientWidth;

    let heightImgBg = imgBg.clientHeight;

    data.collections.forEach( async collection => {

        imgBg.innerHTML += `
                        <div class="container-bg-clt">
                            <div 
                                class="bg-clt"
                                style="background: url(../assets/img/collections/${collection.id}/${collection.collection[collection.imgSelected].url});
                                background-size: cover;")
                            ></div>
                        </div> `

        imgCover.innerHTML += `
                        <div class="container-img-clt">
                            <div 
                                class="img-clt"
                                style="background: url(../assets/img/collections/${collection.id}/${collection.collection[collection.imgSelected].url});
                                width:${widthImg}; 
                                height:${heightImg};
                                background-size: cover; 
                                background-position: right;")
                            ></div>
                        </div>  `

        titlesClt.innerHTML += `
                        <div class="title-clt ">
                            <h2>${collection.name}
                                <span id="year" class="year">${collection.year}</span>
                            </h2>
                            <div class="author-clt">
                                <span class="title-author">autor</span>
                                <span class="name-author">${collection.author}</span>
                            </div>
                        </div>`    

        contentClt.innerHTML += `
                            <div class="description-clt">
                                <p>${collection.description}</p>
                            </div>
                            `

        await animationSelectCollection(0,10);
        
    });
    
    let openClt = false;
    let canScroll = true;
    let selectCollection = 0;

    let touchStartY = 0;
    let touchEndY = 0;

    window.addEventListener("touchstart", (e) => {
        touchStartY = e.changedTouches[0].screenY;
    });
    window.addEventListener("touchend", (e) => {
        touchEndY = e.changedTouches[0].screenY;

        if (touchStartY-touchEndY > 50 || touchStartY-touchEndY < -50){

            setScroll(touchStartY-touchEndY);
        }
    });        

    window.addEventListener("mousewheel", function (e) {
        setScroll(e.deltaY);
    });

    function setScroll(direction){

        if(canScroll && !openClt){

            canScroll = false;

            if (direction > 0) {
                if ( selectCollection < data.collections.length - 1) {
                    selectCollection += 1;
                }
                else{
                    selectCollection = 0;
                }
            } else {
                if (selectCollection > 0) {
                    selectCollection -= 1;
                }
                else{
                    selectCollection = data.collections.length - 1;
                }
            }

            setTimeout(function(){


                    canScroll = true;

            }, 1000);

            animationSelectCollection(selectCollection,direction);
        }

    }

    function animationSelectCollection(collection,direction){

        const contTitleClt = document.querySelectorAll(".title-clt");
        const imgClt = document.querySelectorAll(".container-img-clt");
        const bgClt = document.querySelectorAll(".container-bg-clt")
        const nextClt = document.getElementById("nextClt");
        const selectedClt = document.getElementById("selectedClt");

        contTitleClt.forEach( (element,index) => {
            
            if(index == collection){
                element.setAttribute("style","transform: translateY(0); opacity: 1; transition: all .9s ease;");
            }
            else{
                element.setAttribute("style","transform: translateY(100%); opacity: 0;");
            }
        })

        imgClt.forEach( (element,index) => {
            
            if(index == collection){
                element.setAttribute("style",`height: ${heightImg}; width:${widthImg}; transition: all .5s ease; z-index: 1;`);
            }
            else{
                element.setAttribute("style",`height: 0; width:${widthImg}; transition-delay: 1s;`);
            }
        })

        bgClt.forEach( (element,index) => {
            
            if(index == collection){
                element.setAttribute("style",`height:${heightImgBg}; width: 100vw; transition: all .5s ease; z-index: 1;`);
            }
            else{
                element.setAttribute("style",`height:${heightImgBg}; width: 0; transition-delay: 1s;`);
            }
        })


        selectedClt.textContent = `0${collection + 1}`;

        if(collection == data.collections.length - 1){
            nextClt.textContent = `01`;
        }
        else{
            nextClt.textContent = `0${collection + 2}`;
        }
        
    }



    // coleccion abierta 

    const discover = document.getElementById("discover-button");
    const containerClt = document.getElementById("container-clt");
    const descriptionClt = document.querySelectorAll(".description-clt")
    const scrollLine = document.querySelector(".line-scroll");
    const buttonReturn = document.querySelector(".button-return");

    discover.addEventListener("click", () => {

        openClt = true;

        containerClt.setAttribute("style", "height: 200vh;");
        discover.setAttribute("style", "transform: translateY(-100%); opacity: 0; transition: all .5s ease;")

        descriptionClt.forEach( (e,index) => {

            console.log(index , selectCollection)
            if(index == selectCollection){
                e.setAttribute("style","transform: translateY(0); opacity: 1; transition-delay: .5s;")
            }
        })

        scrollLine.setAttribute("style","height: 3em;")
        buttonReturn.setAttribute("style","transform: translateX(0%); opacity: 1; pointer-events: visible;")
    })


    buttonReturn.addEventListener("click", () => {

        openClt = false;

        containerClt.setAttribute("style", "height: 100vh;");
        discover.setAttribute("style", "transform: translateY(0%); opacity: 1; transition: all .5s ease; transition-delay: .5s;")

        descriptionClt.forEach( (e,index) => {

            console.log(index , selectCollection)
            if(index == selectCollection){
                e.setAttribute("style","transform: translateY(30%); opacity: 0;")
            }
        })

        scrollLine.setAttribute("style","height: 11em;")
        buttonReturn.setAttribute("style","transform: translateX(150%); opacity: 0; pointer-events: none;")
    })

});

