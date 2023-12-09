const hover = () => {
    document.addEventListener('mouseover', function(event) {
        if (event.target.className == "contract__cards__card"){
            var targetElement = event.target;
            var rectangle = document.getElementsByClassName("contract__rectangle")
            var card = document.getElementsByClassName("contract__cards__card")
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
    });
}
hover()


