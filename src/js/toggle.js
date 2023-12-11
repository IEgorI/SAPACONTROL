const toggle = () => {
    var circle = document.getElementsByClassName('banner__Circle');
    var line = document.getElementsByClassName('banner__Line');
    var input = document.getElementsByClassName('banner__input');
    circle[0].addEventListener('mousedown', function(e){ // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
        // e.target.style.margin = '47px 0px 0px 150px'; // Выставляем цвет
        line[0].style.width = '150px';
    });
}
toggle();