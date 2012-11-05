/**
 * Created with JetBrains WebStorm.
 * User: saitoukenji
 * Date: 11/3/12
 * Time: 9:08 PM
 * To change this template use File | Settings | File Templates.
 */

(function(){
    /*
     *  creating testForce object
     */
    var TestForce = function(){
        this.gravity = new Vector(0, 10);

    };

    TestForce.prototype = new Force();

    TestForce.prototype.calc_object = function(particle){
        this.particle = particle;

        //this.force_zero();
        this.setGravity();

        console.log(this.force);
    };



    /*
     * creating ball class
     */

    var Ball = function(particle){
        this.particle = particle;
        this.color = "#ff0000";
        this.size = 5;
    };


    Ball.prototype.draw = function(context){
        context.fillStyle = this.color;

        context.beginPath();
        context.arc(this.particle.position.x, this.particle.position.y, this.size, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();

    };


    /*
    *
    */

    var wd = 600;
    var hg = 400;

    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = wd;
    myCanvas.height = hg;

    var myContext = myCanvas.getContext("2d");

    var position_vector = new Vector( 100, 200);
    var velocity_vector = new Vector( 10, 0);
    var velocity_acceleration = new Vector( 0, 0);

    myContext.fillStyle = "#ffffff";
    myContext.fillRect( 0, 0, wd, hg);

    var particle = new Particle();
    particle.position = position_vector;
    particle.velocity = velocity_vector;
    particle.acceleration = velocity_acceleration;
    particle.mass = 20;

    var force = new TestForce();

    var myBall = new Ball(particle);
    myBall.draw(myContext);


    drawing();

    /*
    * creating drawing() function.
    */

    function drawing(){

        force.calc_object(particle);
//        console.log(force.force);
        particle.update(force.force);
        myBall.draw(myContext);

        requestAnimFrame(drawing);
    }


})();