/**
 * Created with JetBrains WebStorm.
 * User: saitoukenji
 * Date: 10/31/12
 * Time: 7:35 AM
 * To change this template use File | Settings | File Templates.
 */
(function(){
    var wd = 600;
    var hg = 400;



    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = wd;
    myCanvas.height = hg;

    var myContext = myCanvas.getContext("2d");

    var myCanvas_Context = new Canvas_Context(wd, hg);
    var myCircle = new Circle(10, 10, 10);



    var dt;
    var lastTime = new Date().getTime();
    var curTime;

    loop();

    function loop(){
        curTime = new Date().getTime();
        dt = (curTime - lastTime)/1000;

        myCanvas_Context.update_fill(myContext);

        myCircle.update(dt);
        myCircle.fill(myContext);

        lastTime = curTime;

        requestAnimFrame(loop);
    }
})();