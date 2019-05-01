const $result = $("#result");
const $logs = $("#logs");

const $zero = $("#zero");
const $one = $("#one");
const $two = $("#two");
const $tree = $("#tree");
const $four = $("#four");
const $five = $("#five");
const $six = $("#six");
const $seven = $("#seven");
const $eight = $("#eight");
const $nine = $("#nine");
const $dot = $("#dot");

const $addition = $("#addition");
const $subtraction = $("#subtraction");
const $multiplication = $("#multiplication");
const $division = $("#division");

const $equal = $("#equal");
const $percent = $("#percent");
const $memAdd = $("#memAdd");
const $memClear = $("#memClear");
const $clear = $("#clear");
const $backspace = $("#backspace");
const $minus = $("#minus");
const $sqrt = $("#sqrt");

let expression = '', prevExpression = '', memory = '', temp = '';

// Key events
$('html').keyup(function (e) {
    if (e.keyCode === 8) removeLastChar()
});

$(document).keypress(function (event) {
    event.preventDefault();
    let key = event.keyCode || event.charCode;
    if (key === 46) dot();
    else if (key === 48) zero();
    else if (key === 49) { clearPrevEqual(); addNumber(1) }
    else if (key === 50) { clearPrevEqual(); addNumber(2) }
    else if (key === 51) { clearPrevEqual(); addNumber(3) }
    else if (key === 52) { clearPrevEqual(); addNumber(4) }
    else if (key === 53) { clearPrevEqual(); addNumber(5) }
    else if (key === 54) { clearPrevEqual(); addNumber(6) }
    else if (key === 55) { clearPrevEqual(); addNumber(7) }
    else if (key === 56) { clearPrevEqual(); addNumber(8) }
    else if (key === 57) { clearPrevEqual(); addNumber(9) }
    else if (key === 43) addOperator('+');
    else if (key === 45) addOperator('-');
    else if (key === 42) addOperator('*');
    else if (key === 47) addOperator('/');
    else if (key === 95) minus();
    else if (key === 115) sqrt();
    else if (key === 13) equal();
    else if (key === 109) memoryAdd();
    else if (key === 10) memoryClear();
    else if (key === 37) percent();
    else if (key === 99) { expression = '';temp = '';$result.val('');$logs.val(''); }
});

// Numbers:
$dot.click(dot);
$zero.click(zero);
$one.on("click", function () {
    clearPrevEqual();
    addNumber(1);
});
$two.on("click", function () {
    clearPrevEqual();
    addNumber(2);
});
$tree.on("click", function () {
    clearPrevEqual();
    addNumber(3);
});
$four.on("click", function () {
    clearPrevEqual();
    addNumber(4);
});
$five.on("click", function () {
    clearPrevEqual();
    addNumber(5);
});
$six.on("click", function () {
    clearPrevEqual();
    addNumber(6);
});
$seven.on("click", function () {
    clearPrevEqual();
    addNumber(7);
});
$eight.on("click", function () {
    clearPrevEqual();
    addNumber(8);
});
$nine.on("click", function () {
    clearPrevEqual();
    addNumber(9);
});

// Operators:
$addition.on("click", function () {
    addOperator('+');
});
$subtraction.on("click", function () {
    addOperator('-');
});
$multiplication.on("click", function () {
    addOperator('*');
});
$division.on("click", function () {
    addOperator('/');
});

$percent.click(percent);
$backspace.click(removeLastChar);
$minus.click(minus);
$sqrt.click(sqrt);


//Memory buttons:
$memAdd.click(memoryAdd);
$memClear.click(memoryClear);


$clear.on('click', function () {
    expression = '';
    temp = '';
    $result.val('');
    $logs.val('');
});
$equal.click(equal);


//Functions
function equal() {
    if ($result.val()[$result.val().length - 1] === '+' || $result.val()[$result.val().length - 1] === '-' ||
        $result.val()[$result.val().length - 1] === '*' || $result.val()[$result.val().length - 1] === '/') {
        if (temp === '') {
            temp = $result.val().slice(0, -1);
        }
        expression = $result.val() + temp;
        count($result.val() + temp);
    } else {
        count($result.val());
    }

    if ($result.val() === '') {
        $result.val('0');
    } else {
        $result.val(Math.round(eval(expression) * 100) / 100);
    }
    prevExpression = expression;
    expression = '';
}

