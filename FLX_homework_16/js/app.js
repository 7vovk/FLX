//Task 1
function assign() {
    let result = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i],
            keys = Object.keys(obj);
        for (let j = 0; j < keys.length; j++) {
            result[keys[j]] = obj[keys[j]];
        }
    }
    return result;
}

//Task 2
function Bot(params) {
    this.name = params.name;
    this.speed = params.speed;
    this.x = params.x;
    this.y = params.y;
    this.defaultX = this.x;
    this.defaultY = this.y;
    this.defaultSpeed = this.speed;
    this.previousDirection = null;
    this.movesCounter = this.defaultSpeed;
}

Bot.prototype.getSpeed = function () {
    return `${this.speed}`;
};
Bot.prototype.setSpeed = function (newSpeed) {
    this.speed = newSpeed;
};
Bot.prototype.getDefaultSpeed = function () {
    return `${this.defaultSpeed}`;
};
Bot.prototype.getCoordinates = function () {
    return {x: this.x, y: this.y};
};
Bot.prototype.setCoordinates = function (x, y) {
    this.x = x;
    this.y = y;

};
Bot.prototype.move = function (direction) {

    if (direction === 'up') {
        this.y += this.speed;
    } else if (direction === 'down') {
        this.y -= this.speed;
    } else if (direction === 'left') {
        this.x -= this.speed;
    } else if (direction === 'right') {
        this.x += this.speed;
    } else {
        this.x = this.defaultX;
        this.y = this.defaultY;
        console.log('Incorrect direction. Please write correct one (only "up", "down", "left" and "right")');
    }
};
Bot.prototype.showPosition = function () {
    return `I am ${this.constructor.name} '${this.name}'. I am located at ${this.x}:${this.y}`;
};


function Racebot(name, speed, x, y) {
    Bot.call(this, name, speed, x, y);
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;

Racebot.prototype.move = function (direction) {
    if (direction === this.previousDirection) {
        this.speed++;
    } else {
        this.speed = this.defaultSpeed;
    }
    this.previousDirection = direction;
    Bot.prototype.move.apply(this, arguments)
};


function Speedbot(name, speed, x, y) {
    Bot.call(this, name, speed, x, y);
}

Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;

Speedbot.prototype.prepareEngine = function () {

    if (this.movesCounter === this.speed) {
        this.speed += 2;
    } else {
        this.speed = this.defaultSpeed;
    }
};

Speedbot.prototype.move = function () {
    if (this.speed > this.defaultSpeed) {
        this.movesCounter = this.speed;
        Bot.prototype.move.apply(this, arguments);
        this.movesCounter--;
        this.speed--;
    } else {
        this.movesCounter = this.defaultSpeed;
        Bot.prototype.move.apply(this, arguments);
    }
};