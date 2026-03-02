// Пункт 3. Объект с моими данными

const profile = {
  name: "Hadidzha",
  age: 39,
  country: "Belarus",
  city: "Minsk",
  maritalStatus: "divorced",
  children: 6
};


// Пункт 4. Объект с данными об автомобиле и доп свойством

const carData = {
  brand: "Toyota",
  model: "Land Cruiser",
  year: 2026,
  color: "Brown",
  transmission: "Automatic",
};

carData.owner = profile;


// Пункт 5. Написать функцию, принимающую аргументом объектом пункт 4

const addSpeed = (carData) => {
  if (!carData.maxSpeed) {
    carData.maxSpeed = "200км/ч";
  }
};


// Пункт 6. Написать функцию, которая получает первым 
// аргументом - объект, вторым-свойство

const showObjectProperty = (obj, key) => {
  console.log(obj [key]);
};


// Пункт 7. Создать массив, с названиями продруктов

const products = [ "Шелк", "Хлопок", "Барахат" ];


// Пункт 8. Создать массив из обьектов 

const classicsBooks = [
  {
    title: "Портрет Дориана Грея",
    author: "Оскар Уайлд",
    year: 1890,
    genre: "Роман"
  },
  {
    title: "Фауст",
    author: "Иоганн Гете",
    year: 1808,
    genre: "Трагедия"
  },
  {
    title: "Сто лет одиночества",
    author: "Габриэль Маркес",
    year: 1967,
    genre: "Роман"
  }
];

classicsBooks.push({
  title: "Старик и море",
  author: "Эрнест Хемингуэй",
  year: 1952,
  genre: "Повесть"
});


// Пункт 9. Создание еще одного массива и объединение 
//двух массивов в один

const scienceFictionBooks = [
  {
    title: "Путешествие к центру Земли",
    author: "Жюль Верн",
    year: 1864,
    genre: "Научная фантастика"
  },
  {
    title: "451 градус по Фаренгейту",
    author: "Рэй Бредбери",
    year: 1953,
    genre: "Научная фантастика"
  }];
 
  const library = [...classicsBooks, ...scienceFictionBooks];
  
  
  // Пункт 10. Написать функцию, которая принимает массив 
  // сущностей с пункта 9 

const getMarkRareBooks = (booksArray) => {
  return booksArray.map((book) => ({
    ...book,
    isRare: book.year > 2000,
  }));
};

  const updatedLibrary = getMarkRareBooks(library);