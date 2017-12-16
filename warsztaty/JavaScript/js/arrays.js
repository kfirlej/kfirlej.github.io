'use strict'

var imiona = ['Monika', 'Krystian', 'Łukasz'];

console.log(imiona[0]);

imiona[3] = 'Ola'; //dodatkowa wartosc
imiona[2] = 'Wojtek'; //podmienia wartosc we wskazanym indeksie
imiona.push('Konrad'); //wartosc wstawiona na koncu

console.log(imiona);

//imiona.pop(); //usuwa ostatni element
var ostatniElement = imiona.pop(); //usuwa ostatni element i podaje ktory

console.log(ostatniElement);
console.log(imiona);

console.log(imiona.unshift('Robert')); //dodaje Roberta i podaje dlugosc tablicy (ilosc elementow)

console.log(imiona.shift()); //usuwa z poczatku tablicy i podaje usunieta wartosc

console.log(imiona.length); //podaje (zwraca) dlugosc tablicy (ilosc elementow)

/*console.log(imiona.join()); // wypisze imiona po kolei
console.log(imiona.join("-")); // wypisze imiona z - pomiedzy
console.log(imiona.join("+")); // wypisze imiona z + pomiedzy*/

imiona.reverse(); //odwraca kolejnosc

console.log(imiona);

imiona.sort();

var liczby = [1, 2, 0, 10, 12, 100, 55]

liczby.sort();

console.log(liczby);























