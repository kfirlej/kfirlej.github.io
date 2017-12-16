'use strict';

var wzrostMateusz = 190;
var wzrostOla = 190;

//Warunek if

if (wzrostOla < wzrostMateusz) {
    //console.log('Ola jest nizsza');
}

//Warunek if else

if (wzrostOla < wzrostMateusz) {
    //console.log('Ola jest nizsza');
} else {
    //console.log('Ola nie jest nizsza');
}

//Warunek else if

if (wzrostOla < wzrostMateusz) {
    //console.log('Ola jest nizsza');
} else if (wzrostOla == wzrostMateusz) {
    //console.log('Ola jest rowna');
} else {
    //console.log('Ola jest wyższa');
}

//Warunek switch

var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        //console.log('kolor czerwony');
        break;
    case 'zielony':
        //console.log('kolor zielony');
        break;
    case 'niebieski':
        //console.log('kolor niebieski');
        break;
    default:
        //console.log('inny kolor');
}

// Petla for


console.log('Petla');

//1,2,3,4
for (var i = 1; i < 5;) {
    console.log(i++);
}

console.log('-------------------------------')

//2,3,4,5
for (var i = 1; i < 5;) {
    console.log(++i);
}

var liczby = [1, 2, 0, 10, 12, 100, 55];

for (var i = 0; i < liczby.length; i++) {
    //console.log(liczby[i]);
}


//forEach

console.log('<<Petla forEach>>');

var tablica = ['Kacper', 'Andrzej', 'Baltazar'];

tablica.forEach(function (element, index) {
    console.log('Element z indexem ' + index + ' ma wartosc ' + element)
})

console.log('<<Petla while>>')

//Petla while

var it = 10;
var flaga = true;
while(flaga) {
    console.log(it);
    if(it<5) {
        flaga = false;
    }
    it--;
}

console.log('<<Petla do...while>>');

//Petla do...while

do {
    console.log('Petla do...while');
    it--;
} while (it>0); //liczone od it--

console.log('<<Przerywanie petli>>');
console.log('break');

//Przerywanie petli - break - konczy cala petle
var a = 0;
while(a <10) {
    console.log(++a);
    if(a==5) {
        break;
    }
}

console.log('continue')

//Przerywanie petli - continue - przerywa cala iteracje

var a = 0;
while(a <10) {
    console.log(++a);
    if(a==5) {
        continue;
    }
}





















