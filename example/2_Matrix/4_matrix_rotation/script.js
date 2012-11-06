/**
 * Created with JetBrains WebStorm.
 * User: saitoukenji
 * Date: 11/3/12
 * Time: 4:12 PM
 * To change this template use File | Settings | File Templates.
 */

/*
\boldsymbol{a'} = \boldsymbol{Aa} = \begin{bmatrix}
    cos(\theta) & -sin(\theta) &0 \\
sin(\theta) &  cos(\theta) &0 \\
 0& 0  & 1
\end{bmatrix}\left( \begin{array}{c} a \\  b \\ 1 \end{array} \right) =
\left( \begin{array}{c} cos(\theta)\cdot a - sin(\theta)\cdot b\\ sin(\theta)\cdot a + cos(\theta)\cdot b \\ 1 \end{array} \right)
*/

(function(){
    var wd = 600;
    var hg = 400;

    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = wd;
    myCanvas.height = hg;

    var myContext = myCanvas.getContext("2d");


    var vector01_before = new Vector( -50, 180);
    var vector02_before = new Vector( 250, 60);
    var vector03_before = vector01_before.subtractVector(vector02_before);

    var matrix = new Matrix();

    var vector01_after = matrix.apply_Vector(vector01_before);
    var vector02_after = matrix.apply_Vector(vector02_before);
    var vector03_after = vector01_after.subtractVector(vector02_after);

    //drawing coordinate and arrow based from vector
    var centerPtVector = new Vector( wd/2, hg/2);
    var coordinate = new Coordinate( wd, hg, centerPtVector);

    //setting GUI
    var matrix_parameter = { theta: 0};

    var gui = new dat.GUI({ autoPlace: false });
    var customContainer = document.getElementById('large_canvas_div');
    customContainer.appendChild(gui.domElement);

    var value_theta = gui.add(matrix_parameter, 'theta', 0, 360).step(1);

    value_theta.onChange(function(value) {

        matrix.rotate(value/180 * Math.PI);
        vector01_after = matrix.apply_Vector(vector01_before);
        vector02_after = matrix.apply_Vector(vector02_before);
        vector03_after = vector01_after.subtractVector(vector02_after);

        myContext.clearRect( 0, 0, wd, hg);

        //----------
        drawing_line();
    });

    //-------------------------


    drawing_line();

    function drawing_line(){
        myContext.fillStyle = "#fff";
        myContext.fillRect(0, 0, wd, hg);

        //drawing and fill coordinate
        coordinate.draw(myContext);

        var arrow01_prev = new Arrow(vector01_before);
        arrow01_prev.setStartPt(centerPtVector);

        var arrow02_prev = new Arrow(vector02_before);
        arrow02_prev.setStartPt(centerPtVector);

        var arrow03_prev = new Arrow(vector03_before);
        var tempArrow03CenterVector = centerPtVector.addVector(vector02_before);
        arrow03_prev.setStartPt(tempArrow03CenterVector);

        arrow01_prev.draw_auxiliary(myContext);
        arrow02_prev.draw_auxiliary(myContext);
        arrow03_prev.draw_auxiliary(myContext);

        var arrow01_forward = new Arrow(vector01_after);
        arrow01_forward.setStartPt(centerPtVector);

        var arrow02_forward = new Arrow(vector02_after);
        arrow02_forward.setStartPt(centerPtVector);

        var arrow03_forward = new Arrow(vector03_after);
        var tempArrow03CenterVector_after = centerPtVector.addVector(vector02_after);
        arrow03_forward.setStartPt(tempArrow03CenterVector_after);

        arrow01_forward.lineColor = "#000000";
        arrow02_forward.lineColor = "#000000";
        arrow03_forward.lineColor = "#000000";

        arrow01_forward.draw_auxiliary(myContext);
        arrow02_forward.draw_auxiliary(myContext);
        arrow03_forward.draw_auxiliary(myContext);

        coordinate.drawVector(myContext, vector01_before);
        coordinate.drawVector(myContext, vector02_before);

        coordinate.drawVector(myContext, vector01_after);
        coordinate.drawVector(myContext, vector02_after);

    }

})();