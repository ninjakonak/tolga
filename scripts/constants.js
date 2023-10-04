export const SPEED = 60;
export const width = 20;
export const height = 10;
export const body = document.getElementById("screen-body")
export const screenbody = document.getElementById("body")
export const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; 
export const screenwidth = (iOS) ? screen.width : window.innerWidth, screenheight = (iOS) ? screen.height : window.innerHeight;
if(iOS){
    screenbody.style.height = "90vh";
}
export const blockColor = "rgb(75, 90, 100)"
export const screenBodyColor = "rgb(95, 158, 160)"
export const paddle = document.getElementById("paddle")
export const ball = document.getElementById("ball")
//export const screenwidth = document.documentElement.clientWidth;
//export const screenheight = window.innerHeight;

//export const screenheight = screen.height;
//export const screenheight = document.documentElement.clientHeight;
export const paddleWidth = 4 * screenwidth / 10;
export function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}
export function vw(percent) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
}
export const ballWidth = 10;//Math.min(vh(4), vw(4));
export const ballHeight = 10;//Math.min(vh(4), vw(4));