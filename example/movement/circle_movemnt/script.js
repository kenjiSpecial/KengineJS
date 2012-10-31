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

    myContext.fillStyle = "#ffffff";
    myContext.fillRect(0, 0, wd, hg);



})();