function count(number) {
    expression = number;
    $logs.val(expression);
}

function addNumber(number) {
    $result.val(function (i, val) {
        if (~$result.val().slice(-1) === '+' || ~$result.val().slice(-1) === '-' || ~$result.val().slice(-1) === '*' ||
            ~$result.val().slice(-1) === '/') {
            if (val[0] === '-') {
                return val = '(' + number + ')';
            } else {
                return val = number;
            }

        } else if ($result.val() === '0') {
            return '0.' + number;
        } else {
            return val + number;
        }
    });
    $logs.val($result.val());
}

function addOperator(operator) {
    $result.val(function (i, val) {
        if (val[val.length - 1] === operator) {
            if (temp === '') {
                temp = val.slice(0, -1);
            }
            return val + temp;
        }
        if ($result.val() === '') {
            if (operator === '-') {
                return operator;
            } else {
                return $result.val();
            }
        } else if (val[val.length - 1] === '+' || val[val.length - 1] === '-' || val[val.length - 1] === '*' ||
            val[val.length - 1] === '/' || $result.val().length === 0) {
            return val.slice(0, -1) + operator;
        } else {
            return val + operator;
        }
    });
    $logs.val($result.val());
}

function clearPrevEqual() {
    if ($logs.val() === prevExpression && prevExpression !== '') {
        if (~$result.val().indexOf("+") || ~$result.val().indexOf("-") || ~$result.val().indexOf("*") ||
            ~$result.val().indexOf("/")) {
            temp = '';
            $logs.val($result.val());
        }
        temp = '';
        $result.val('');
        prevExpression = '';
    }
}

function dot() {
    clearPrevEqual();
    $result.val(function (i, val) {
        if (val.length === 0) {
            return '0.'
        } else if (~$result.val().indexOf(".") && !(~$result.val().indexOf("+") || ~$result.val().indexOf("-") ||
            ~$result.val().indexOf("*") || ~$result.val().indexOf("/"))) {
            return val;
        } else {
            return val + '.';
        }
    });
    $logs.val($result.val());
}

function zero() {
    clearPrevEqual();
    $result.val(function (i, val) {
        if (val === '0') {
            return '0.0'
        } else {
            return val + '0';
        }
    });
    $logs.val($result.val());
}

function percent() {
    if ($result.val() === '') {
        $result.val('0');
    }
    $result.val(function (i, val) {
        if (~$result.val().indexOf("+") || ~$result.val().indexOf("-") || ~$result.val().indexOf("*") ||
            ~$result.val().indexOf("/") || $result.val().length === 0) {
            return val;
        } else {
            return val / 100;
        }
    });
}

function memoryAdd() {
    if ($result.val() === '') {
        $result.val('');
    }
    $result.val(function (i, val) {
        if (val[0] === '-') {
            memory = '(' + val + ')';
            return val;
        } else if (~$result.val().slice(-1) === '+' || ~$result.val().slice(-1) === '-' ||
            ~$result.val().slice(-1) === '*' || ~$result.val().slice(-1) === '/' || $result.val().length === 0) {
            memory = val.slice(0, -1);
            return val;
        } else {
            memory = val;
            return val;
        }
    });
}

function memoryClear() {
    clearPrevEqual();
    addNumber(memory);
    memory = '';
}

function removeLastChar() {
    $result.val(function (i, val) {
        return val.slice(0, -1)
    });
}

function minus() {
    if ($result.val() === '') {
        return $result.val();
    }
    if ($result.val()[0] === '-') {
        $result.val(function (i, val) {
            return val.slice(1);
        });
    } else if ($result.val()[0] !== '0') {
        $result.val(function (i, val) {
            return '-' + val;
        });
    }
}

function sqrt() {
    if ($result.val() === '') {
        $result.val('0');
    }
    $result.val(function (i, val) {
        if (~$result.val().indexOf("+") || ~$result.val().indexOf("-") || ~$result.val().indexOf("*") ||
            ~$result.val().indexOf("/") || $result.val().length === 0) {
            return val;
        } else {
            val = Math.sqrt(val);
            return Math.round(val * 100) / 100;
        }
    });
}