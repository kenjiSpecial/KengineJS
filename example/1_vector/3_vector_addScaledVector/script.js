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
    var Vector02 = new Vector(70, 40);
    var k = 3;

    var vector03 = Vector01.addScaledVector( Vector02, k);

    var centerPtVector = new Vector( 50, 50);

    var myCoordinate = new Coordinate( wd, hg, centerPtVector);
    myCoordinate.draw(myContext);

    //arrow01;
    var arrowVector01 = new Arrow(Vector01);
    arrowVector01.setStartPt(centerPtVector);
    arrowVector01.color = "#999999";

    arrowVector01.draw(myContext);

    //arrow02
    newCenterVector = centerPtVector;
    for(var i = 0; i < k; i++){
        if(i !== 0){
            newCenterVector = newCenterVector.addVector(Vector02);
        }

        var arrowVector02 = new Arrow(Vector02);
        arrowVector02.setStartPt(newCenterVector);
        if(i == 0){
            arrowVector02.color = "#999999";
        }else{
            arrowVector02.color = "#dddddd";
        }

        arrowVector02.draw(myContext);
    }

    var arrowVector03 = new Arrow(vector03);
    arrowVector03.setStartPt(centerPtVector);
    arrowVector03.draw(myContext);

    myCoordinate.drawVector(myContext, Vector01);
    myCoordinate.drawVector(myContext, Vector02);
    myCoordinate.drawVector(myContext, vector03);
})();