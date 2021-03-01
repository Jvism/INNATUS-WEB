window.addEventListener("load", () => {

    const imgCover = document.getElementById("img-cover");
    const titlesClt = document.getElementById("titles-clt");
    const imgBg = document.getElementById("bg-clt");

    // asignamos las imagenes iniciales 

    let heightImg = imgCover.clientHeight;
    let widthImg = imgCover.clientWidth;

    let heightImgBg = imgBg.clientHeight;
    let widthImgBg = imgBg.clientWidth;

    data.collections.forEach( (collection,index) => {

        if(index == 0){
            imgBg.innerHTML += `
                            <div 
                                class="bg-clt-${collection.id}"
                                style="background: url(../assets/img/collections/${collection.id}/${collection.collection[collection.imgSelected].url});
                                width:${widthImgBg}; 
                                height:${heightImgBg};
                                background-position: center;
                                background-size: cover;
                                position: absolute;")
                            ></div> `

            imgCover.innerHTML += `
                            <div 
                                class="cover-clt"
                                style="background: url(../assets/img/collections/${collection.id}/${collection.collection[14].url});
                                background-position: center;
                                background-size: cover;
                                position: absolute;")
                            ></div> `
    
            titlesClt.innerHTML += `
                            <div class="title-clt ">
                                <h2>${collection.name}
                                    <span id="year" class="year">${collection.year}</span>
                                </h2>
                            </div>`
        }else{
            imgBg.innerHTML += `
                            <div 
                                class="bg-clt-${collection.id}"
                                style="background: url(../assets/img/collections/${collection.id}/${collection.collection[collection.imgSelected].url});
                                width:0; 
                                height:${heightImgBg};
                                background-position: center;
                                background-size: cover;
                                position: absolute;")
                            ></div> `

            imgCover.innerHTML += `
                            <div 
                                class="cover-clt" 
                                style="background: url(../assets/img/collections/${collection.id}/${collection.collection[0].url});
                                background-position: center;
                                background-size: cover;
                                position: absolute;")
                            ></div> `
    
            titlesClt.innerHTML += `
                            <div class="title-clt">
                                <h2 style="opacity: 1;">${collection.name}
                                    <span id="year" class="year">${collection.year}</span>
                                </h2>
                            </div>`
                            
        }
        
    });

    animationSelectCollection(0);

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

        if( canScroll){

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

            animationSelectCollection(selectCollection);
        }

        setTimeout(function(){
            canScroll = true;
        }, 850);
    }

    function animationSelectCollection(collection){

        let contTitleClt = document.querySelectorAll(".title-clt");
        let imgCover = document.querySelectorAll(".cover-clt");

        contTitleClt.forEach( (element,index) => {
            
            if(index == collection){
                element.setAttribute("style","transform: translateY(0); opacity: 1; transition: all .9s ease;");
            }
            else{
                element.setAttribute("style","transform: translateY(100%); opacity: 0;");
            }
        })

        imgCover.forEach( (element,index) => {
            
            if(index == collection){
                element.setAttribute("style",`height:0; width:${widthImg}; transition: all .9s ease;
                                background: url(../assets/img/collections/${data.collections[index].id}/${data.collections[index].collection[2].url});
                                background-position: top;
                                background-size: 50%;
                                position: absolute;`);
            }
            else{
                element.setAttribute("style",`height: ${heightImg}; width:${widthImg};
                                background: url(../assets/img/collections/${data.collections[index].id}/${data.collections[index].collection[2].url});
                                background-position: top;
                                background-size: cover;
                                position: absolute;`);
            }
        })
    }


});