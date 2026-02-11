//  Покраска первой карточки

const recolorFirstCardButton = document.getElementById("recolor-first-card-button");
const firstProductCard = document.querySelector(".product-card");
const blueHashColor = "#0000ff";

recolorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = blueHashColor
});

//  Покраска всех карточек

const greenHashColor = "#00ffc3";
const productCards = document.querySelectorAll(".product-card");
const recolorAllCardsButton = document.getElementById("recolor-all-cards-button");

recolorAllCardsButton.addEventListener("click", () => {
  productCards.forEach(
    card => card.style.backgroundColor = greenHashColor
  );
});

//  Переход на страницу Google

const openGoogleButton = document.getElementById("open-google-button");

openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите перейти на сайт Google?");
  
  if (answer === true) {
    window.open("https://google.com");
  } else {
  }};

//  Вывод элемента в консоль

const mainTitleMouseover = document.querySelector(".product-card__main-title");

mainTitleMouseover.addEventListener("mouseover", (event) => {
});

//  Изменение цвета кнопки

const recolorButton = document.getElementById("recolor-button");

recolorButton.classList.add("purple-bg");
recolorButton.addEventListener("click", () => {
  recolorButton.classList.toggle("purple-bg");
  recolorButton.classList.toggle("pink-bg");
});

