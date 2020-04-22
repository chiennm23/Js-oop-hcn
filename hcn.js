function theRectangle(x, y, length, width) {
    this.x = x;
    this.y = y;
    this.Length = length;
    this.Width = width;

    this.getLength = function () {
        return this.Length;
    }
    this.getWidth = function () {
        return this.Width;
    }
    this.getAcreage = function () {
        return length * width;
    }
    this.getPerimeter = function () {
        return (length + width) * 2;
    }
    // this.setLength = function () {
    //     this.Length = length;
    // }
    // this.setWidth = function () {
    //     this.Width = width;
    // }
    // this.setRectangle = function () {
    //     return this.Length + " va "+this.Width;
    // }
}

let rectangle = new theRectangle(0,0,150,100);
let length = rectangle.getLength();
let width = rectangle.getWidth();
let acreage = rectangle.getAcreage();
let perimeter = rectangle.getPerimeter();
alert("perimeter of a rectangle: " + perimeter);
alert("acreage of a rectangle: " + acreage);
// recrangle.setLength(60);
// recrangle.setWidth(40);
// alert(recrangle.setRectangle());

function creatRectangle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.length, rectangle.width);
    ctx.fill();
    console.log(rectangle.length, rectangle.width);
}

creatRectangle();
