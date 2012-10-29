(function () {
    var wd = 600;
    var hg = 400;

    var canvas = document.getElementById("myCanvas");
    canvas.width = wd;
    canvas.height = hg;

    var context = canvas.getContext("2d");

    var myCircle = new Circle(wd / 5, hg / 3, 20);
    myCircle.fillColor = "rgba(255, 255, 0, 0.6)";

    var myCircle2 = new Circle( wd/5 * 4, hg/3 * 2, 20)
    myCircle2.fillColor = "rgba( 0, 255, 0, 0.6)";

    context.fillStyle = "#fff";
    context.fillRect(0, 0, wd, hg);

    myCircle.fill(context);
    myCircle2.fill(context);


    var circles = [];
    circles.push(myCircle);
    circles.push(myCircle2);


    var shapeBeingDragged = undefined;

    var lastdrag = {x:0, y:0};

    canvas.onmousedown = function (e) {
        var location = windowToCanvas(e, this);

        for(var i = 0; i < circles.length; i++){
            circles[i].createPath(context);

            if(context.isPointInPath(location.x, location.y)){
                shapeBeingDragged = circles[i];

                lastdrag.x = location.x;
                lastdrag.y = location.y;
            }
        }
    };

    canvas.onmousemove = function (e) {
        var location, dragVector;

        if (shapeBeingDragged !== undefined) {
            location = windowToCanvas(e, canvas);
            dragVector = {
                x:location.x - lastdrag.x,
                y:location.y - lastdrag.y
            };

            lastdrag.x = location.x;
            lastdrag.y = location.y;

            shapeBeingDragged.move(dragVector.x, dragVector.y);

            context.clearRect(0, 0, wd, hg);

            context.fillStyle = "#fff";
            context.fillRect(0, 0, wd, hg);

            for(var i = 0; i < circles.length; i++){
                circles[i].fill(context);
            }
        }
    };

    canvas.onmouseup = function (e) {
        shapeBeingDragged = undefined;
    };

    function windowToCanvas(e, _canvas) {
        var x = e.x || e.clientX;
        var y = e.y || e.clientY;

        var bbox = _canvas.getBoundingClientRect();

        return {
            x:x - bbox.left * (_canvas.width / bbox.width),
            y:y - bbox.top * (_canvas.height / bbox.height)};
    }
})();