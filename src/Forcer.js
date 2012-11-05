/**
 * Created with JetBrains WebStorm.
 * User: saitoukenji
 * Date: 11/5/12
 * Time: 7:51 AM
 * To change this template use File | Settings | File Templates.
 */

var Forces = function(){
    this.particle = undefined;
    this.force = undefined;
    this.acceleration = undefined;
};

Forces.prototype = new Mover();

Forces.move