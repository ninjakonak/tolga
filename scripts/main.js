import * as constants from "./constants.js"
import {InitBlocks} from "./blocks.js"
import {Update} from "./update.js"

var lastRenderTime;

function update(currentTime){
    

    window.requestAnimationFrame(update);
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    if(secondsSinceLastRender < (1 / constants.SPEED))return

    Update();

    lastRenderTime=currentTime;

    
    
}

function main(){
    InitBlocks();
    window.requestAnimationFrame(update);
}

main();