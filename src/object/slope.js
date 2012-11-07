
//Friction model

var Slope = function () {
    this.start_vector = new Vector(0, 80);
    this.end_vector = new Vector(300, 200);
    this.edge_vector = this.end_vector.edge(this.start_vector);
    this.magnitude = this.edge_vector.getMagnitude();
    this.edge_vector = this.edge_vector.normalize();
    this.normal_vector = this.end_vector.edge(this.start_vector).normal();
    this.color = "#999";

    this.count = 0;
};


Slope.prototype.draw = function (_context) {

    _context.beginPath();
    _context.fillStyle = this.color;
    _context.moveTo(this.start_vector.x, this.start_vector.y);
    _context.lineTo(this.end_vector.x, this.end_vector.y);
    _context.stroke();
    _context.closePath();

};

Slope.prototype.circle_collision_detect = function (particle, size) {

    if(this.count < 40){
        console.log("");
        console.log("count: "+ this.count);
        console.log("----");
    }

    var particleFromStartVector = particle.position.edge(this.start_vector);
    var judgingValue = particleFromStartVector.dotProduct(this.edge_vector) / this.magnitude;

    var distance_between;

    if (judgingValue <= 0) {
        distance_between = particleFromStartVector.getMagnitude();

    }else if (judgingValue >= 1) {
        var particleFromEndVector = particle.position.edge(this.end_vector);
        distance_between = particleFromEndVector.getMagnitude();
    } else {
        distance_between = Math.abs(particleFromStartVector.dotProduct(this.normal_vector));
    }

    if (this.count < 40) {
        console.log(distance_between);
    }

    if (distance_between < size) {


        //calculation of the force
        var edgeForceProject = this.edge_vector.dotProduct(particle.force);
        var normalForceProject = this.normal_vector.dotProduct(particle.force);
        normalForceProject = 0;
        var calculatedForce = this.edge_vector.multipleVector(edgeForceProject);
        calculatedForce = calculatedForce.addVector(this.normal_vector.multipleVector(normalForceProject));

        particle.force = calculatedForce;
    }

    this.count++;

};