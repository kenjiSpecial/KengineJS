(function(){
    var wd = 600;
    var hg = 400;



    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = wd;
    myCanvas.height = hg;

    var myContext = myCanvas.getContext("2d");


    myContext.fillStyle = "#fff";
    myContext.fillRect(0, 0, wd, hg);

    for(var i = 0; i < 30; i++){
        var arrowVectors = new Arrow(new Vector(wd * ( Math.random() -1/2), hg * ( Math.random() -1/2)))
        arrowVectors.setStartPt(new Vector(wd/2, hg/2));

        arrowVectors.draw(myContext);
    }

})();