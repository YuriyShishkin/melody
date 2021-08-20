$(document).ready(function () {
  //console.log('sait ready');
  let currentFloor = 2; // переменная где хранится текущий этаж
  let floorPath = $('.home__image path'); // каждый отдельный этаж в svg
  let counterUp = $('.counter__up'); // кнопка увеличения этажа
  let counterDown = $('.counter__down'); // кнопка уменьшения этажа
  let usCurrentFloor;
  // функция при наведении курсора на этаж
  floorPath.on('mouseover', function () {
    //console.log($(this).attr('data-floor'));
    floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
    //console.log(currentFloor);
    $('.counter').text(currentFloor); // записываем значение этажа в счетчик справа
  });
  // отслеживаем клик по кнопке вверх
  counterUp.on('click', function () {
    if (currentFloor < 18) { // проверяем значение этажа, оно не должно быть больше 18
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажом, чтобы было 01 а не 1
      $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
    }
  });
  // отслеживаем клик по кнопке вниз
  counterDown.on('click', function () {
    if (currentFloor > 02) { // проверяем значение этажа, оно не должно быть меньше 02
      currentFloor--; // отнимаем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажом, чтобы было 01 а не 1
      $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
    }
  });
});
