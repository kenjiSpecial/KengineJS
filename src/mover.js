var Mover = function(){
    this.shape = undefined;

    this.dt = 0;
    this.time_sum = undefined;
//    this.last_time = new Date().getTime();

    this.timer = false;
};

Mover.prototype.startTime = function(){
    this.last_time = new Date().getTime();

    this.time_sum = 0;
    this.timer = true;
};

Mover.prototype.update = function(){
    this.dt = (new Date().getTime() - this.last_time)/1000;
//    _shape.update(dt);
    this.time_sum += this.dt;

    if(this.timer){
        requestAnimFrame(this.update());
    }
};


Mover.prototype.stop = function(){
    if(this.timer){
        this.timer = false;
    }
}

Mover.prototype.moveObject = function(){
    this.shape.position
};

