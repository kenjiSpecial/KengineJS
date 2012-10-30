//Vector object

var Vector = function(x, y){
    this.x = x;
    this.y = y;
};

Vector.prototype.add = function(x, y){
    this.x += x;
    this.y += y;
};

Vector.prototype.addVector = function( _vec ){
    var vector = new Vector(this.x, this.y);
    vector.x += _vec.x;
    vector.y += _vec.y;
    return vector;
}

Vector.prototype.multiple = function(val){
    this.x *= val;
    this.y *= val;
}

Vector.prototype.multipleVector = function( val){
    var vector = new Vector(this.x, this.y);
    vector.x *= val;
    vector.y *= val;
    return vector;
}

Vector.prototype.edge = function(_vec){
    var v = new Vector();
    v.x = this.x - _vec.x;
    v.y = this.y - _vec.y;

    return v;
}

Vector.prototype.normal = function(){
    var perpendicular_vector = new Vector();
    perpendicular_vector.x = this.y;
    perpendicular_vector.y = -this.x;

    return perpendicular_vector.normalize();

};

Vector.prototype.normalize = function(){

    var v = new Vector();
    var m = this.getMagnitude();

    v.x = this.x / m;
    v.y = this.y / m;

    return v;
};

Vector.prototype.getMagnitude = function(){
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};

Vector.prototype.dotProduct = function(vector){
    return (this.x * vector.x + this.y * vector.y);
};


//-------------
//-------------
//Polygon object

var Polygon = function(vectors){
    this.vectors = vectors;
    this.fillColor = "#000";
    this.strokeColor = "#000";
};

Polygon.prototype.fill = function(context){
    context.save();
    context.fillStyle = this.fillColor;
    context.strokeStyle = this.strokeColor;
    this.createPath(context);
    context.stroke();
    context.fill();
    context.restore();
};

Polygon.prototype.createPath = function(context){
    if(this.vectors.length === 0) return;

    context.beginPath();
    context.moveTo(this.vectors[0].x, this.vectors[0].y);

    for(var i = 0; i < this.vectors.length; i++){
        context.lineTo(this.vectors[i].x, this.vectors[i].y);
    }

    context.closePath();
};

Polygon.prototype.move = function(){
    if(arguments.length == 1){

        if(arguments[0] instanceof Vector){

            for(var i = 0; i < this.vectors.length; i++){
                this.vectors[i].add(arguments[0].x, arguments[0].y);
            }

        }else{
            alert("nothing");
        }

        return;
    }else if(arguments.length == 2){

        for(var i = 0; i < this.vectors.length; i++){
            this.vectors[i].add(arguments[0], arguments[1]);
        }

        return;
    }else{
        return;
    }
}

Polygon.prototype.getAxes = function(){
    var v1 = new Vector();
    var v2 = new Vector();
    var axes = [];

    var vector_length = this.vectors.length;
    for(var i = 0; i < vector_length; i++){

        v1.x = this.vectors[i].x;
        v1.y = this.vectors[i].y;

        v2.x = this.vectors[(i + 1) % vector_length].x;
        v2.y = this.vectors[(i + 1) % vector_length].y;

        axes.push(v1.edge(v2).normal());
    }

    return axes;
};

Polygon.prototype.project = function(axis){
    var scalars = [];
    v = new Vector();

    this.vectors.forEach(function(vector){
        v.x = vector.x;
        v.y = vector.y;

        scalars.push(v.dotProduct(axis));
    });

    return new Projection(Math.min.apply(Math, scalars), Math.max.apply(Math, scalars));
}

Polygon.prototype.collideWidth = function(polygon){
    var axes = this.getAxes().concat(polygon.getAxes());

    for(var i = 0; i < axes.length; i++){
        axis = axes[i];

        projection1 = polygon.project(axis);
        projection2 = this.project(axis);

        if(! projection1.overlap(projection2)){
            return false;
        }

    }

    return true;
}

//project class

var Projection = function (min, max) {
    this.min = min;
    this.max = max;
};


Projection.prototype.overlap = function(projection){
    return this.max > projection.min && projection.max > this.min;
}

//-------------
//Circle Object

var Circle = function(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.strokeColor = '#000';
    this.fillColor = 'rgba(255, 255, 0, .6)'
};

Circle.prototype.createPath = function(context){
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.closePath();
};

Circle.prototype.fill = function(context){
    context.save();
    context.fillStyle = this.fillColor;
    context.strokeStyle = this.strokeColor;
    this.createPath(context);
    context.stroke();
    context.fill();
    context.restore();
};

Circle.prototype.move = function(dx, dy){
    this.x += dx;
    this.y += dy;
};

