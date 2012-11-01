var Coordinate = function(){
    if(arguments.length == 1){
        this.x = arguments[0].x;
        this.y = arguments[0].y;
    }else if(arguments.length == 2){
        this.x = arguments[0];
        this.y = arguments[1];
    }
};

Coordinate.prototype.draw = function(context, wd, hg){
    context.strokeStyle = "#999999";
    context.lineWidth = 1;

    context.beginPath();
    context.moveTo(this.x, 0);
    context.lineTo(this.x, hg);
    context.closePath();

    context.beginPath();
    context.moveTo(0, this.y);
    context.lineTo(wd, this.y);
    context.closePath();

    context.stroke();
};