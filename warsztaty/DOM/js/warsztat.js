'use strict';
/*
var button = document.getElementsByTagName('input')[0];

function ustawTlo() {
    button.value = 'Kliknij aby zmienic kolor';
    var paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function (element, index) {
        if (index % 2 == 0) {
            element.style.background = 'red';
        } else {
            element.style.background = 'yellow';
        }
    });

    button.removeEventListener('click', ustawTlo);
    button.addEventListener('click', usunTlo);
}

function usunTlo() {
    button.value = 'Kliknij aby cofnac zmiany';
    var paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function (element, index) {
        element.style.background = '';
    });
    button.removeEventListener('click', usunTlo);
    button.addEventListener('click', ustawTlo);

}

button.addEventListener('click', ustawTlo); */

//pobierzImie(event)

function pobierzImie(event) {
    event.preventDefault();
    console.log(document.getElementsByTagName('input')[0].value);
    console.log(document.getElementsByTagName('input')[1].value);
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; inputs.length < i; i++) {
        if(inputs[i].value == 'Submit') {
            continue;
        }
    }
}



















