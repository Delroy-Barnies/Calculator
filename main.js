

let num1 = 0;

let operator = '+';

let num2 = 2;

function operate(num1, operator, num2) {
    if (operator == '+') {
        return num1 + num2;
    }
    else if (operator == '-') {
        return num1 - num2;
    }
    else if (operator == 'x') {
        return num1 * num2;
    }
    else {
        return num1 / num2;
    }
}

let div = document.getElementById('screen_top');
let resultDisplay = document.getElementById('screen_bottom');
let results = 0;

document.getElementById('ac').onclick = function () {

    div.textContent = '';
    resultDisplay.textContent = '';
    results = 0;
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('c').onclick = function () {

    let text = div.textContent;
    text = text.substring(0, text.length - 1);
    div.textContent = text;
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('negative').onclick = function () {

    div.textContent += 'negative';
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('seven').onclick = function () {

    div.textContent += 7;
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('eight').onclick = function () {

    div.textContent += 8;
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('nine').onclick = function () {

    div.textContent += 9;
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('divide').onclick = function () {

    div.textContent += ' / ';
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('four').onclick = function () {

    div.textContent += 4;
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('five').onclick = function () {

    div.textContent += 5;
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('six').onclick = function () {

    div.textContent += 6;
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('multiply').onclick = function () {

    div.textContent += ' x ';
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('one').onclick = function () {

    div.textContent += 1;
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('two').onclick = function () {

    div.textContent += 2;
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('three').onclick = function () {

    div.textContent += 3;
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('minus').onclick = function () {

    div.textContent += ' - ';
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('zero').onclick = function () {

    div.textContent += 0;
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('decimal').onclick = function () {

    div.textContent += '.';
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('plus').onclick = function () {

    div.textContent += ' + ';
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

document.getElementById('equals').onclick = function () {

    let items = div.textContent.split(' ');

    let answer = parseInt(items[0]);

    for (let i = 0; i < items.length; i++) {
        if (items[i] == '+') {
            answer += parseInt(items[i + 1]);
        }
        if (items[i] == '-') {
            answer -= parseInt(items[i + 1]);
        }
        if (items[i] == 'x') {
            answer *= parseInt(items[i + 1]);
        }
        if (items[i] == '/') {
            answer /= parseInt(items[i + 1]);
        }
    };

    resultDisplay.textContent = answer;
    resultDisplay.setAttribute('style', 'font-size: 1.5em; color:white;');
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}
