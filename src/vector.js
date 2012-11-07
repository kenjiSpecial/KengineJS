//

var Canvas_Context = function(wd, hg){
    this.fillStyle = "#ffffff";
    this.wd = wd;
    this.hg = hg;
};

Canvas_Context.prototype.update_fill = function(context){
    context.clearRect(0, 0, this.wd, this.hg);

    context.fillStyle = this.fillStyle;
    context.fillRect( 0, 0, this.wd, this.hg);
};

//-------------------
//---Vector object---
//-------------------

var Vector = function(x, y){
    this.x = x;
    this.y = y;
};

Vector.prototype.add = function(x, y){
    this.x += x;
    this.y += y;
};

Vector.prototype.subtract = function(x, y){
    this.x += x;
    this.y += y;
}

Vector.prototype.addVector = function( _vec ){
    var vector = new Vector(this.x, this.y);
    vector.x += _vec.x;
    vector.y += _vec.y;
    return vector;
}

Vector.prototype.subtractVector = function( _vec ){
    var vector = new Vector(this.x, this.y);
    vector.x -= _vec.x;
    vector.y -= _vec.y;
    return vector;
}

Vector.prototype.addScaledVector = function( vector, val){
    var newVector = new Vector(this.x, this.y);
    newVector.x += vector.x * val;
    newVector.y += vector.y * val;

    return newVector;
}

Vector.prototype.multiple = function(val){
    var temVector = new Vector(this.x, this.y);

    temVector.x *= val;
    temVector.y *= val;

    return temVector;
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


Vector.prototype.crossProduct = function(vector){
    return this.x * vector.y - this.y * vector.x;
};



