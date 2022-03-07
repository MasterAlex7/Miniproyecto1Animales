function volver(){
    window.location.href="index.html"
}

function recuperar(){
    document.getElementById("nom").innerHTML = localStorage.nombre;
}

window.onload = function(){
    recuperar();
    localStorage.nivel=0;
    var music = new Audio('media/Sonido/final.mp3');
    music.play();
}

function credits(){
    window.location.href="creditos.html"
}

function credits2(){
    window.location.href="final.html"
}