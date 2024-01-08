const hover = () => {
    document.addEventListener('mouseover', function(event) {
        var rectangleContract = document.getElementsByClassName("contract__rectangle")
        var cardContract = document.getElementsByClassName("contract__cards__card")
        var rectanglePriem = document.getElementsByClassName("priem__rectangle")
        var cardPriem = document.getElementsByClassName("priem__cards__card")
        var rectangleOtziv = document.getElementsByClassName("otziv__rectangle")
        var cardOtziv = document.getElementsByClassName("otziv__cards__info")

        // Секция contract
        if (event.target.className == "contract__cards__card"){
            var targetElement = event.target;
            var targetElementId = targetElement.getAttribute('id');
            for (var i = 0; i < 3; i++) {
                var cardId = cardContract[i].getAttribute('id');
                if (cardId == targetElementId){
                    var Id = cardId;
                    break;
                }
            }
            targetElement.addEventListener('mouseenter', function(e){ // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
                e.target.style.backgroundColor = '#21A0AA'; // Выставляем цвет
                if (Id == "card1"){
                    rectangleContract[0].style.backgroundColor = 'rgba(33, 160, 170, 0.33)';
                }
                if (Id == "card2"){
                    rectangleContract[1].style.backgroundColor = 'rgba(33, 160, 170, 0.33)';
                }
                if (Id == "card3"){
                    rectangleContract[2].style.backgroundColor = 'rgba(33, 160, 170, 0.33)';
                }
            });
            
            targetElement.addEventListener('mouseleave', function(e){ // И ещё обработчик mouseleave - при "уходе" курсора с элемента
                e.target.style.backgroundColor = ''; // Убираем выданный цвет\
                if (Id == "card1"){
                    rectangleContract[0].style.backgroundColor = '';
                }
                if (Id == "card2"){
                    rectangleContract[1].style.backgroundColor = '';
                }
                if (Id == "card3"){
                    rectangleContract[2].style.backgroundColor = '';
                }
            });
        }
        if (event.target.className == "contract__rectangle"){
            var targetElement = event.target;
            var targetElementId = targetElement.getAttribute('id');
            for (var i = 0; i < 3; i++) {
                var rectangleId = rectangleContract[i].getAttribute('id');
                if (rectangleId == targetElementId){
                    var Id = rectangleId;
                    break;
                }
            }
            targetElement.addEventListener('mouseenter', function(e){ // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
                e.target.style.backgroundColor = 'rgba(33, 160, 170, 0.33)'; // Выставляем цвет
                if (Id == "rectangle1"){
                    cardContract[0].style.backgroundColor = '#21A0AA';
                    cardContract[0].style.color = 'red';
                    cardContract[0].children.item(1).style.color = '#FFF';
                    cardContract[0].children.item(0).style.color = '#FFF';
                }
                if (Id == "rectangle2"){
                    cardContract[1].style.backgroundColor = '#21A0AA';
                    cardContract[1].children.item(1).style.color = '#FFF';
                    cardContract[1].children.item(0).style.color = '#FFF';
                }
                if (Id == "rectangle3"){
                    cardContract[2].style.backgroundColor = '#21A0AA';
                    cardContract[2].children.item(1).style.color = '#FFF';
                    cardContract[2].children.item(0).style.color = '#FFF';
                }
            });
            
            targetElement.addEventListener('mouseleave', function(e){ // И ещё обработчик mouseleave - при "уходе" курсора с элемента
                e.target.style.backgroundColor = ''; // Убираем выданный цвет\
                if (Id == "rectangle1"){
                    cardContract[0].style.backgroundColor = '';
                    cardContract[0].children.item(1).style.color = '';
                    cardContract[0].children.item(0).style.color = '';
                }
                if (Id == "rectangle2"){
                    cardContract[1].style.backgroundColor = '';
                    cardContract[1].children.item(1).style.color = '';
                    cardContract[1].children.item(0).style.color = '';
                }
                if (Id == "rectangle3"){
                    cardContract[2].style.backgroundColor = '';
                    cardContract[2].children.item(1).style.color = '';
                    cardContract[2].children.item(0).style.color = '';
                }
            });
        }
        // Секция priem
        if (event.target.className == "priem__cards__card"){
            var targetElement = event.target;
            var targetElementId = targetElement.getAttribute('id');
            for (var i = 0; i < 3; i++) {
                var cardId = cardPriem[i].getAttribute('id');
                if (cardId == targetElementId){
                    var Id = cardId;
                    break;
                }
            }
            targetElement.addEventListener('mouseenter', function(e){ // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
                e.target.style.border = '1px solid #21A0AA'; // Выставляем цвет
                if (Id == "card4"){
                    rectanglePriem[0].style.backgroundColor = 'rgba(33, 160, 170, 0.33)';
                }
                if (Id == "card5"){
                    rectanglePriem[1].style.backgroundColor = 'rgba(33, 160, 170, 0.33)';
                }
                if (Id == "card6"){
                    rectanglePriem[2].style.backgroundColor = 'rgba(33, 160, 170, 0.33)';
                }
            });
            
            targetElement.addEventListener('mouseleave', function(e){ // И ещё обработчик mouseleave - при "уходе" курсора с элемента
                e.target.style.border = '1px solid #CBCCCE'; // Убираем выданный цвет\
                if (Id == "card4"){
                    rectanglePriem[0].style.backgroundColor = '';
                }
                if (Id == "card5"){
                    rectanglePriem[1].style.backgroundColor = '';
                }
                if (Id == "card6"){
                    rectanglePriem[2].style.backgroundColor = '';
                }
            });
        }
        if (event.target.className == "priem__rectangle"){
            var targetElement = event.target;
            var targetElementId = targetElement.getAttribute('id');
            for (var i = 0; i < 3; i++) {
                var rectangleId = rectanglePriem[i].getAttribute('id');
                if (rectangleId == targetElementId){
                    var Id = rectangleId;
                    break;
                }
            }
            targetElement.addEventListener('mouseenter', function(e){ // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
                e.target.style.backgroundColor = 'rgba(33, 160, 170, 0.33)'; // Выставляем цвет
                if (Id == "rectangle4"){
                    cardPriem[0].style.backgroundColor = '#21A0AA';
                    cardPriem[0].style.color = 'red';
                    cardPriem[0].children.item(1).style.color = '#FFF';
                    cardPriem[0].children.item(0).style.color = '#FFF';
                }
                if (Id == "rectangle5"){
                    cardPriem[1].style.backgroundColor = '#21A0AA';
                    cardPriem[1].children.item(1).style.color = '#FFF';
                    cardPriem[1].children.item(0).style.color = '#FFF';
                }
                if (Id == "rectangle6"){
                    cardPriem[2].style.backgroundColor = '#21A0AA';
                    cardPriem[2].children.item(1).style.color = '#FFF';
                    cardPriem[2].children.item(0).style.color = '#FFF';
                }
            });
            
            targetElement.addEventListener('mouseleave', function(e){ // И ещё обработчик mouseleave - при "уходе" курсора с элемента
                e.target.style.backgroundColor = ''; // Убираем выданный цвет\
                if (Id == "rectangle4"){
                    cardPriem[0].style.backgroundColor = '';
                    cardPriem[0].children.item(1).style.color = '';
                    cardPriem[0].children.item(0).style.color = '';
                }
                if (Id == "rectangle5"){
                    cardPriem[1].style.backgroundColor = '';
                    cardPriem[1].children.item(1).style.color = '';
                    cardPriem[1].children.item(0).style.color = '';
                }
                if (Id == "rectangle6"){
                    cardPriem[2].style.backgroundColor = '';
                    cardPriem[2].children.item(1).style.color = '';
                    cardPriem[2].children.item(0).style.color = '';
                }
            });
        }
        // Секция otziv
        if (event.target.className == "otziv__cards__info"){
            var targetElement = event.target;
            var targetElementId = targetElement.getAttribute('id');
            for (var i = 0; i < 3; i++) {
                var cardId = cardOtziv[i].getAttribute('id');
                if (cardId == targetElementId){
                    var Id = cardId;
                    break;
                }
            }
            targetElement.addEventListener('mouseenter', function(e){ // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
                if (Id == "card7"){
                    rectangleOtziv[0].style.background = 'rgba(241, 109, 34, 0.33)';
                }
                if (Id == "card8"){
                    rectangleOtziv[1].style.background = 'rgba(241, 109, 34, 0.33)';
                }
                if (Id == "card9"){
                    rectangleOtziv[2].style.background = 'rgba(241, 109, 34, 0.33)';
                }
            });
            
            targetElement.addEventListener('mouseleave', function(e){ // И ещё обработчик mouseleave - при "уходе" курсора с элемента
                if (Id == "card7"){
                    rectangleOtziv[0].style.background = '';
                }
                if (Id == "card8"){
                    rectangleOtziv[1].style.background = '';
                }
                if (Id == "card9"){
                    rectangleOtziv[2].style.background = '';
                }
            });
        }
    });
}
hover()


