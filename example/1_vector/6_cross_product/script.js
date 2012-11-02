/**
 * Created with JetBrains WebStorm.
 * User: saito
 * Date: 02.11.12
 * Time: 13:06
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

    var centerPtVector = new Vector( 100, 100);

    var Vector01 = new Vector(240, 60);
    var Vector02 = new Vector(40, 180);

    var Vector03 = Vector01.addVector(Vector02);

    var sudoVector01 = centerPtVector.addVector(Vector01);
    var sudoVector02 = centerPtVector.addVector(Vector02);
    var sudoVector03 = centerPtVector.addVector(Vector03);

    var cross_product = Vector01.crossProduct(Vector02);

//    ------
    myContext.beginPath();
    myContext.fillStyle = "#999999";
    myContext.moveTo(centerPtVector.x, centerPtVector.y)
    myContext.lineTo(sudoVector01.x, sudoVector01.y);
    myContext.lineTo( sudoVector03.x, sudoVector03.y);
    myContext.lineTo( sudoVector02.x, sudoVector02.y);
    myContext.fill();
    myContext.closePath();

    var coordinate = new Coordinate( wd, hg, centerPtVector);
    coordinate.draw(myContext);

    var Arrow_01 = new Arrow(Vector01);
    var Arrow_02 = new Arrow(Vector02);

    Arrow_01.setStartPt(centerPtVector);
    Arrow_02.setStartPt(centerPtVector);

    Arrow_01.draw(myContext);
    Arrow_02.draw(myContext);

    var tempCenterVector01 = centerPtVector.addVector(Vector02);
    Arrow_01.setStartPt(tempCenterVector01);
    Arrow_01.draw(myContext);

    var tempCenterVector02 = centerPtVector.addVector(Vector01);
    Arrow_02.setStartPt(tempCenterVector02);
    Arrow_02.draw(myContext);

    myContext.fillStyle = "#ffffff";
    myContext.font = "bold 18px 'Arial'";
    myContext.fillText("Area: " + cross_product.toString(), 180, 220);

})();