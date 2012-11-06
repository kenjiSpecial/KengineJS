/**
 * Created with JetBrains WebStorm.
 * User: saito
 * Date: 06.11.12
 * Time: 15:33
 * To change this template use File | Settings | File Templates.
 */

var ParticleSystem = function( originVector,  velocityValue){
    this.mass = undefined;

    var randomTheta = (Math.random() * (-90)  -45)/180 * Math.PI;
    this.velocity = new Vector(velocityValue * Math.cos(randomTheta), velocityValue * Math.sin(randomTheta));
    this.velocityValue = velocityValue;

    this.acceleration = new Vector( 0, 0);

    this.position = originVector;
    this.originalPosition = originVector;

    this.force =undefined;

    this.lastTime = new Date().getTime();

    this.duration = 6;
    this.interval_time = -2;
    this.sum_time = (this.interval_time - this.duration) * Math.random();


    this.visible = false;
};

ParticleSystem.prototype.update = function(){
    var dt = (new Date().getTime() - this.lastTime)/1000;
    this.sum_time += dt;

    //setting the acceleration
    if(this.visible == false && this.sum_time > 0){
        this.visible = true;
    }

    if(this.visible === true){
        this.force = new Vector(0 , 10000);

        this.acceleration = this.force.multiple(1/this.mass);

        //TODO if this is heavy, you sholud change the addScaledVector
        //setting the velocity
        this.velocity = this.velocity.addScaledVector( this.acceleration, dt);

        //setting the position
        this.position = this.position.addScaledVector( this.velocity, dt);

    }

    this.lastTime = new Date().getTime();


    if(this.sum_time > this.duration){

        this.sum_time = this.interval_time;
        //reset the position vector
        var randomTheta = (Math.random() * (-90)  -45)/180 * Math.PI;

        this.velocity.x = this.velocityValue *Math.cos(randomTheta);
        this.velocity.y = this.velocityValue *Math.sin(randomTheta);

        this.position = this.originalPosition;

        this.visible = false;
    }
};
