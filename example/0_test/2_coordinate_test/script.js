/**
 * Created with JetBrains WebStorm.
 * User: saito
 * Date: 01.11.12
 * Time: 13:01
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

    var centerPtVector = new Vector( 200, 100);
    var myCoordinate = new Coordinate( wd, hg, centerPtVector);
    myCoordinate.draw(myContext);

    var my_vector = new Vector(300, 150);

    var arrowVectors = new Arrow(my_vector);
    arrowVectors.setStartPt(myCoordinate.initVector);

    arrowVectors.draw(myContext);
    myCoordinate.drawVector(myContext, my_vector);

})();