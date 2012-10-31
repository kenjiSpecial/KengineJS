/**
 * Created with JetBrains WebStorm.
 * User: saito
 * Date: 31.10.12
 * Time: 17:36
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
    var Vector02 = new Vector(450, 30);

    var vector03 = Vector01.addVector(Vector02);

    myContext.beginPath();
    myContext.moveTo(0, 0);
    myContext.lineWidth = 3;
    myContext.lineTo(vector03.x, vector03.y);
    myContext.stroke();
    myContext.closePath();

    myContext.beginPath();
    myContext.lineWidth = 1;
    myContext.moveTo( 0, 0);
    myContext.lineTo( Vector01.x, Vector01.y);
    myContext.lineTo( vector03.x, vector03.y);
    myContext.stroke();
    myContext.closePath();

    myContext.font = '18px sans-serif';

    myContext.fillStyle = '#000000';
    myContext.fillText("(x, y): ( 100, 200)", 100, 150);
    myContext.fillText("(x, y): ( 450, 30)", 180, 250);
    myContext.fillText("(x, y): ( 550, 230)", 300, 100);


})();