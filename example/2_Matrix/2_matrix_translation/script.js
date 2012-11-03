/**
 * Created with JetBrains WebStorm.
 * User: saitoukenji
 * Date: 11/3/12
 * Time: 12:57 PM
 * To change this template use File | Settings | File Templates.
 * latex:
\[{\color{White}  a' = Aa = \begin{bmatrix}
1 & 0 & tx\\
 0& 1 & ty\\
 0& 0 & 1
\end{bmatrix}\left( \begin{array}{c} a \\ b \\ 1 \end{array} \right) = \left( \begin{array}{c} a + tx \\ b+ty \\ 1 \end{array} \right)}\]

 */


(function(){
    var wd = 600;
    var hg = 400;

    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = wd;
    myCanvas.height = hg;

    var myContext = myCanvas.getContext("2d");


    var vector_before = new Vector( 50, 40);
    var matrix = new Matrix();
    var vector_after = matrix.apply_Vector(vector_before);

    //drawing coordinate and arrow based from vector
    var centerPtVector = new Vector( wd/2, hg/2);
    var coordinate = new Coordinate( wd, hg, centerPtVector);

    //setting GUI
    var matrix_parameter = { tx: 0, ty:0};

    var gui = new dat.GUI({ autoPlace: false });
    var customContainer = document.getElementById('canvas_div');
    customContainer.appendChild(gui.domElement);

    var tx = 0;
    var ty = 0;

    var value_tx = gui.add(matrix_parameter, 'tx', -400, 400).step(5);
    var value_ty = gui.add(matrix_parameter, 'ty', -300, 300).step(5);

    value_tx.onChange(function(value) {
        tx = value;
        matrix.translation(tx, ty);
        vector_after = matrix.apply_Vector(vector_before);

        myContext.clearRect( 0, 0, wd, hg);

        //----------
        drawing_arrow();
    });

    value_ty.onChange(function(value) {
        ty = value;

        matrix.translation( tx, ty);
        vector_after = matrix.apply_Vector(vector_before);

        myContext.clearRect( 0, 0, wd, hg);

        //----------
        drawing_arrow();
    });




    drawing_arrow();

    function drawing_arrow(){
        myContext.fillStyle = "#fff";
        myContext.fillRect(0, 0, wd, hg);

        //drawing and fill coordinate
        coordinate.draw(myContext);

        var customContainer = document.getElementById('canvas_div');
        customContainer.appendChild(gui.domElement);

        var arrow_before = new Arrow(vector_before);
        arrow_before.setStartPt(centerPtVector);
        arrow_before.color = "#999999";
        arrow_before.draw(myContext);
        coordinate.drawVector(myContext, vector_before);

        var arrow_after = new Arrow(vector_after);
        arrow_after.setStartPt(centerPtVector);
        arrow_after.draw(myContext);
        coordinate.drawVector(myContext, arrow_after);
    };

})();
