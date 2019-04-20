let date = new Date();

class User {
    constructor(name = 'Unknown user', orderTotalPrice = 0, weekendDiscount = 0, nightDiscount = 0, bonus = 0) {
        this.name = name;
        this.orderTotalPrice = orderTotalPrice;
        this.weekendDiscount = weekendDiscount;
        this.nightDiscount = nightDiscount;
        this.bonus = bonus;
        this.discount = 0;
    }
    makeOrder() {
        let price = this.orderTotalPrice -  (this.orderTotalPrice * this.discount / 100) - this.bonus;
        price = Math.round(price * 100) / 100;
        return `Price after discount and including bonuses is ${price}`;
    }
}

//Bonus
const setBonus = user => {
    let bonusCounter = (user.orderTotalPrice - user.orderTotalPrice % 100) / 100;
    user.bonus += bonusCounter * 5;
};

//Get discount
const getDiscount = user => {
    if (date.getHours() >= 23 && date.getHours() <= 6 && date.getDay() === 6 || date.getDay() === 0) {
        user.discount = user.nightDiscount + user.weekendDiscount;
    } else if (date.getHours() >= 23 && date.getHours() <= 6) {
        user.discount = user.nightDiscount;
    } else if (date.getDay() === 6 || date.getDay() === 0) {
        user.discount = user.weekendDiscount;
    }
    console.log(`Your discount is: ${user.discount}`);
    return user.discount;
};

//Checking
const vasya = new User("Vasya", 500.55, 2, 4, 3);
console.log(vasya);

setBonus(vasya);
console.log(vasya.bonus);

getDiscount(vasya);

console.log(vasya.makeOrder());