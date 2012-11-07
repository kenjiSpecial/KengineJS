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

    var Ball = function (particle) {
        this.particles = particles;
        this.color = "rgba(0,0,0,";
        this.size = 3;
    };


    Ball.prototype.draw = function (context) {
        for(var i = 0; i < this.particles.length; i++){
            if(this.particles[i].visible){
                var rate = (1-this.particles[i].sum_time / this.particles[i].duration);
                context.fillStyle = this.color + rate.toString() + ")";
                context.beginPath();
                context.arc(this.particles[i].position.x, this.particles[i].position.y, this.size * rate +.5, 0, Math.PI * 2, false);
                context.fill();
                context.closePath();
            }
        }


    };


    /*
     ********************
     ********************
     */

    var wd = 600;
    var hg = 400;
    var particle_num = 800;

    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = wd;
    myCanvas.height = hg;

    var myContext = myCanvas.getContext("2d");

    var position_vector = new Vector( wd/2, hg/3);
    var velocityValue = 200;

    myContext.fillStyle = "#ffffff"
    myContext.fillRect(0, 0, wd, hg);

    var particles = [];

    for(var i = 0; i < particle_num; i++){
        var particle = new ParticleSystem( position_vector, velocityValue);
        particle.mass = 50;
        particles.push(particle);
    }

    var myBall = new Ball(particles);

    var contextClear = new Canvas_Context(wd, hg);

    drawing();

    /*
     * creating drawing() function.
     */

    function drawing() {


        contextClear.update_fill(myContext);
        for(var i = 0; i < particles.length; i++){
            particles[i].update();
            if(particles[i].position.y > hg - myBall.size){
                particles[i].position.y -= (particles[i].position.y - hg + myBall.size);
                particles[i].velocity.y *= -(.4 +.4 * Math.random());
            }
        }

        myBall.draw(myContext);

        requestAnimFrame(drawing);
    }


})();