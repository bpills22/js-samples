const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
addDishToCourse(courseName, dishName, dishPrice) {
  const dish = {
    name: dishName,
    price: dishPrice,
  };
  //console.log(this._courses, courseName);
  return this._courses[courseName].push(dish);
},

getRandomDishFromCourse(courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},

generateRandomMeal() {
  const appetizers = this.getRandomDishFromCourse('appetizers');
  const mains = this.getRandomDishFromCourse('mains');
  const desserts = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizers.price + mains.price + desserts.price;
  return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}, and the total meal price is $${totalPrice}.`;
}
};

menu.addDishToCourse('appetizers', 'Garden Salad', 4.75);
menu.addDishToCourse('appetizers', 'Minestron Soup', 4.25);
menu.addDishToCourse('appetizers', 'Loaded Nachos', 7.99);
menu.addDishToCourse('mains', 'Hanger Steak', 22.50);
menu.addDishToCourse('desserts', 'Key Lime Pie', 4.00);

menu.addDishToCourse('appetizers', 'Buffalo Wings', 6.85);
menu.addDishToCourse('mains', 'Chicken Parmesan', 17.50);
menu.addDishToCourse('desserts', 'Chocolate Cake', 4.00);
menu.addDishToCourse('desserts', 'Creme Brulee', 8.25);

menu.addDishToCourse('appetizers', 'Garlic Bread', 5.25);
menu.addDishToCourse('mains', 'Spaghetti Carbonara', 15.00);
menu.addDishToCourse('desserts', 'Ice Cream', 4.79);
menu.addDishToCourse('mains', 'Cedar Plank Salmon', 15.25);
menu.addDishToCourse('mains', 'Deep Dish Pepperoni Pizza', 14.65);


let meal = menu.generateRandomMeal();
console.log(meal);
