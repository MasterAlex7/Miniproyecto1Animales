var habitat = ["oceano.png", "Bamboo.jpg", "casa.png",
    "gallinero.jpg", "granja.png", "montaña.png",
    "pantano.png", "sabana.jpg",
    "Selva.jpg", ""]

var animales = ["Delfin", "Panda", "Perro", "Gallina", "Cerdo", "Cabra", "Cocodrilo", "Leon", "Tucan"];

var num_random = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // 0, 2 ,4, 6
var habRand = [0, 1, 2];

var contextHab = new Array();
var contextAni = new Array();
var vectorHab = new Array();
var vectorAni = new Array();
var animales_nombre = new Array();
var habitad_info = new Array();
var arreglo_hab = new Array();

//Manejo de los puntos
var puntos = 0;


var imagen_Habitad = null;
var elemento = null;
var x = null;

window.onload = function () {
    if (localStorage.nivel == "3") {
        puntos = localStorage.nivel;
        var aux = localStorage.getItem('Animales');
        num_random = JSON.parse(aux);
    } else {
        num_random = num_random.sort((a, b) => 0.5 - Math.random());
    }
    iniciarImagenes();
    eventosDragDrop();
}

function iniciarImagenes() {
    habRand = habRand.sort((a, b) => 0.5 - Math.random());

    for (var i = 0; i < 3; i++) {
        x = i;
        var animal_src = document.getElementById("animal" + (i + 1));
        animal_src.src = '../media/Animales/' + animales[num_random[x]] + '.png';
        animales_nombre[x] = new Object();
        animales_nombre[x].id = "animal" + (i + 1);
        animales_nombre[x].valor = num_random[x];
        animal_src.addEventListener('dragstart', e => {
            console.log('Arraste de animal');
        });
        vectorHab[x] = new Image();
        arreglo_hab[x] = document.getElementById("habitad" + (i + 1));
        habitad_info[x] = new Object();
        habitad_info[x].id = "habitad" + (i + 1);
        habitad_info[x].posicion = x;
        arreglo_hab[x].addEventListener('dragover', e => {
            e.preventDefault();
        });
        arreglo_hab[x].addEventListener('drop', e => {
            var sonido = null;
            var id_hab = e.target.id;
            var animal_drop = e.dataTransfer.getData("text");
            console.log(animal_drop);
            for (var j = 0; j < 3; j++) {
                if (animales_nombre[j].id == animal_drop) {
                    console.log("Encontrado");
                    var valor_animal = animales_nombre[j].valor;
                    found = j;
                }
                if (habitad_info[j].id == id_hab) {
                    var valor_habitad = habitad_info[j].valor;
                }
            }
            if (valor_habitad == valor_animal) {
                console.log("Animal correcto");
                e.target.appendChild(document.getElementById(animal_drop));
                sonido = 'media/Sonido/' + animales[valor_animal] + '.mp3';
                console.log(animales[valor_animal]);
                var music = new Audio(sonido);
                music.play();
                var txt = id_hab + 'txt';
                document.getElementById(txt).innerHTML = animales[valor_animal];
                document.getElementById(txt).style.visibility = 'visible';
                puntos++;
                evaluacionNivel(puntos);
            } else {
                console.log(valor_animal);
                console.log(valor_habitad);
                console.log("Animal incorrecto");
                var music = new Audio('media/Sonido/incorrecto.mp3');
                music.play();
            }
            e.preventDefault();
        });
        asignarHab(arreglo_hab[x], x);
    }
    borrarRep();
}

function asignarHab(ambiente, x) {
    ambiente.style.backgroundImage = "url(../media/Habitat/" + habitat[num_random[habRand[x]]];
    //vectorImg[i] = new Image();
    habitad_info[x].valor = num_random[habRand[x]];
}


function eventosDragDrop() {
    var animales_img = document.querySelectorAll('#animales-imagenes > img');
    for (var i = 0; i < animales_img.length; i++) {
        animales_img[i].addEventListener('dragstart', arrastrado, false);
        animales_img[i].addEventListener('dragend', finalizado, false);
    }
    var habitat_img = document.querySelectorAll('#habitat-imagenes > canvas');
}

function arrastrado(e) {
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
    e.dataTransfer.setDragImage(e.target, 100, 100);
}

function finalizado(e) {
    var elemento = e.target;
    //elemento.style.visibility = 'hidden';
}


function evaluacionNivel(puntos) {
    if (puntos == 3) {
        localStorage.nivel = puntos;
        setTimeout(() => { window.location.reload(); }, 3500);

    } else if (puntos == 6) {
        setTimeout(() => { window.location.href = "final.html"; }, 3000);
    }
}

function borrarRep(){
    if (localStorage.nivel != "3") {
        num_random.splice(0, 3)
        localStorage.setItem('Animales', JSON.stringify(num_random));
    }
}
