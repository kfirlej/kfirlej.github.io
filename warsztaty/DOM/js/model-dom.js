'use strict';

/*
console.log('document');
console.log(document); //wyswietla skladnie pliku html
console.log('documentElement');
console.log(document.documentElement); //wyswietla skladnie pliku html
console.log('document.body');
console.log(document.body); //wyswietla body
console.log('document.head');
console.log(document.head); //wyswietla head
console.log(window); //log przegladarki
console.log(innerHeight); //wysokosc contentu przegladarki
console.log(outerHeight); //wysokosc okna przegladarki
*/

var parFirst = document.getElementById('parFirst');
console.log(parFirst); //wybrane po ID

var linki = document.getElementsByClassName('superLink');
console.log(linki); //wybrane po klasie

var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu); //wybrane po elemencie

var divPoID = document.querySelector('#parSecond');
console.log(divPoID); //pierwszy ID wystepujacy na stronie

var linkiPoSelektorze = document.querySelectorAll('.link');
console.log(linkiPoSelektorze); //wszystkie takie same klasy wystepujace na stronie

linkiPoSelektorze.forEach(function(link){ 
    console.log(link);
});  //linkiPoSelektorze.forEach(function(){});

for(var i = 0; i < linkiPoSelektorze.lenght; i++) {
    console.log(linkiPoSelektorze[i]);
}




























