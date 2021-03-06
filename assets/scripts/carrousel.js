const $ = selector => {
    return document.querySelector(selector);
};
let collectionSelected = 0;

let actImg = 0;

$('.next-button').addEventListener('click', () => {
    if ($(".hide")) {
        $(".hide").remove(); 
    }

/* Step */

    if ($(".prev")) {
        $(".prev").classList.add("hide");
        $(".prev").classList.remove("prev");
    }

    $(".act").classList.add("prev");
    $(".act").classList.remove("act");

    $(".next").classList.add("act");
    $(".next").classList.remove("next");

/* New Next */

    $(".new-next").classList.remove("new-next");

    const addedEl = document.createElement('li');

    $(".list-carousel").appendChild(addedEl);
    addedEl.classList.add("next","new-next");

    if(actImg + 1 == data.collections[collectionSelected].collection.length){
        actImg = 0;
    }
    else{
        actImg++;
    }

    let nextImg = actImg + 2;
    if(nextImg == data.collections[collectionSelected].collection.length){
        nextImg = 0;
    }
    if(nextImg == data.collections[collectionSelected].collection.length + 1){
        nextImg = 1;
    }
    if(nextImg == data.collections[collectionSelected].collection.length + 2){
        nextImg = 2;
    }

    let img = data.collections[collectionSelected].collection[nextImg].url;
    let urlImg = `../assets/img/collections/${collectionSelected + 1}/${img}`;

    $(".new-next").setAttribute("style",`background: url(${urlImg});background-position: center;
    background-size: contain;background-repeat: no-repeat;`);
});

$('.prev-button').addEventListener('click', () => {
    $(".new-next").remove();
    
/* Step */

    $(".next").classList.add("new-next");

    $(".act").classList.add("next");
    $(".act").classList.remove("act");

    $(".prev").classList.add("act");
    $(".prev").classList.remove("prev");

/* New Prev */

    $(".hide").classList.add("prev");
    $(".hide").classList.remove("hide");

    const addedEl = document.createElement('li');

    $(".list-carousel").insertBefore(addedEl, $(".list-carousel").firstChild);
    addedEl.classList.add("hide");

    if(actImg - 1 == -1){
        actImg = data.collections[collectionSelected].collection.length - 1;
    }
    else{
        actImg--;
    }


    let prevImg = actImg - 2;
    if(prevImg == -1){
        prevImg = data.collections[collectionSelected].collection.length -1;
    }
    if(prevImg == -2){
        prevImg = data.collections[collectionSelected].collection.length -2;
    }
    if(prevImg == -3){
        prevImg = data.collections[collectionSelected].collection.length -3;
    }

    let img = data.collections[collectionSelected].collection[prevImg].url;
    let urlImg = `../assets/img/collections/${collectionSelected + 1}/${img}`;

    $(".hide").setAttribute("style",`background: url(${urlImg});background-position: center;
    background-size: contain;background-repeat: no-repeat;`);
});

// funcion para instanciar imagenes

async function carousel(collection){

    collectionSelected = collection;

    const arrayList = [
        $('.hide'),
        $('.prev'),
        $('.act'),
        $('.next'),
        $('.new-next')
    ]

    let lengthData = data.collections[collection].collection.length;
    let positionImg = lengthData - 2;

    arrayList.forEach(element => {

        if(positionImg == lengthData){
            positionImg = 0;
        }

        let img = data.collections[collection].collection[positionImg].url;
        let urlImg = `../assets/img/collections/${collection + 1}/${img}`;

        element.setAttribute("style",`background: url(${urlImg});background-position: center;
        background-size: contain;background-repeat: no-repeat;`);

        positionImg += 1;
    })
}
