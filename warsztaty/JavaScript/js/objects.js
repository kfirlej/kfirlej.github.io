'use strict';
/*
var osoba = {
    imie: 'Marcin',
    wzrost: 180,
    przedstawSie: function() {
        console.log('Mam na imie ' + this.imie + ', mam ' + this.wzrost + ' cm wzrostu');
    }
}

console.log(osoba.imie);

osoba.przedstawSie();
console.log(osoba);

osoba.nazwisko = 'Kowalski';
console.log(osoba);*/



// Klasy

class Uzytkownik {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    
    wyswietlInfo() {
        console.log('Imie: ' + this.imie + ', ' + 'Nazwisko: ' + this.nazwisko);
    }
}

var krystian = new Uzytkownik('Krystian', 'Dziopa');

krystian.wyswietlInfo();

var wojtek = new Uzytkownik('Wojtek', 'Potocki');

wojtek.wyswietlInfo();

var osoba = {
    imie: 'Marcin',
    wzrost: 180,
    przedstawSie: function() {
        console.log('Mam na imie ' + this.imie + ', mam ' + this.wzrost + ' cm wzrostu');
    }
}

/*
console.log(osoba.imie);

osoba.przedstawSie();
console.log(osoba);

osoba.nazwisko = 'Kowalski';
console.log(osoba); */















