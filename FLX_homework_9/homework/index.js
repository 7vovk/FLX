// Task 1
function findType() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        array.push(typeof arguments[i]);
    }
    return array;
}
findType(null, 5, "hello");

//Task 2
function executeforEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}
executeforEach([1, 2, 3], function (el) {
    console.log(el)
});

//Task 3
function mapArray(array, func) {
    let newArray = [];
    executeforEach(array, function (el) {
        newArray.push(func(el));
    });
    return newArray;
}
mapArray([2, 5, 8], function (el) {
    return el + 3;
});

//Task 4
function filterArray(array, func) {
    let filter = [];
    executeforEach(array, function (el) {
        if (func(el)) {
            filter.push(el);
        }
    });
    return filter;
}
filterArray([2, 5, 8], function (el) {
    return el > 3
});

//Task 5
let data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];
function getAmountOfAdultPeople(array) {
    let age = [];
    filterArray(array, function (person) {
        if (person.age >= 18) {
            age.push(person);
        }
    });
    return age.length;
}
getAmountOfAdultPeople(data);

//Task 6
function getGreenAdultBananaLovers(array) {
    let greenAdultBananaLover = [];
    filterArray(array, function (person) {
        if (person.age >= 18 && person.eyeColor === "green" && person.favoriteFruit === "banana") {
            greenAdultBananaLover.push(person.name);
        }
    });
    return greenAdultBananaLover;
}
getGreenAdultBananaLovers(data);

// Task 7
function keys(array) {
    let keys = [];
    for (let key in array) {
        if (array.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

// Task 8
function values(array) {
    let values = [];
    for (let value in array) {
        if (array.hasOwnProperty(value)) {
            values.push(array[value]);
        }
    }
    return values;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});

// Task 9
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function showFormattedDate(date) {
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    return `Date: ${day} of ${month}, ${year}`
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

// Task 10
function isEvenYear(date) {
    if (date.getFullYear() % 2) {
        return false;
    } else {
        return true;
    }
}
isEvenYear(new Date('2019-01-27T01:10:00'));

// Task 11
function isEvenMonth(date) {
    if (date.getMonth() % 2) {
        return true;
    } else {
        return false;
    }
}
isEvenMonth(new Date('2019-02-27T01:10:00'));