import {MovePaddle} from "./paddle.js"
import { MoveBall } from "./ball.js";
import * as constants from "./constants.js"

export function Update(){
    MovePaddle();
    MoveBall();
}