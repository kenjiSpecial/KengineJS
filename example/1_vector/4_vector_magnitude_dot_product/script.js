/**
 * Created with JetBrains WebStorm.
 * User: saitoukenji
 * Date: 11/1/12
 * Time: 8:26 AM
 * To change this template use File | Settings | File Templates.
 */


(function(){
    var wd = 600;
    var hg = 400;



    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = wd;
    myCanvas.height = hg;

    var myContext = myCanvas.getContext("2d");

    myContext.fillStyle = "#fff";
    myContext.fillRect(0, 0, wd, hg);


    var Vector01 = new Vector(100, 200);
    var Vector02 = new Vector(400, 40);


    var Vector01_magnitude = ((Vector01.getMagnitude()*1000)|0)/1000;
    var Vector02_magnitude = ((Vector02.getMagnitude()*1000)|0)/1000;

    var Vector_dot = Vector01.dotProduct(Vector02);

    myContext.beginPath();
    myContext.moveTo(0, 0);
    myContext.lineWidth = 1;
    myContext.lineTo(Vector01.x, Vector01.y);
    myContext.stroke();
    myContext.closePath();

    myContext.beginPath();
    myContext.moveTo(0, 0);
    myContext.lineWidth = 1;
    myContext.lineTo(Vector02.x, Vector02.y);
    myContext.stroke();
    myContext.closePath();


    myContext.font = '18px sans-serif';

    myContext.fillStyle = '#000000';

    myContext.fillText("(x, y): ( 100, 200), magnitude = " + Vector01_magnitude.toString(), 100, 170);
    myContext.fillText("(x, y): ( 400, 40), magnitude = " + Vector02_magnitude.toString(), 200, 80);
    myContext.fillText("dot product: " + Vector_dot.toString(), 420, 380);


})();