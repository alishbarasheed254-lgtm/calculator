var currentInput = "";

function press(val) {
    if (currentInput === "0") {
        currentInput = val;
    } else {
        currentInput = currentInput + val;
    }
    document.getElementById("data").innerHTML = currentInput;
}

function clearScreen() {
    currentInput = "";
    document.getElementById("data").innerHTML = "0";
    document.getElementById("expression").innerHTML = "";
}

function calculate() {
    try {
        var answer = eval(currentInput);
        document.getElementById("expression").innerHTML = currentInput;
        document.getElementById("data").innerHTML = answer;
        currentInput = String(answer);
    } catch (err) {
        document.getElementById("data").innerHTML = "Error";
        currentInput = "";
    }
}