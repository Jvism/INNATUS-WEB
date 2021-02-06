window.addEventListener("load", function () {
	if (document.body.classList.contains("fullpage")) {

		const sections = document.querySelectorAll(".section");
		const mainContainer = document.querySelector(".main-content");
        let spinValue = 0;
        let canScroll = true;

		window.addEventListener("mousewheel", function (e) {

            if( canScroll){

                canScroll = false;

                if (e.deltaY > 0) {
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
            }

            setTimeout(function(){
                canScroll = true;
            }, 850);

		});

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
});
