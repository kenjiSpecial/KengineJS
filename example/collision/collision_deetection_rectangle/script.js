(function(){
    var wd = 600;
    var hg = 300;

    var canvas = document.getElementById("myCanvas");
    canvas.width = wd;
    canvas.height = hg;

    var context = canvas.getContext("2d");
    context.fillStyle = "#fff";
    context.fillRect(0, 0, wd, hg);


    var triangle_vectors = [new Vector(20, 20), new Vector(80, 150), new Vector(140, 60)];
    var triangle = new Polygon(triangle_vectors);
    triangle.fillColor = "rgba(255, 0, 0, .5)";
    triangle.fill(context);

    var rect_vectors = [new Vector(300, 30), new Vector( 260, 60), new Vector(350, 80), new Vector(330, 40)];
    var rectangle = new Polygon(rect_vectors);
    rectangle.fillColor = "rgba(0, 0, 255, 0.5)";
    rectangle.fill(context);

    //test


    var shapeBeingDragged = undefined;

    var lastdrag = {x:0, y:0}

    canvas.onmousedown = function(e){
        var location = windowToCanvas(e, this);

        rectangle.createPath(context);
        if(context.isPointInPath(location.x, location.y)){
            shapeBeingDragged = rectangle;

            lastdrag.x = location.x;
            lastdrag.y = location.y;
        }

        //-----------

        triangle.createPath(context);
        if(context.isPointInPath(location.x, location.y)){
            shapeBeingDragged = triangle;

            lastdrag.x = location.x;
            lastdrag.y = location.y;
        }
    };

    canvas.onmousemove = function(e){
        var location, dragVector;

        if(shapeBeingDragged !== undefined){
            location = windowToCanvas(e, canvas);
            dragVector = {
                x:location.x - lastdrag.x,
                y: location.y - lastdrag.y
            };

            lastdrag.x = location.x;
            lastdrag.y = location.y;

            shapeBeingDragged.move(dragVector.x, dragVector.y);
            var checkBool = triangle.collideWidth(rectangle);


//            -------------

            context.clearRect(0, 0, wd, hg);

            if(checkBool){
                context.fillStyle = "#ffff00";
            }else{
                context.fillStyle = "#fff";
            }

            context.fillRect(0, 0, wd, hg);

            triangle.fill(context);
            rectangle.fill(context);



        }


    };

    canvas.onmouseup = function(e){
        shapeBeingDragged = undefined;
    };


    function windowToCanvas(e, _canvas){
        var x = e.x || e.clientX;
        var y = e.y || e.clientY;
        var bbox = _canvas.getBoundingClientRect();

        return { x: x - bbox.left * (_canvas.width  / bbox.width),
            y: y - bbox.top  * (_canvas.height / bbox.height)
        };

    }

})();