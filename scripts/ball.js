import * as constants from "./constants.js";
import { CheckBlockCollision } from "./blocks.js";
import { CheckPaddleCollision } from "./paddle.js"; 

var ballCoordinates = new Object({x: constants.screenwidth/2 - constants.ballWidth / 2, y:constants.screenheight / 2});
var ballSpeed = new Object({x: 0, y: 3});
var absoluteBallCoordinates = new Object({x: ballCoordinates.x, y: ballCoordinates.y});

export var MoveBall = () =>{

    let collidedBlock;
    let collidedBlocks;
    let collidedPaddle;
    let speedChangePaddle = 0;

    let speedChangeBlock = {x: 1, y: 1}

    

    absoluteBallCoordinates.x = ballCoordinates.x;
    absoluteBallCoordinates.y = ballCoordinates.y;



    [collidedBlock, collidedBlocks] = CheckBlockCollision(absoluteBallCoordinates.x, absoluteBallCoordinates.y, constants.ballWidth, constants.ballHeight);
    [collidedPaddle, speedChangePaddle] = CheckPaddleCollision(absoluteBallCoordinates.x, absoluteBallCoordinates.y, constants.ballWidth, constants.ballHeight);
    
    if(collidedBlock){
        collidedBlocks.forEach((block) => {
            let yCut;
            let xCut;

            if(ballCoordinates.y + constants.ballHeight > block.y + block.height){
                yCut = block.y + block.height - ballCoordinates.y; 
            }
            if(ballCoordinates.y + constants.ballHeight < block.y + block.height && ballCoordinates.y > block.y){
                yCut = constants.ballHeight;
            }
            if(ballCoordinates.y < block.y){
                yCut = ballCoordinates.y + constants.ballHeight - block.y;
            }

            if(ballCoordinates.x + constants.ballWidth > block.x + block.width){
                xCut = block.x + block.width - ballCoordinates.x; 
            }
            if(ballCoordinates.x + constants.ballWidth < block.x + block.width && ballCoordinates.x > block.x){
                xCut = constants.ballWidth;
            }
            if(ballCoordinates.x < block.x){
                xCut = ballCoordinates.x + constants.ballWidth - block.x;
            }
            console.log(yCut);
            console.log(xCut);
            
            if(yCut > xCut){
                speedChangeBlock.x = -1;
            }
            else{
                speedChangeBlock.y = -1;
            }
        })

        ballSpeed.y *= speedChangeBlock.y;
        ballSpeed.x *= speedChangeBlock.x;
    }
    if(collidedPaddle){
        ballSpeed.y *= -1;
        ballSpeed.x = 3 * speedChangePaddle / 150;
    }

    if(ballCoordinates.x < 0 || ballCoordinates.x > constants.screenwidth){
        ballSpeed.x *= -1;
    }
    if(ballCoordinates.y < 0){
        ballSpeed.y *= -1;
    }
    ballCoordinates.x += ballSpeed.x;
    ballCoordinates.y += ballSpeed.y;

    
    ChangeBallPosition(ballCoordinates.x, ballCoordinates.y);
}

export var ChangeBallPosition = (x, y) => {
    constants.ball.style.left = "" + x + "px";
    constants.ball.style.top = "" + y + "px";
    
}