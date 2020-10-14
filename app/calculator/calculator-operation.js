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

var display = "0";
var expression = "";
var memory = "0";
var isOperatorPressed = false;
var isPlusMinusPressed = false;
var isOpeningBracketPressed = false;

function processbuttonPressEvent(input){

    if (input == "C") {
        display = "0";
        expression = "";
        isOperatorPressed = false;
        isPlusMinusPressed = false;
        isOpeningBracketPressed = false;

    } else if (input == "CE") {
        display = "0";
        isPlusMinusPressed = false;
        isOpeningBracketPressed = false

    } else if (input == "MR") {
        display = memory;
        isOperatorPressed = false;

    } else if (input == "MC") {
        memory = "0";
        $(".calculator-memory").text("");

    } else if (input == "M+") {
        memory = add(memory, display);
        $(".calculator-memory").text("M");

    } else if ("0123456789.".includes(input)) {
        if (display == "0" || isOperatorPressed || isOpeningBracketPressed) {
            if(isOpeningBracketPressed){
                expression += display;
            }

            display = "";
            isOperatorPressed = false;
            isOpeningBracketPressed = false;
        }
        display += input;

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

    } else if (input == "±") {
        display = "-" + display;
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

function trimDisplay(display) {
    if (display > 99999999 || display < -99999999) {
        return "Error";
    } else if (display.toString().length > 9) {
        return display.toString().substr(0, 9);
    } else {
        return display;
    }
}