/**
 * Created with JetBrains WebStorm.
 * User: saito
 * Date: 30.10.12
 * Time: 11:14
 * To change this template use File | Settings | File Templates.
 */
window.requestAnimFrame = (function () {
    return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();