/**
 * Created with JetBrains WebStorm.
 * User: saito
 * Date: 06.11.12
 * Time: 15:08
 * To change this template use File | Settings | File Templates.
 */

(function () {

    /*
     * creating ball class
     */

    var Ball = function () {
        this.color = "rgba(100,100,100, 0.3)";
        this.size = 40;
    };


    Ball.prototype.draw = function (context, particle) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(particle.position.x, particle.position.y, this.size, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();
    };


    /*
     ********************
     ********************
     */

    var wd = 600;
    var hg = 400;

    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = wd;
    myCanvas.height = hg;

    var myContext = myCanvas.getContext("2d");

    myContext.fillStyle = "#ffffff";
    myContext.fillRect(0, 0, wd, hg);

    var myParticle = new Particle();

    myParticle.mass = 20;
    myParticle.position = new Vector(0, 40);
    myParticle.velocity = new Vector(0, 0);
    myParticle.acceleration = new Vector(0, 0);

    var myBall = new Ball();
    var contextClear = new Canvas_Context(wd, hg);

    var gravity = new Vector(0, 50);

    var mySlope = new Slope();
    var myArrow = new Arrow(myParticle.velocity);
    myArrow.setStartPt(myParticle.position);

    var myForceArrow = new Arrow(myParticle.acceleration);
    myForceArrow.setStartPt(myParticle.position);

    drawing();

    /** creating drawing() function. **/

    function drawing() {
        contextClear.update_fill(myContext);

        myParticle.setGravity(gravity);

        mySlope.circle_collision_detect(myParticle, myBall.size);
        if(myParticle.position.y > hg - myBall.size){
            myParticle.position.y -= (myParticle.position.y - hg + myBall.size);
            myParticle.velocity.y *= -0.9;
        }

        myParticle.update();

        mySlope.draw(myContext);

        myArrow.setVector(myParticle.velocity);
        myArrow.setStartPt(myParticle.position);
        myArrow.draw(myContext);

        myForceArrow.setVector(myParticle.acceleration);
        myForceArrow.setStartPt(myParticle.position);
        myForceArrow.draw(myContext);

        myBall.draw(myContext, myParticle);

        myParticle.resetForce();
        requestAnimFrame(drawing);
    }

})();