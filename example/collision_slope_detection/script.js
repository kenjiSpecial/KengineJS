(function(){
    var wd = 600;
    var hg = 400;

    var canvas = document.getElementById("myCanvas");
    canvas.width = wd;
    canvas.height = hg;

    var context = canvas.getContext("2d");


    var myCircle = new Circle(200, 20, 20);
    var myWall = new Wall();
    myWall.startVec = new Vector( 100, 200);
    myWall.endVec = new Vector( 400, 300);

    //------------

    var curTime;
    var dt;

    var lastTime = new Date().getTime();

//    myWall.collideCircle(myCircle);
    var tempVelocity = 100;
    var tempTheta = 90 / 180 * Math.PI;

    loop();


    function loop(){

        curTime = new Date().getTime();
        dt = (curTime - lastTime)/1000;

        myCircle.x += tempVelocity * Math.cos(tempTheta) * dt;
        myCircle.y += tempVelocity * Math.sin(tempTheta) * dt;

        myWall.collideCircle(myCircle);

        //-------------------------

        context.clearRect(0, 0, wd, hg);

        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, wd, hg);

        myCircle.fill(context);
        myWall.line_stroke(context);

        lastTime = curTime;

        requestAnimFrame(loop);
    }

})();