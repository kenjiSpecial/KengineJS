(function(){
    var wd = 600;
    var hg = 400;



    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = wd;
    myCanvas.height = hg;

    var myContext = myCanvas.getContext("2d");
    myContext.fillStyle = "#ffffff";
    myContext.fillRect(0, 0, wd, hg);

    var Vec = new Vector(200, 300);

    myContext.beginPath();
    myContext.moveTo(0, 0)
    myContext.lineTo(Vec.x, Vec.y);
    myContext.stroke();
    myContext.closePath();

    myContext.font = '18px Calibri';
    myContext.fillStyle = '#000000';
    myContext.fillText("Vec: (x, y): ( 200, 300)", 220, 300);

})();