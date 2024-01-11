const click = () => {
    document.addEventListener('click', function(event) {
        var questions__open = document.getElementsByClassName("questions__open");
        var questions__dop = document.getElementsByClassName("questions__dop");
        var questions__heading = document.getElementsByClassName("questions__heading");
        var count = 1;
        if (event.target.className == "questions__image" && event.target.src !== 'http://localhost:8000/assets/images/whiteArrow.svg'){
            event.target.src = "assets/images/whiteArrow.svg"
            count += 1;
            for (var i = 0; i < 5; i++) {
                if (questions__open[i].children[0].src == 'http://localhost:8000/assets/images/whiteArrow.svg'){
                    questions__open[i].style.backgroundColor = '#F16D22';
                }   
            }

            for (var i = 0; i < 5; i++) {
                if (questions__open[i].children[0].src == 'http://localhost:8000/assets/images/whiteArrow.svg'){
                    console.log(111);
                    questions__dop[i].style.display = 'block';
                    questions__heading[i].style.color = '#F16D22';
                }   
            }
        }

        if (event.target.className == "questions__image" && event.target.src == "http://localhost:8000/assets/images/whiteArrow.svg" && count !== 2){
            event.target.src = "assets/images/open.svg"
            for (var i = 0; i < 5; i++) {
                if (questions__open[i].children[0].src == 'http://localhost:8000/assets/images/open.svg'){
                    questions__open[i].style.backgroundColor = '#FFF';
                }   
            }

            for (var i = 0; i < 5; i++) {
                if (questions__open[i].children[0].src == 'http://localhost:8000/assets/images/open.svg'){
                    questions__dop[i].style.display = 'none';
                    questions__heading[i].style.color = '#20304A';
                }   
            }
        }
    });
}
click();