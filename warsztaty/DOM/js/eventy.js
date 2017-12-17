'use strict';

function alarm(event) {
    event.preventDefault(); //zapobieganie domyslnej akcji
    console.log('kliknieto link');
    console.log(event.type);
}

var secondLink = document.getElementsByTagName('a')[1];
secondLink.onclick = alarm;

var thirdLink = document.getElementsByTagName('a')[2];
thirdLink.addEventListener('click', alarm);

thirdLink.addEventListener('click', function () {
    alarm('funkcja anonimowa'); //funkcja anonimowa, nie od usuniecia
});

thirdLink.removeEventListener('click', alarm);


function clickHeader() {
    console.log('kliknales w header');
}

document.getElementsByTagName('header')[0].onclick = clickHeader;

function clickh1(event) {
    event.stopPropagation();
    console.log('kliknales w H1');
}

document.getElementsByTagName('h1')[0].onclick = clickh1;
