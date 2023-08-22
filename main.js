let div = document.getElementById('screen_top');
let resultDisplay = document.getElementById('screen_bottom');
let results = 0;

// button press handlers
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

document.getElementById('mod').onclick = function () {

    div.textContent += ' % ';
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


// solve any equation from the text Content
let displayResults = document.getElementById('equals').onclick = function () {

    let items = div.textContent.split(' ');

    let answer = parseFloat(items[0]);

    if (!(items[0] > 0)) {
        answer = 0;
    }

    for (let i = 0; i < items.length; i++) {
        if (items[i] == '+') {
            answer += parseFloat(items[i + 1]);
        }
        if (items[i] == '-') {
            answer -= parseFloat(items[i + 1]);
        }
        if (items[i] == 'x') {
            answer *= parseFloat(items[i + 1]);
        }
        if (items[i] == '/') {
            answer /= parseFloat(items[i + 1]);
        }
        if (items[i] == '%') {
            answer %= parseFloat(items[i + 1]);
        }
    };

    resultDisplay.textContent = answer;
    resultDisplay.setAttribute('style', 'font-size: 1.5em; color:white;');
    div.setAttribute('style', 'font-size: 2.5em; color:white;');
}

// keyboard event handlers
document.addEventListener('keydown', e => {
    e.preventDefault;
    console.log(e);
    if (e.code == 'Digit1') {
        div.textContent += 1;
    };

    if (e.code == 'Digit2') {
        div.textContent += 2;
    };

    if (e.code == 'Digit3') {
        div.textContent += 3;
    };

    if (e.code == 'Digit4') {
        div.textContent += 4;
    };

    if (e.code == 'Digit5' && e.ctrlKey == false) {
        div.textContent += 5;
    };

    if (e.code == 'Digit6') {
        div.textContent += 6;
    };

    if (e.code == 'Digit7') {
        div.textContent += 7;
    };

    if (e.code == 'Digit8') {
        div.textContent += 8;
    };

    if (e.code == 'Digit9') {
        div.textContent += 9;
    };

    if (e.code == 'Equal') {
        div.textContent += ' + ';
    };

    if (e.code == 'Minus') {
        div.textContent += ' - ';
    };

    if (e.code == 'KeyX') {
        div.textContent += ' x ';
    };

    if (e.code == 'Slash') {
        div.textContent += ' / ';
    };

    if (e.code == 'Digit5' && e.ctrlKey == true) {
        div.textContent += ' % ';
    };

    if (e.code == 'Delete') {
        div.textContent = '';
        resultDisplay.textContent = '';
        results = 0;
    };

    if (e.code == 'Backspace') {
        let text = div.textContent;
        text = text.substring(0, text.length - 1);
        div.textContent = text;
    };

    if (e.code == 'Period') {
        div.textContent += '.';
    };

    if (e.code == 'Digit0') {
        div.textContent += 0;
    };

    if (e.code == 'Enter') {
        displayResults();
    };

});
