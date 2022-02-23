




window.onload=function(){
    var canvas = document.getElementById('lienzo');
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.beginPath();
    
            ctx.font = "35pt Times New Roman";
            ctx.fillStyle = "black";
            ctx.fillText("Bienvenido a Animal Choose", 100, 120);

            ctx.font = "20pt Times New Roman";
            ctx.fillStyle = "black";
            ctx.fillText("Tendras que acomodar los animales", 190, 400);

            ctx.font = "20pt Times New Roman";
            ctx.fillStyle = "black";
            ctx.fillText("en su Habitat para ganar", 240, 430);

            var imag=new Image();
            imag.src="media/logo.png";
            imag.onload=function(){
                ctx.drawImage(imag,190,190,328,125);
            }

        }
    }
}