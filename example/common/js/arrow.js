var Arrow = function( _vector){
    this.vector = _vector;
    this.startVec = undefined;

    this.color = '#000';
    this.lineColor = "#cccccc";

    this.theta = Math.atan2( this.vector.y, this.vector.x);

    this.triangle_pt01 = new Vector( 10 * Math.cos(5/6 * Math.PI + this.theta), 10 * Math.sin(5/6 * Math.PI + this.theta));
    this.triangle_pt02 = new Vector( 10 * Math.cos(7/6 * Math.PI + this.theta), 10 * Math.sin(7/6 * Math.PI + this.theta));

};

Arrow.prototype.setStartPt = function( _vector){
    this.startVec = _vector;
};

Arrow.prototype.setVector = function( _vector){
    this.vector = _vector;

    this.theta = Math.atan2( this.vector.y, this.vector.x);
    this.triangle_pt01 = new Vector( 10 * Math.cos(5/6 * Math.PI + this.theta), 10 * Math.sin(5/6 * Math.PI + this.theta));
    this.triangle_pt02 = new Vector( 10 * Math.cos(7/6 * Math.PI + this.theta), 10 * Math.sin(7/6 * Math.PI + this.theta));
};

Arrow.prototype.draw = function(context){
    context.beginPath();
    context.strokeStyle = this.color;

    if(this.startVec === undefined){
        context.moveTo(0, 0);
        context.lineTo(this.vector.x, this.vector.y);
    }else{
        context.moveTo(this.startVec.x, this.startVec.y);
        context.lineTo(this.startVec.x + this.vector.x, this.startVec.y + this.vector.y);
    }

    context.stroke();
    context.closePath();

//    -------------------

    context.beginPath();
    context.strokeStyle = this.color;
    context.fillStyle = this.color;

    if(this.startVec === undefined){
        context.moveTo(this.vector.x, this.vector.y);
        context.lineTo(this.vector.x + this.triangle_pt01.x, this.vector.y+ this.triangle_pt01.y);
        context.lineTo(this.vector.x + this.triangle_pt02.x, this.vector.y+ this.triangle_pt02.y);
    }else{
        context.moveTo( this.startVec.x + this.vector.x, this.startVec.y + this.vector.y);
        context.lineTo( this.startVec.x + this.vector.x + this.triangle_pt01.x, this.startVec.y + this.vector.y+ this.triangle_pt01.y);
        context.lineTo( this.startVec.x + this.vector.x + this.triangle_pt02.x, this.startVec.y + this.vector.y+ this.triangle_pt02.y);
    }

    context.fill();
    context.stroke();
    context.closePath();

};

Arrow.prototype.draw_auxiliary = function(context){
    context.beginPath();
    context.strokeStyle = this.lineColor;

    if(this.startVec === undefined){
        context.moveTo(0, 0);
        context.lineTo(this.vector.x, this.vector.y);
    }else{
        context.moveTo(this.startVec.x, this.startVec.y);
        context.lineTo(this.startVec.x + this.vector.x, this.startVec.y + this.vector.y);
    }

    context.stroke();
    context.closePath();
};
