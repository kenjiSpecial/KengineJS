(function(){
    var wd = 600;
    var hg = 400;

    var canvas = document.getElementById("myCanvas");
    canvas.width = wd;
    canvas.height = hg;

    var context = canvas.getContext("2d");


    var myCircle = new Circle(wd/5, hg/5, 20);
    var myWall = new Wall();
    myWall.startVec = new Vector( 100, 100);
    myWall.endVec = new Vector( 200, 300);

    //------------

    var curTime;
    var dt;

    var lastTime = new Date().getTime();

    loop();


    function loop(){

        curTime = new Date().getTime();
        dt = curTime - lastTime;

        context.clearRect(0, 0, wd, hg);

        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, wd, hg);

        myCircle.fill(context);
        myWall.line_stroke(context);

        lastTime = curTime;

        requestAnimFrame(loop);
    }

})();