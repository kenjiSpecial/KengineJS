var Coordinate = function (wd, hg, vector) {
    this.wd = wd - 10;
    this.hg = hg - 10;

    this.image = new Image();
    this.image.src = '../../common/img/coordinate/origin.png';

    this.initVector = vector;

    this.xpos_image = new Image();
    this.xpos_image.src = '../../common/img/coordinate/x.png';

    this.ypos_image = new Image();
    this.ypos_image.src = '../../common/img/coordinate/y.png';
};

Coordinate.prototype.drawVector = function (context, vector) {
    context.strokeStyle = "#999999";
    context.lineWidth = 2;

    context.beginPath();
    context.moveTo(this.initVector.x + vector.x, this.initVector.y);
    context.lineTo(this.initVector.x + vector.x, this.initVector.y + 5);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(this.initVector.x, this.initVector.y + vector.y);
    context.lineTo(this.initVector.x + 5, this.initVector.y + vector.y);
    context.stroke();
    context.closePath();

    context.font = '14px sans-serif';
    context.fillStyle = '#999999';

    var vector_posX = ((vector.x * 10)|0)/10;
    var vector_posY = ((vector.y * 10)|0)/10;

    context.fillText( vector_posX.toString(), this.initVector.x + vector.x - 12, this.initVector.y - 5);
    context.fillText( vector_posY.toString(), this.initVector.x + 6, this.initVector.y + vector.y + 4);


};

Coordinate.prototype.draw = function (context) {
    context.strokeStyle = "#999999";
    context.lineWidth = 1;

    var originImage = this.image;
    var origin_pos_x = this.initVector.x - 20;
    var origin_pos_y = this.initVector.y - 20;

    
    originImage.onload = function () {
        context.drawImage(originImage, origin_pos_x, origin_pos_y);
    };

    var xpos_Image = this.xpos_image;
    var xpos_pos_x = this.wd - 20;
    var xpos_pos_y = this.initVector.y - 20;

    xpos_Image.onload = function () {
        context.drawImage(xpos_Image, xpos_pos_x, xpos_pos_y);
    }

    var ypos_Image = this.ypos_image;
    var ypos_pos_x = this.initVector.x - 20;
    var ypos_pos_y = this.hg - 20;

    ypos_Image.onload = function () {
        context.drawImage(ypos_Image, ypos_pos_x, ypos_pos_y);
    }

// ---------------------


    context.beginPath();
    context.moveTo(this.initVector.x, 0);
    context.lineTo(this.initVector.x, this.hg);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(this.initVector.x - 4, this.hg - 8);
    context.lineTo(this.initVector.x, this.hg);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(this.initVector.x, this.hg);
    context.lineTo(this.initVector.x + 4, this.hg - 8);
    context.closePath();
    context.stroke();

    //---------------------

    context.beginPath();
    context.moveTo(0, this.initVector.y);
    context.lineTo(this.wd, this.initVector.y);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(this.wd - 8, this.initVector.y - 4);
    context.lineTo(this.wd, this.initVector.y);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(this.wd, this.initVector.y);
    context.lineTo(this.wd - 8, this.initVector.y + 4);
    context.closePath();
    context.stroke();

};
