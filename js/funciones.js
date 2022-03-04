function iniciar(){
    window.location.href = "login.html"
}

function jugar(){
    localStorage.nombre = document.getElementById("nombre").value;
    window.location.href = "juego.html"
}



window.onload=function(){
    var canvas = document.getElementById('lienzo');
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.beginPath();
    
            ctx.font = "35pt Comic Sans MS, Comic Sans, cursive";
            ctx.fillStyle = "yellow";
            ctx.fillText("Bienvenido a Animal Choose", 100, 120);

            ctx.font = "20pt Comic Sans MS, Comic Sans, cursive";
            ctx.fillStyle = "pink";
            ctx.fillText("Tendras que acomodar los animales", 160, 400);

            ctx.font = "20pt Comic Sans MS, Comic Sans, cursive";
            ctx.fillStyle = "pink";
            ctx.fillText("en su Habitat para ganar", 220, 430);

            var imag=new Image();
            imag.src="media/logo.png";
            imag.onload=function(){
                ctx.drawImage(imag,190,190,328,125);
            }

        }
    }
}

