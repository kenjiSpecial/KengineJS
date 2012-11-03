/**
 * Created with JetBrains WebStorm.
 * User: saito
 * Date: 02.11.12
 * Time: 18:08
 * To change this template use File | Settings | File Templates.
 * <a href="http://www.codecogs.com/eqnedit.php?latex={\color{White} a' = \left( \begin{array}{c} x' \\ y' \\ 1 \end{array} \right) = Aa = \begin{bmatrix} a & b & c\\ d& e & f\\ 0& 0 & 1 \end{bmatrix}\left( \begin{array}{c} x \\ y \\ 1 \end{array} \right)}" target="_blank"><img src="http://latex.codecogs.com/png.latex?{\color{White} a' = \left( \begin{array}{c} x' \\ y' \\ 1 \end{array} \right) = Aa = \begin{bmatrix} a & b & c\\ d& e & f\\ 0& 0 & 1 \end{bmatrix}\left( \begin{array}{c} x \\ y \\ 1 \end{array} \right)}" title="{\color{White} a' = \left( \begin{array}{c} x' \\ y' \\ 1 \end{array} \right) = Aa = \begin{bmatrix} a & b & c\\ d& e & f\\ 0& 0 & 1 \end{bmatrix}\left( \begin{array}{c} x \\ y \\ 1 \end{array} \right)}" /></a>
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
    var matrix_parameter = { a: 1, b:0, c:0, d:0, e:1, f:0 };

    var gui = new dat.GUI({ autoPlace: false });
    var customContainer = document.getElementById('canvas_div');
    customContainer.appendChild(gui.domElement);

    var value_a = gui.add(matrix_parameter, 'a', -4, 4).step(0.1);
    var value_b = gui.add(matrix_parameter, 'b', -4, 4).step(0.1);
    var value_c = gui.add(matrix_parameter, 'c', -100, 100).step(2);
    var value_d = gui.add(matrix_parameter, 'd', -4, 4).step(0.1);
    var value_e = gui.add(matrix_parameter, 'e', -4, 4).step(0.1);
    var value_f = gui.add(matrix_parameter, 'f', -100, 100).step(2);

    value_a.onChange(function(value) {
        matrix.set_a(value);
        vector_after = matrix.apply_Vector(vector_before);

        myContext.clearRect( 0, 0, wd, hg);

        //----------
        drawing_arrow();
    });

    value_b.onChange(function(value) {
        matrix.set_b(value);
        vector_after = matrix.apply_Vector(vector_before);

        myContext.clearRect( 0, 0, wd, hg);

        //----------
        drawing_arrow();
    });

    value_c.onChange(function(value) {
        matrix.set_c(value);
        vector_after = matrix.apply_Vector(vector_before);

        myContext.clearRect( 0, 0, wd, hg);

        //----------
        drawing_arrow();
    });

    value_d.onChange(function(value) {
        matrix.set_d(value);
        vector_after = matrix.apply_Vector(vector_before);

        myContext.clearRect( 0, 0, wd, hg);

        //----------
        drawing_arrow();
    });

    value_e.onChange(function(value) {
        matrix.set_e(value);
        vector_after = matrix.apply_Vector(vector_before);

        myContext.clearRect( 0, 0, wd, hg);

        //----------
        drawing_arrow();
    });

    value_f.onChange(function(value) {
        matrix.set_f(value);
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
