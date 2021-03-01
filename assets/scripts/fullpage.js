window.addEventListener("load", function () {

	if (document.body.classList.contains("fullpage")) {

        animations(0);

		const sections = document.querySelectorAll(".section");
		const mainContainer = document.querySelector(".main-content");
        let spinValue = 0;
        let canScroll = true;


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

        function setScroll(direction) {

            if( canScroll){

                canScroll = false;

                if (direction > 0) {
                    if (spinValue < sections.length - 1) {
                        spinValue += 1;
                    }
                } else {
                    if (spinValue > 0) {
                        spinValue -= 1;
                    }
                }

                let page = 1;

                scroll_content(spinValue);
                animations(spinValue);
            }

            setTimeout(function(){
                canScroll = true;
            }, 850);
        }

		function scroll_content(count) {
			mainContainer.setAttribute(
				"style",
				"\
            -webkit-transform: translateY(-" +
					count * 100 +
					"vh);\
            -ms-transform: translateY(-" +
					count * 100 +
					"vh);\
            -o-transform: translateY(-" +
					count * 100 +
					"vh);\
            transform: translateY(-" +
					count * 100 +
					"vh);\
            "
			);
        }
        
	}
    else{
        console.log("entro");
        animations(-1);
    }
});
