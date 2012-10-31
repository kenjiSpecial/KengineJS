/**
 * Created with JetBrains WebStorm.
 * User: saito
 * Date: 31.10.12
 * Time: 17:36
 * To change this template use File | Settings | File Templates.
 */


(function(){
    var wd = 600;
    var hg = 400;



    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = wd;
    myCanvas.height = hg;

    var myContext = myCanvas.getContext("2d");

    myContext.fillStyle = "#fff";
    myContext.fillRect(0, 0, wd, hg);




})();