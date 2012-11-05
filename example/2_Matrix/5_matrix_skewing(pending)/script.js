/**
 * Created with JetBrains WebStorm.
 * User: saitoukenji
 * Date: 11/3/12
 * Time: 7:07 PM
 * To change this template use File | Settings | File Templates.
 */

(function(){
    var wd = 600;
    var hg = 400;

    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = wd;
    myCanvas.height = hg;

    var myContext = myCanvas.getContext("2d");


    var vector_before = new Vector( 240, 160);
    var matrix = new Matrix();
    var vector_after = matrix.apply_Vector(vector_before);

    //drawing coordinate and arrow based from vector
    var centerPtVector = new Vector( wd/2, hg/2);
    var coordinate = new Coordinate( wd, hg, centerPtVector);

    //setting GUI
    var matrix_parameter = { sx: 1, sy:1};

    var gui = new dat.GUI({ autoPlace: false });
    var customContainer = document.getElementById('canvas_div');
    customContainer.appendChild(gui.domElement);

    var sx = 1;
    var sy = 1;

    var value_tx = gui.add(matrix_parameter, 'sx', -10, 10).step(0.5);
    var value_ty = gui.add(matrix_parameter, 'sy', -10, 10).step(0.5);

    value_tx.onChange(function(value) {
        sx = value;
        matrix.scaling(sx, sy);
        vector_after = matrix.apply_Vector(vector_before);

        myContext.clearRect( 0, 0, wd, hg);

        //----------
        drawing_arrow();
    });

    value_ty.onChange(function(value) {
        sy = value;

        matrix.scaling( sx, sy);
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
    }

})();