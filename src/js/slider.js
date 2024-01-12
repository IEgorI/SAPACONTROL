const slider = () => {
    var count0 = 0;
    var count1 = 1;
    var count2 = 2;
    document.addEventListener('click', function (event) {
        var otziv__cards = document.getElementsByClassName("otziv__cards");

        console.log(otziv__cards[0].children[0].style.order);
        console.log(otziv__cards[0].children[1].style.order);
        console.log(otziv__cards[0].children[2].style.order);

        if (event.target.className == "otziv__arrowLeft") {
            otziv__cards[0].children[count0].style.order = 2;
            otziv__cards[0].children[count1].style.order = 0;
            otziv__cards[0].children[count2].style.order = 1;

            if (count0 == 2) {
                count0 = 0;
            }
            else {
                count0 += 1;
            }

            if (count1 == 2) {
                count1 = 0;
            }
            else {
                count1 += 1;
            }

            if (count2 == 2) {
                count2 = 0;
            }
            else {
                count2 += 1;
            }
        }

        if (event.target.className == "otziv__arrowRight") {
            otziv__cards[0].children[count0].style.order = 1;
            otziv__cards[0].children[count1].style.order = 2;
            otziv__cards[0].children[count2].style.order = 0;

            if (count0 == 0) {
                count0 = 2;
            }
            else {
                count0 -= 1;
            }

            if (count1 == 0) {
                count1 = 2;
            }
            else {
                count1 -= 1;
            }

            if (count2 == 0) {
                count2 = 2;
            }
            else {
                count2 -= 1;
            }
        }

    });
}
slider();