console.log("working");
class Teacher2 {
    constructor(){
        this.width = 50;
        this.height = 50;
        this.x = gameCanvas.clientWidth;
        this.y = gameCanvas.clientHeight / 4;
    }
    draw(){
        //const image = new Image();
        //image.src = "";
        //context.drawImage(image, this.x, this.y, this.width, this.height);
        gameContext.fillStyle = "white";
        gameContext.fillRect(this.x, this.y, this.width, this.height);
    }
}
