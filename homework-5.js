
// (3) Создание функции, которая принимает 
//     два параметра: город и температуру

function greet(city, temperature) {
  console.log(`Сейчас в ${city}, температура - ${temperature} градусов по Цельсию.`)
}
greet("Москве", "15");


// (4) Создание переменной и функции с одним аргументом

const LIGHT_SPEED = 299792458;

let lightSpeed = 299792458;

if (lightSpeed > 299792458) {
    console.log("Сверхсветовая скорость")
} else if (lightSpeed === 299792458) {
    console.log("Скорость света")
} else {
    console.log("Субсветовая скорость")
}


// (5) Создание переменнной №1 и №2. Создание функции, которая
//     принмает один один параметр 

let fabric = "Шелк"
console.log(fabric);
let price = 100000
console.log(price);

const buyFabric = (budget) => {
  if (budget >= price) {
    console.log(`${fabric} приобретен. Спасибо за покупку!`);
  } else {
    let difference = price - budget;
    console.log(`Вам не хватает ${difference}, пополните балланс.`);
  }
}


// (6) Создание и именование функции

const reviewList = () => {
  console.log("Список продуктов"); 
}


// (7) Созднаие трех переменных 

let announcement = "Встреча состоится 18 марта 2026г." 
  console.log(announcement);

const aboutMe = "Я мусульманка, делаю дизайн для презентаций. Мне 39 лет."
  console.log(aboutMe);
  
let portfolio = "Портфолио моих работ."
  console.log(portfolio);
  






