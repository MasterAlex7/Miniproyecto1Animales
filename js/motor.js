window.onload = function(){
    iniciarImagenes();
    eventosDragDrop();
}

function iniciarImagenes(){
    var habitad = document.getElementById("habitad1");
    var ctx = habitad.getContext("2d");
    var image = new Image();
    image.addEventListener('load', function() {
        // execute drawImage statements here
        ctx.drawImage(image,0,0,200,200)
      }, false);
    image.src = 'media/Habitat/oceano.png'; // Set source path
}

function eventosDragDrop(){

}