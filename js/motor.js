var habitat = ["oceano.png", "Bamboo.jpg", "casa.png",
    "gallinero.jpg", "granja.png", "montaña.png",
    "pantano.png", "sabana.jpg",
    "Selva.jpg", ""]

var animales = ["tiburon.png", "Panda.png", "perro.png", "Gallina.png", "Cerdo.png", "cabra.png", "cocodrilo.png", "Leon.png", "Tucan.png"];

var num_random = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // 0, 2 ,4, 6
var habRand=[0,1,2];

var contextHab = new Array();
var contextAni = new Array();
var vectorHab = new Array();
var vectorAni = new Array();

var imagen_Habitad = null;


window.onload = function () {
    iniciarImagenes();
    eventosDragDrop();
}

function iniciarImagenes() {
    num_random = num_random.sort((a, b) => 0.5 - Math.random());
    habRand = habRand.sort((a, b) => 0.5 - Math.random());
    
    for (var i = 0; i < 3; i++) {
        x = i;
        document.getElementById("animal"+(i+1)).src = '../media/Animales/'+animales[num_random[x]];
        vectorHab[x] = new Image();
        var ambiente = document.getElementById("habitad" + (i + 1));
        asignarHab(ambiente, x);
    }
}

function asignarHab(ambiente, x) {
    contextHab[x] = ambiente.getContext("2d");
    //vectorImg[i] = new Image();
    vectorHab[x].addEventListener('load', function () {
        contextHab[x].drawImage(vectorHab[x], 0, 0, 200, 200)
    }, false);
    vectorHab[x].src = 'media/Habitat/' + habitat[num_random[habRand[x]]]; // Set source path
}


function eventosDragDrop() {
    var animales_img = document.querySelectorAll('#animales-imagenes > img');
    for (var i = 0; i < animales_img.length; i++) {
        animales_img[i].addEventListener('dragstart', arrastrado, false);
        animales_img[i].addEventListener('dragend', finalizado, false);
    }
    var habitat_img = document.querySelectorAll('#habitat-imagenes > canvas');
    for (var j = 0; j < habitat_img.length; j++) {
        habitat_img[j] = addEventListener('dragenter', eventoEnter, false);
        habitat_img[j] = addEventListener('drop', soltado,false);
        habitat_img[j] = addEventListener('dragover', eventoOver,false);
    }
}

function arrastrado(e) {
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
    e.dataTransfer.setDragImage(e.target, 100, 100);
}

function finalizado(e) {
    var elemento = e.target;
    elemento.style.visibility = 'hidden';
}

function eventoEnter(e){
    console.log("soy el evento dragenter");
    e.preventDefault();
}

function eventoOver(e){
    console.log("soy el evento dragover");
    e.preventDefault();
}

function soltado(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    var elemento = document.getElementById(id);
    var posx= e.pageX; //- //habitat_img[0].offsetLeft; // coordenadas x para el soltado
    var posy = e.pageY; //- //habitat_img[0].offsetTop;
    contextHab[0].drawImage(elemento, posx, posy);
   
}