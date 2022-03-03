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
var animales_nombre=new Array();
var habitad_info = new Array();

var imagen_Habitad = null;
var elemento=null;
var x = null;
var acerto = false;

window.onload = function () {
    iniciarImagenes();
    eventosDragDrop();
}

function iniciarImagenes() {
    num_random = num_random.sort((a, b) => 0.5 - Math.random());
    habRand = habRand.sort((a, b) => 0.5 - Math.random());
    var arreglo_hab = new Array();
    for (var i = 0; i < 3; i++) {
        x = i;
        var animal_src=document.getElementById("animal"+(i+1));
        animal_src.src = '../media/Animales/'+animales[num_random[x]];
        animales_nombre[x]=new Object();
        animales_nombre[x].id= "animal"+(i+1);
        animales_nombre[x].valor= num_random[x];
        animal_src.addEventListener('dragstart', e => {
            console.log('Arraste de animal');
        });
        vectorHab[x] = new Image();
        arreglo_hab[x] = document.getElementById("habitad" + (i + 1));
        habitad_info[x] = new Object();
        habitad_info[x].id = "habitad" + (i + 1);
        arreglo_hab[x].addEventListener('dragover', e => {
            e.preventDefault();
        });
        arreglo_hab[x].addEventListener('drop', e => {
            var id_hab=e.target.id;
            var animal_drop=e.dataTransfer.getData("text");
            console.log(animal_drop);
            for(var j=0;j<3;j++){
                if(animales_nombre[j].id==animal_drop){
                    console.log("Encontrado");
                    var valor_animal = animales_nombre[j].valor;
                }
                if(habitad_info[j].id == id_hab){
                    var valor_habitad = habitad_info[j].valor;
                }
            }
            if(valor_habitad == valor_animal){
                console.log("Animal correcto");
                acerto = true;
            }else{
                console.log(valor_animal);
                console.log(valor_habitad);
                console.log("Animal incorrecto");
                acerto= false;
            }
            e.preventDefault();
        });
        asignarHab(arreglo_hab[x], x);
    }
}

function asignarHab(ambiente, x) {
    contextHab[x] = ambiente.getContext("2d");
    //vectorImg[i] = new Image();
    vectorHab[x].addEventListener('load', function () {
        contextHab[x].drawImage(vectorHab[x], 0, 0, 200, 200)
    }, false);
    vectorHab[x].src = 'media/Habitat/' + habitat[num_random[habRand[x]]]; // Set source path
    habitad_info[x].valor =num_random[habRand[x]];
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
    if(acerto == true){
        elemento.style.visibility = 'hidden';
    }else{
        elemento.style.visibility = 'visible';
    }
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
    alert(id);
    elemento = document.getElementById(id);
    var posx= e.pageX; //- //habitat_img[0].offsetLeft; // coordenadas x para el soltado
    var posy = e.pageY; //- //habitat_img[0].offsetTop;
    contextHab[0].drawImage(elemento, posx, posy);
   
}