Circle.prototype.collideWidth = function(shape){
    var axes = shape.getAxes();

    if(axes == undefined){

        var distance = Math.sqrt(Math.pow(shape.x - this.x, 2) + Math.pow(shape.y - this.y, 2));
        return distance < Math.abs(this.radius + shape.radius);

    }else{
        return polygonCollidesWithCircle(shape, this);
    }

};

Circle.prototype.getAxes = function(){
    return undefined;
};

Circle.prototype.project = function(axis){
    var scalars = [];
    var point = new Vector(this.x, this.y);
    var dotProduct = point.dotProduct(axis);

    scalars.push(dotProduct);
    scalars.push(dotProduct + this.radius);
    scalars.push(dotProduct - this.radius);
    return new Projection(Math.min.apply(Math, scalars), Math.max.apply(Math, scalars));
};

function polygonCollidesWithCircle(polygon, circle){
    var closestPt = getPolygonPointClosestToCircle(polygon, circle);
    var axes = polygon.getAxes();

    var v1 = new Vector(circle.x, circle.y);
    var v2 = new Vector(closestPt.x, closestPt.y);

    axes.push(v1.edge(v2).normal());

    // detection of the overlap
    for(var i = 0;  i < axes.length; i++){
        var axis = axes[i];
        var projection1 = polygon.project(axis);
        var projection2 = circle.project(axis);

        if(! projection1.overlap(projection2)){
            return false;
        }

    }

    return true;
}

function getPolygonPointClosestToCircle(polygon, circle){
    var testPt;
    var min = 10000;
    var length;
    var closestPt;


    for(var i = 0; i < polygon.vectors.length; i++){
        testPt = polygon.vectors[i];
        length = Math.sqrt(Math.pow(testPt.x - circle.x, 2) + Math.pow(testPt.y - circle.y, 2));

        if(length < min){
            closestPt = testPt;
            min = length;
        }
    }

    return closestPt;
}

//--------
//--wall--
//--------

var Wall = function(){
    this.startVec = undefined;
    this.endVec = undefined;

    this.velocity = undefined;

    this.strokeColor = '#000';
    this.width = 1;
};

Wall.prototype.createPath = function(context){
    if(this.startVec !== undefined && this.endVec !== undefined){
        context.beginPath();
        context.moveTo(this.startVec.x, this.startVec.y);
        context.lineTo(this.endVec.x, this.endVec.y);
        context.closePath();
    }
};

Wall.prototype.line_stroke = function(context){
    context.save();
    context.strokeStyle = this.strokeColor;
    this.createPath(context);
    context.stroke();
    context.fill();
    context.restore();
};


Wall.prototype.collideCircle = function(circle){
    //judging the area where the circle is.
    var WallVec = this.endVec.edge(this.startVec);
    var circleVec = new Vector(circle.x, circle.y);
    var WallToCircleVec = circleVec.edge(this.startVec);

    var judgeVal = WallToCircleVec.dotProduct(WallVec) / WallVec.dotProduct(WallVec);

    var distance;

    if(judgeVal < 0){
        distance = Math.sqrt(Math.pow(circleVec.x - this.startVec.x, 2) + Math.pow(circleVec.y - this.startVec.y, 2));
    }else if(judgeVal > 1){
        distance = Math.sqrt(Math.pow(circleVec.x - this.endVec.x, 2) + Math.pow(circleVec.y - this.endVec.y, 2));
    }else{
        distance = Math.abs((this.endVec.x - this.startVec.x) * circle.y - (this.endVec.y - this.startVec.y) * circle.x - this.endVec.x * this.startVec.y + this.startVec.x * this.endVec.y)/Math.sqrt(Math.pow( this.endVec.y - this.startVec.y, 2) + Math.pow( this.endVec.x - this.startVec.x, 2));
    }

//    alert(distance);

    if(distance <= circle.radius){

        var WallVecHorizontalNormalize = WallVec.normalize();
        var WallVecNormalNormalize = WallVec.normal();

        var Wall_Horizontal_Val = WallVecHorizontalNormalize.dotProduct(circle.velocity);
        var Wall_Normal_Val = WallVecNormalNormalize.dotProduct(circle.velocity);

        Wall_Normal_Val *= - 1;
        var newHorizontalVec = WallVecHorizontalNormalize.multipleVector(Wall_Horizontal_Val);
        var newNormalVec = WallVecNormalNormalize.multipleVector(Wall_Normal_Val);

        var New_velocity = newHorizontalVec.addVector(newNormalVec);

        circle.velocity = New_velocity;

    }

};


