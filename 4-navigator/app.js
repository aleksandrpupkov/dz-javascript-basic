/*
Написать код, рассчитывающий дистанцию о объекта:
- addressLat - адрес назначения lat (нпример:10)
- addressLong - адрес назначения long
- positionLat - текущее положение пользователя lat
- positionLong - текущее положение пользовател long

В результате на основе этих координат нужно посчитать расстояние от текущего месторасположения до назначения.

В git создать папку: 4-navigator
*/

let positionLat = 2;
let positionLong = 4;
let addressLat = 8;
let addressLong = 13;

let coordinatesLat = (addressLat - positionLat)**2 ;
let coordinatesLong = (addressLong - positionLong)**2 ;

let calculation = (coordinatesLat + coordinatesLong);

console.log(`Расстояние от текущего месторасположения до назначения будет равен: ${Math.sqrt(calculation)}`);