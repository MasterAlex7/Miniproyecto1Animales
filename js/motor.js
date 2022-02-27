var habitat = ["oceano.png", "Bamboo.jpg", "casa.png",
    "gallinero.jpg", "granja.png", "montaña.png",
    "pantano.png", "sabana.jpg",
    "Selva.jpg", ""]

var animales = ["tiburon.png", "Panda.png", "perro.png", "Gallina.png", "Cerdo.png", "cabra.png", "cocodrilo.png", "Leon.png", "Tucan.png"];

var num_random = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var contextHab = new Array();
var contextAni = new Array();
var vectorHab = new Array();
var vectorAni = new Array();

window.onload = function () {
    iniciarImagenes();
    eventosDragDrop();
}

function iniciarImagenes() {
    num_random = num_random.sort((a, b) => 0.5 - Math.random());
    for (var i = 0; i < 3; i++) {
        x = i;
        vectorHab[x] = new Image();
        vectorAni[x] = new Image();
        var ambiente = document.getElementById("habitad" + (i + 1));
        var animal = document.getElementById("animal" + (i + 1));
        asignarHab(ambiente, x);
        asignarAnimal(animal, x);
    }
}

function asignarHab(ambiente, x) {
    contextHab[x] = ambiente.getContext("2d");
    //vectorImg[i] = new Image();
    vectorHab[x].addEventListener('load', function () {
        contextHab[x].drawImage(vectorHab[x], 0, 0, 200, 200)
    }, false);
    vectorHab[x].src = 'media/Habitat/' + habitat[num_random[x]]; // Set source path
}

function asignarAnimal(animal, x) {
    contextAni[x] = animal.getContext("2d");
    //vectorImg[i] = new Image();
    vectorAni[x].addEventListener('load', function () {
        contextAni[x].drawImage(vectorAni[x], 0, 0, 200, 200)
    }, false);
    vectorAni[x].src = 'media/Animales/' + animales[num_random[x]]; // Set source path
}

function eventosDragDrop() {

}