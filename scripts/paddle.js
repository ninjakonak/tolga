import * as constants from "./constants.js"

export var position = new Object({x:0, y:0});
var absolutePosition = new Object({x: position.x + constants.screenwidth / 2, y: position.y + 19 * constants.screenheight / 20})

export var mouseHold = false;
export var mousePosition = new Object({x: 0, y: 0});

window.onpointerdown = (event) =>{
    mouseHold = true;
    mousePosition.x = event.pageX;
    mousePosition.y = event.pageY;
}


window.onpointerup = (event) => {
    mouseHold = false;
} 

export var MovePaddle = () => {
    if(!mouseHold) return;

    let halfwidth = constants.screenwidth / 2
        
    if((position.x + (constants.paddleWidth / 2) < halfwidth) && (mousePosition.x > (halfwidth))){
        absolutePosition.x += 10;
    }

    if((position.x > (constants.paddleWidth / 2) - halfwidth) && mousePosition.x < (halfwidth)){
        absolutePosition.x -= 10;
    }

    position.x = absolutePosition.x - constants.screenwidth / 2;  
    constants.paddle.style.left = "" + position.x + "px";
}

export var CheckPaddleCollision = (ballX, ballY, ballWidth, ballHeight) => {
    //console.log(absolutePosition.x)
    if(ballX + ballWidth > absolutePosition.x - constants.paddleWidth / 2 && ballX < absolutePosition.x + constants.paddleWidth / 2 && ballY + ballHeight > absolutePosition.y && ballY < absolutePosition.y + constants.paddle.style.height){
        return [true, absolutePosition.x - (ballX + ballWidth / 2)];
    }
    if(constants.iOS){
        if(ballX + ballWidth > absolutePosition.x - constants.paddleWidth / 2 && ballX < absolutePosition.x + constants.paddleWidth / 2 && ballY + ballHeight + 100 > absolutePosition.y && ballY < absolutePosition.y + constants.paddle.style.height){
            return [true, absolutePosition.x - (ballX + ballWidth / 2)];
        }
    }
    return [false, 0];
    
}