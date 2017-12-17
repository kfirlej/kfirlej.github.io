'use strict';

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log(document.documentElement.parentNode); //zwraca rodzica dla pierwszyDiv - #document
console.log(document.documentElement.parentElement); //zwraca rodzica dla pierwszyDiv - null

console.log(pierwszyDiv.childNodes); //zwraca dzieci elementy HTML i wszystko co w nich zawarte

console.log(pierwszyDiv.children); //zwraca tylko dzieci elementy HTML
console.log(pierwszyDiv.children[3]); //zwraca konkretne dzieci elementy HTML

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);


var pierwszyDivChild = pierwszyDiv.children[1];
console.log(pierwszyDivChild.nextElementSibling);
console.log(pierwszyDivChild.previousElementSibling);


var childNodesDiva = pierwszyDiv.childNodes;
childNodesDiva.forEach(function(element){
   //console.log(element.nodeType);
    if(element.nodeType == 1) {
        console.log(element);
    }
});

