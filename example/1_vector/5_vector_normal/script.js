/**
 * Created with JetBrains WebStorm.
 * User: saitoukenji
 * Date: 11/2/12
 * Time: 7:58 AM
 * To change this template use File | Settings | File Templates.
 *
 * <a href="http://www.codecogs.com/eqnedit.php?latex={\color{White} \hat{a} = \frac{a}{|a|} \ \ \ \ \ a\cdot b = \binom{a}{b}\cdot\binom{c}{d} = ac @plus; bd\ \ \ \ \ b_\perp = a - (\hat{a} \cdot b )b}" target="_blank"><img src="http://latex.codecogs.com/png.latex?{\color{White} \hat{a} = \frac{a}{|a|} \ \ \ \ \ a\cdot b = \binom{a}{b}\cdot\binom{c}{d} = ac + bd\ \ \ \ \ b_\perp = a - (\hat{a} \cdot b )b}" title="{\color{White} \hat{a} = \frac{a}{|a|} \ \ \ \ \ a\cdot b = \binom{a}{b}\cdot\binom{c}{d} = ac + bd\ \ \ \ \ b_\perp = a - (\hat{a} \cdot b )b}" /></a>
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


    var Vector01 = new Vector(480, 200);
    var Vector02 = new Vector(100, 250);

    // normalizing
    var Vector01_Normalize = Vector01.normalize();

    // vector dot product
    var Vector01_To_Vector02_DotProduct = Vector02.dotProduct(Vector01_Normalize);
    var Vector01_To_Vector02_Vector = Vector01_Normalize.multiple(Vector01_To_Vector02_DotProduct);

    var normalVector = Vector01.normal();
    var Vector01_To_Normal_DotProduct = normalVector.dotProduct(Vector02);
    var Vector01_To_Normal_Vector = normalVector.multipleVector(Vector01_To_Normal_DotProduct);


    //var vector03 = Vector01.addScaledVector( Vector02, k);

    var centerPtVector = new Vector( 50, 50);

    var myCoordinate = new Coordinate( wd, hg, centerPtVector);
    myCoordinate.draw(myContext);

    //arrow01;
    var arrowVector01 = new Arrow(Vector01);
    arrowVector01.setStartPt(centerPtVector);
    arrowVector01.color = "#999999";
    arrowVector01.draw(myContext);

    //arrow01_normalize:
    var arrowVector01Normalize = new Arrow(Vector01_Normalize);
    arrowVector01Normalize.setStartPt(centerPtVector);
    arrowVector01Normalize.color = "#333333";
    arrowVector01Normalize.draw(myContext);

    //arrow02:
    var arrowVector02 = new Arrow(Vector02);
    arrowVector02.setStartPt(centerPtVector);
    arrowVector02.color = "#999999";
    arrowVector02.draw(myContext);

    //dot product Vector
    var dotProductArrow = new Arrow(Vector01_To_Vector02_Vector);
    dotProductArrow.setStartPt(centerPtVector);
    dotProductArrow.color = "#333333";
    dotProductArrow.draw(myContext);

    var sudo_CenterPtVector = centerPtVector.addVector(Vector01_To_Vector02_Vector);
    var normalVectorArrow = new Arrow(Vector01_To_Normal_Vector);
    normalVectorArrow.setStartPt(sudo_CenterPtVector);
    normalVectorArrow.color = "#333333";
    normalVectorArrow.draw(myContext);

    myCoordinate.drawVector(myContext, Vector01);
    myCoordinate.drawVector(myContext, Vector01_To_Vector02_Vector);

})();