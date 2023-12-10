const hover = () => {
    document.addEventListener('mouseover', function(event) {
        var rectangle = document.getElementsByClassName("contract__rectangle")
        var card = document.getElementsByClassName("contract__cards__card")
        if (event.target.className == "contract__cards__card"){
            var targetElement = event.target;
            var targetElementId = targetElement.getAttribute('id');
            for (var i = 0; i < 3; i++) {
                var cardId = card[i].getAttribute('id');
                if (cardId == targetElementId){
                    var Id = cardId;
                }
            }
            targetElement.addEventListener('mouseenter', function(e){ // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
                e.target.style.backgroundColor = '#21A0AA'; // Выставляем цвет
                if (Id == "card1"){
                    rectangle[0].style.backgroundColor = 'rgba(33, 160, 170, 0.33)';
                }
                if (Id == "card2"){
                    rectangle[1].style.backgroundColor = 'rgba(33, 160, 170, 0.33)';
                }
                if (Id == "card3"){
                    rectangle[2].style.backgroundColor = 'rgba(33, 160, 170, 0.33)';
                }
            });
            
            targetElement.addEventListener('mouseleave', function(e){ // И ещё обработчик mouseleave - при "уходе" курсора с элемента
                e.target.style.backgroundColor = ''; // Убираем выданный цвет\
                if (Id == "card1"){
                    rectangle[0].style.backgroundColor = '';
                }
                if (Id == "card2"){
                    rectangle[1].style.backgroundColor = '';
                }
                if (Id == "card3"){
                    rectangle[2].style.backgroundColor = '';
                }
            });
        }
        if (event.target.className == "contract__rectangle"){
            var targetElement = event.target;
            var targetElementId = targetElement.getAttribute('id');
            for (var i = 0; i < 3; i++) {
                var rectangleId = rectangle[i].getAttribute('id');
                if (rectangleId == targetElementId){
                    var Id = rectangleId;
                }
            }
            targetElement.addEventListener('mouseenter', function(e){ // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
                e.target.style.backgroundColor = 'rgba(33, 160, 170, 0.33)'; // Выставляем цвет
                if (Id == "rectangle1"){
                    card[0].style.backgroundColor = '#21A0AA';
                    card[0].style.color = 'red';
                    card[0].children.item(1).style.color = '#FFF';
                    card[0].children.item(0).style.color = '#FFF';
                }
                if (Id == "rectangle2"){
                    card[1].style.backgroundColor = '#21A0AA';
                    card[1].children.item(1).style.color = '#FFF';
                    card[1].children.item(0).style.color = '#FFF';
                }
                if (Id == "rectangle3"){
                    card[2].style.backgroundColor = '#21A0AA';
                    card[2].children.item(1).style.color = '#FFF';
                    card[2].children.item(0).style.color = '#FFF';
                }
            });
            
            targetElement.addEventListener('mouseleave', function(e){ // И ещё обработчик mouseleave - при "уходе" курсора с элемента
                e.target.style.backgroundColor = ''; // Убираем выданный цвет\
                if (Id == "rectangle1"){
                    card[0].style.backgroundColor = '';
                    card[0].children.item(1).style.color = '';
                    card[0].children.item(0).style.color = '';
                }
                if (Id == "rectangle2"){
                    card[1].style.backgroundColor = '';
                    card[1].children.item(1).style.color = '';
                    card[1].children.item(0).style.color = '';
                }
                if (Id == "rectangle3"){
                    card[2].style.backgroundColor = '';
                    card[2].children.item(1).style.color = '';
                    card[2].children.item(0).style.color = '';
                }
            });
        }
    });
}
hover()


