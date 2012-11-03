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


    var Vector01 = new Vector(100, 220);
    var Vector02 = new Vector(400, 60);

    var vector03 = Vector01.addVector(Vector02);

    var centerPtVector = new Vector( 50, 50);

    var myCoordinate = new Coordinate( wd, hg, centerPtVector);
    myCoordinate.draw(myContext);

    //arrow01:
    var arrowVector01 = new Arrow(Vector01);
    arrowVector01.setStartPt(centerPtVector);
    arrowVector01.color = "#999999";

    arrowVector01.draw(myContext);

    myCoordinate.drawVector(myContext, Vector01);

    //arrow02:
    var arrowVector02 = new Arrow(Vector02);
    arrowVector02.setStartPt(centerPtVector);
    arrowVector02.color = "#999999";

    arrowVector02.draw(myContext);


    //-----
    //sudo_arrow01:
    var sudo_StartVector01 = centerPtVector.addVector(Vector02);
    var sudo_arrowVector01 = new Arrow(Vector01);
    sudo_arrowVector01.setStartPt(sudo_StartVector01);
    sudo_arrowVector01.color = "#dddddd";

    sudo_arrowVector01.draw(myContext);

    //sudo_arrow02:
    var sudo_StartVector = centerPtVector.addVector(Vector01);
    var sudo_arrowVector02 = new Arrow(Vector02);
    sudo_arrowVector02.setStartPt(sudo_StartVector);
    sudo_arrowVector02.color = "#dddddd";

    sudo_arrowVector02.draw(myContext);

    myCoordinate.drawVector(myContext, Vector02);


    //------------
    //------------
    //arrow03
    var arrowVector03 = new Arrow(vector03);
    arrowVector03.setStartPt(centerPtVector);
    arrowVector03.draw(myContext);

    myCoordinate.drawVector(myContext, vector03);


})();