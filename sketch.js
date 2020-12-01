var ball;
var db;





function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
   db = firebase.database();
   var ballRef = db.ref("/ballPosition/");
   ballRef.on("value",readPosition,showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    var ballRef2 = db.ref("/ballPosition/");  
    ballRef2.set({x:ball.x+x,y:ball.y+y})


}

function readPosition(data) {
  
 var pos = data.val();
 ball.x = pos.x;
 ball.y = pos.y;



}

function showError() {
console.log("error:")



}

