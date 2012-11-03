/**
 * Created with JetBrains WebStorm.
 * User: saito
 * Date: 02.11.12
 * Time: 16:53
 * To change this template use File | Settings | File Templates.
 */

var Matrix = new function(){
    this.vals = [];
//    the matrix;
//    | [0] [1] [2] |
//    | [3] [4] [5] |
//    | [6] [7] [8] |

    this.vals[0] = 1;
    this.vals[1] = 0;
    this.vals[2] = 0;
    this.vals[3] = 0;
    this.vals[4] = 1;
    this.vals[5] = 0;
    this.vals[6] = 0;
    this.vals[7] = 0;
    this.vals[8] = 1;
};

Matrix.prototype.translation = function( dx, dy){
    this.vals[2] = dx;
    this.vals[5] = dy;
};

Matrix.prototype.translation = function( scalingX, scalingY){
    this.vals[0] = scalingX;
    this.vals[4] = scalingY;
};

Matrix.prototype.rotate = function( theta){
    this.vals[0] = Math.cos(theta);
    this.vals[1] = -Math.sin(theta);
    this.vals[2] = Math.sin(theta);
    this.vals[3] = Math.cos(theta);
};

Matrix.prototype.skewing = function(skewX, skewY){
    this.vals[2] = Math.tan(skewX);
    this.vals[3] = Math.tan(skewY);
};

Matrix.prototype.apply_Vector = function( vector){
    var _vector = new Vector();
    _vector.x = this.vals[0] * vector.x + this.vals[1] * vector.y + this.vals[2];
    _vector.y = this.vals[4] * vector.y + this.vals[5] * vector.y + this.vals[6];
};