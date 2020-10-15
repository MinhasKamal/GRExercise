function processKeyPressEvent(keyCode){
    var input = "";
    if (keyCode >= 40 && keyCode <= 57 && keyCode != 44) {
        input = String.fromCharCode(keyCode);
    } else if (keyCode == 190) {
        input = ".";
    } else if (keyCode == 13 || keyCode == 61) {
        input = "=";
    } else if (keyCode == 99) {
        input = "C";
    }

    return processbuttonPressEvent(input);
}

var display;
var expression;
var memory;
var isOperatorPressed;
var isPlusMinusPressed;
var isOpeningBracketPressed;
var isClosingBracketPressed;

var digitCount = 0;
function processbuttonPressEvent(input){
    if ("0123456789".includes(input)) {
        digitCount++;
    } else {
        digitCount = 0;
    }


    if (input == "C") {
        clearCalculation();

    } else if (input == "CE") {
        clearEntry();

    } else if (input == "MR") {
        display = memory;
        isOperatorPressed = false;

    } else if (input == "MC") {
        clearMemory();

    } else if (input == "M+") {
        memory = add(memory, display);
        $(".calculator-memory").text("M");
        isOperatorPressed = true;

    } else if ("0123456789.".includes(input)) {
        if (display == "0" || isOperatorPressed || isOpeningBracketPressed || isClosingBracketPressed) {
            if(isOpeningBracketPressed || isClosingBracketPressed){
                expression += display;
            }

            display = "";
            isOperatorPressed = false;
            isOpeningBracketPressed = false;
            isClosingBracketPressed = false;
        }

        if (input != "." || !display.includes(".")) {
            if (digitCount < 9) {
                display += input;
            }
        }

    } else if (input == "X") {
        console.log("This will hide the calculator.");

    } else if (input == "Transfer Display") {
        console.log("This will transfer result to text-box.");

    } else if ("+-*/=".includes(input)) {
        if (isOperatorPressed && expression!= "") {
            expression = expression.substr(0, expression.length-1) + input
        } else {
            if (isPlusMinusPressed) {
                expression += "(" + display + ")" + input;
                isPlusMinusPressed = false;
            } else {
                expression += display + input;
            }
        }

        display = infixEvaluation(expression.substr(0, expression.length-1), display);
        isOperatorPressed = true;
        isClosingBracketPressed = false;

        if (input == "=") {
            console.log(expression);
            expression = "";
        }

    } else if (input == "(") {
        display = input;
        isOpeningBracketPressed = true;

    } else if (input == ")") {
        expression += display;
        display = input;
        isClosingBracketPressed = true;

    } else if (input == "±") {
        display = -parseFloat(display);
        isPlusMinusPressed = true;

    } else if (input == "√") {
        display = sqrt(display);

    }

    console.log(expression);
    return trimDisplay(display);
}

function infixEvaluation(expression, display) {
    try {
        return eval(expression)
    } catch (error) {
        console.log(error);
        return display;
    }
}
function add (a, b) {
    return parseFloat(a) + parseFloat(b);
}
function sqrt (a) {
    return Math.sqrt(parseFloat(a));
}

function trimDisplay(number) {

    if(isNaN(number) || number == 0) {
        return number;

    } else if (number > 99999999 || number < -99999999) {
        clearCalculation();
        return "Error";

    } else if (number <= 0.0000001 && number >= -0.0000001) {
        return "0";

    } else if (number > 0 && number.toString().length > 10) {
        return number.toString().substr(0, 10);

    } else if (number < 0 && number.toString().length > 11) {
        return number.toString().substr(0, 11);

    } else {
        return parseFloat(number);

    }
}

function clearAll(){
    clearCalculation();
    clearMemory();
    $(".calculator-result").text(display);
}
function clearCalculation(){
    clearEntry();
    expression = "";
    isOperatorPressed = false;
}
function clearEntry(){
    display = "0";
    isPlusMinusPressed = false;
    isOpeningBracketPressed = false;
    isClosingBracketPressed = false;
}
function clearMemory(){
    memory = "0";
    $(".calculator-memory").text("");
}
