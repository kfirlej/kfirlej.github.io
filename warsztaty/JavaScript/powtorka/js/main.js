/*class Ogloszenia {

    constructor(tytul, opis, cena, kontakt, kategoria) {
        this.tytul = tytul;
        this.cena = cena;
        this.opis = opis;
        this.kontakt = kontakt;
        this.kategoria = kategoria;

    }
    
    zmienKontakt(tel){
        this.kontakt = tel;
    }
    
    wyswietlTytul() {
        console.log(this.tytul)
    }
    
}



var ogloszenie1 = new Ogloszenia ("Mieszkanie na sprzedaż", 300000, "Dwa pokoje z kuchnia, bez dzikich lokatorow", "123456789", "Nieruchomosc");

var ogloszenie2 = new Ogloszenia ("Sprzedam Opla", 40000, "Trzyletni, bezwypadkowy, pierwszy wlasciciel", "987654321", "Motoryzacja");


console.log(ogloszenie1);
console.log(ogloszenie2);

ogloszenie1.zmienKontakt("789456123");
console.log(ogloszenie1);*/


var przyciski = document.querySelectorAll(".btn");
console.log(przyciski);

for (var i = 0; i < przyciski.length; i++) {
    przyciski[i].addEventListener("click", function () {
        console.log(this.innerHTML);
    });
}

// iteracja po wlasciwosci elementu

for (var i in ogloszenie1) {
    console.log(ogloszenie[1]);
}

































