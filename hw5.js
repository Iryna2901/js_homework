var services = {
  стрижка: "60 грн",
  гоління: "80 грн",
  "Миття голови": "100 грн",
  price() {
    let sum = 0;
    for (let key in this) {
      if (typeof this[key] === "string") {
        let price = Number.parseFloat(this[key]);
        sum += price;
      }
    }
    return sum;
  },
  minPrice() {
    let min = Infinity;
    for (let key in this) {
      if (typeof this[key] === "string") {
        let price = parseFloat(this[key]);
        if (price < min) {
          min = price;
        }
      }
    }
    return min;
  },
  maxPrice() {
    let max = -Infinity;
    for (let key in this) {
      if (typeof this[key] === "string") {
        let price = parseFloat(this[key]);
        if (price > max) {
          max = price;
        }
      }
    }
    return max;
  },
};

services["Розбити скло"] = "200 грн";
services["Педикюр"] = "50 грн";
services["Манікюр"] = "70 грн";

price = services.price();
console.log(`Загальна вартість послуг: ${price} грн`);
minPrice = services.minPrice();
maxPrice = services.maxPrice();
console.log(`Найдешевша послуга: ${minPrice} грн`);
console.log(`Найдорожча послуга: ${maxPrice} грн`);
