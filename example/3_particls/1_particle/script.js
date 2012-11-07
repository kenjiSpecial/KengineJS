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
    };
    /*
     * creating ball class
     */

    var Ball = function(particle){
        this.particle = particle;
        this.color = "#333";
        this.size = 15;
    };


    Ball.prototype.draw = function(context){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.particle.position.x, this.particle.position.y, this.size, 0, Math.PI * 2, false);
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

    var position_vector = new Vector( 50,hg/2);
    var velocity_vector = new Vector( 100, -200);
    var acceleration_vector = new Vector( 0, 0);

    myContext.fillStyle = "#ffffff";
    myContext.fillRect( 0, 0, wd, hg);

    var particle = new Particle();
    particle.position = position_vector;
    particle.velocity = velocity_vector;
    particle.acceleration = acceleration_vector;
    particle.mass = 20;

    var force = new TestForce();

    var myBall = new Ball(particle);
//    myBall.draw(myContext);

    var myBalls = [];
    myBalls.push(myBall);

    var myParticles = [];
    myParticles.push(particle);

    var myForces = [];
    myForces.push(force);

    var contextClear = new Canvas_Context(wd, hg);

//    setting GUI
    var parameter = function(){
        this.velocity = 300;
        this.projection = function(){
//            alert(this.velocity);
            var _particle = new Particle();
            _particle.position = position_vector;
            var randomValue = (Math.random() - .5) * 0.8;
            _particle.velocity = new Vector(this.velocity * Math.cos(Math.PI  * randomValue), this.velocity * Math.sin(Math.PI * randomValue));
            _particle.acceleration = acceleration_vector;
            _particle.mass = 20;

            var _force = new TestForce();
            var _myBall = new Ball(_particle);

            myParticles.push(_particle);
            myForces.push(_force);
            myBalls.push(_myBall);




        };
    };

    var myParameter = new parameter();
    var gui = new dat.GUI({ autoPlace: false });
    var customContainer = document.getElementById('large_canvas_div');
    customContainer.appendChild(gui.domElement);

    var velocity_gui = gui.add(myParameter, 'velocity', 200, 600);
    var projection_gui = gui.add( myParameter, 'projection');


    drawing();

    /*
    * creating drawing() function.
    */

    function drawing(){


        contextClear.update_fill(myContext);

        for(var i = 0; i < myParticles.length; i++){

            var myParticle = myParticles[i];
            var myForce = myForces[i];
            var _myBall = myBalls[i];

            myParticle.setGravity(myForce.force);

            myForce.calc_object(myParticle);
            myParticle.update();

            if(myParticle.position.y > hg - myBall.size){
                myParticle.position.y -= (myParticle.position.y - hg + _myBall.size);
                myParticle.velocity.y *= -0.9;
            }


            if(myParticle.position.x > wd + myBall.size){
                if(i == myParticle.length -1){
                    myBalls.shift();
                    myForces.shift();
                    myParticles.shift();
                }else{
                    var prev_myBalls = myBalls.slice( 0, i);
                    var next_myBalls = myBalls.slice( i+1);
                    myBalls = prev_myBalls.concat(next_myBalls);

                    var prev_myForce= myForces.slice( 0, i);
                    var next_myForce = myForces.slice( i+1);
                    myForces = prev_myForce.concat(next_myForce);

                    var prev_myParticle = myParticles.slice( 0, i);
                    var next_myParticle = myParticles.slice( i+1);
                    myParticles = prev_myParticle.concat(next_myParticle);

                }


            }else{
                _myBall.draw(myContext);
            }

            myParticle.resetForce();
        }


        requestAnimFrame(drawing);
    }


})();