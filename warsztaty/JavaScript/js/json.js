'use strict';

var jsonOsoby = {
    'osoby': [
        {
            imie: 'Krystian',
            nazwisko: 'Dziopa',
            wzrost: 180,
            zainteresowania: [
                {
                    nazwa: 'podroze'
                },
                {
                    nazwa: 'gotowanie'
                }
            ]
        },
        {
            imie: 'Jan',
            nazwisko: 'Kowalski',
            wzrost: 170,
            zainteresowania: [
                {
                    nazwa: 'pilka'
                },
                {
                    nazwa: 'samochody'
                }
            ]
        },
        {
            imie: 'Ewelina',
            nazwisko: 'Duda',
            wzrost: 160,
            zainteresowania: [
                {
                    nazwa: 'kosmetyka'
                },
                {
                    nazwa: 'konie'
                }
            ]
        }
    ]
}

console.log(jsonOsoby);

//jsonOsoby.osoby[0].zainteresowania.forEach(function (element, index) {
//    console.log(element.nazwa);
//});

jsonOsoby.osoby.forEach(function (element,
index) {
    console.log(element.imie, element.wzrost);
});

























