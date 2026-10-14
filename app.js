const dataElement = document.getElementById('data');
const historyElement = document.getElementById('history');

function appendValue(val) {
    if (dataElement.innerText === '0' && val !== '.') {
        dataElement.innerText = val;
    } else {
        dataElement.innerText += val;
    }
}

function clearDisplay() {
    dataElement.innerText = '0';
    historyElement.innerText = '';
}

function calculate() {
    try {
        historyElement.innerText = dataElement.innerText;
        dataElement.innerText = eval(dataElement.innerText);
    } catch (error) {
        dataElement.innerText = 'Error';
    }
}