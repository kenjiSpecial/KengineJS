/**
 * Created with JetBrains WebStorm.
 * User: saitoukenji
 * Date: 11/5/12
 * Time: 7:51 AM
 * To change this template use File | Settings | File Templates.
 */

var Force = function(){
    this.force = new Vector(0, 0);
    this.particle = undefined;
    this.gravity = undefined;

};


Force.prototype.calc_object = function(particle){
    this.force_zero();

};

 Force.prototype.force_zero = function(){
     this.force.x = 0;
     this.force.y = 0;
 };

Force.prototype.setGravity = function(){

    if(this.particle.mass !==  undefined && this.gravity !== undefined){
        var gravity_force = this.gravity.multiple(this.particle.mass);
        this.force = this.force.addScaledVector(this.gravity, this.particle.mass);
    }

};