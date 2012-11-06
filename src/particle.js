/**
 * Created with JetBrains WebStorm.
 * User: saitoukenji
 * Date: 11/4/12
 * Time: 10:26 AM
 * To change this template use File | Settings | File Templates.
 */
var Particle = function(){
    this.mass = undefined;
    this.velocity = undefined;
    this.acceleration = undefined;
    this.position = undefined;
    this.force =undefined;

    this.lastTime = new Date().getTime();
};

Particle.prototype.update = function(force){
    var dt = (new Date().getTime() - this.lastTime)/1000;
    this.sum_time += dt;

    //setting the acceleration
    if(this)
    this.acceleration = force.multiple(1/this.mass);

    //TODO if this is heavy, you sholud change the addScaledVector
    //setting the velocity
    this.velocity = this.velocity.addScaledVector( this.acceleration, dt);

    //setting the position
    this.position = this.position.addScaledVector( this.velocity, dt);

    this.lastTime = new Date().getTime();


};

