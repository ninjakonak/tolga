import * as constants from "./constants.js"
import {IX} from "./IX.js"

export var InitBlocks = () => {
    
    for(let i = 0; i < constants.height; i ++){
        for(let j = 0; j < constants.width; j++){
            let block = document.createElement("div");

            constants.body.appendChild(block)

            block.id = "" + IX(j, i, constants.width);

            let img = document.createElement("img")
            img.src = "assets/tolga2.jpg";
            var blockWidth = (constants.screenwidth) / constants.width
            var blockHeight = (constants.screenheight / 2.4) / constants.height
            img.style.width = blockWidth+"px";
            img.style.height = blockHeight+"px";
            img.style.margin = "auto";

            block.appendChild(img);

            let blockElement = document.getElementById(IX(j, i, constants.width));

            blockElement.style.gridColumnStart = j + 1;
            blockElement.style.gridRowStart = i + 1;

            blockElement.style.backgroundColor = constants.blockColor;
        }
    } 
    
}

var collide = (ballX, ballY, ballWidth, ballHeight, blockX, blockY, blockWidth, blockHeight) => {
    return ballX + ballWidth > blockX && ballX < blockX + blockWidth && ballY + ballHeight > blockY && ballY < blockY + blockHeight;
}

export var CheckBlockCollision = (ballX, ballY, ballWidth, ballHeight) =>{

    var blockWidth = (constants.screenwidth) / constants.width
    var blockHeight = (constants.screenheight / 2) / constants.height

    var collided = false;
    
    var collidedBlocks = [];

    var horizontal = false;
    var vertical = false;

    
    

    for(let i = 0; i < constants.height; i++){
        for(let j = 0; j < constants.width; j++){
            let block = document.getElementById(IX(j, i, constants.width));



            let blockX = j * blockWidth;
            let blockY = i * blockHeight;

            //console.log(block.style.top)

            
            
            if(collide(ballX, ballY, ballWidth, ballHeight, blockX, blockY, blockWidth, blockHeight) && block.style.backgroundColor != constants.screenBodyColor){
                block.style.backgroundColor = constants.screenBodyColor;
                block.removeChild(block.firstChild);
                collided = true;
                collidedBlocks.push({x:blockX, y:blockY, width:blockWidth, height: blockHeight})
            }
            
        }
    }

    return [collided, collidedBlocks];
}