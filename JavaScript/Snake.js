import {SNAKE_HEIGHT,SNAKE_WIDTH,SNAKE_SPEED,blockSize,direction, WIDTH, HEIGHT,getArray} from './Variables.js'
let {xArray,yArray} = getArray()

export let snake_x = xArray[parseInt(xArray.length/2)-1]
export let snake_y = yArray[parseInt(yArray.length/2)-1]
export let snakeArray = [{x:snake_x,y:snake_y}]

export function makeSnake(ctx){
    for(let items of snakeArray){
        ctx.beginPath()
        if(items.x === snakeArray[0].x && items.y===snakeArray[0].y){
            ctx.fillStyle = "orangered"
        }else{
            ctx.fillStyle = "yellow"
        }
        ctx.rect(items.x,items.y,SNAKE_WIDTH,SNAKE_HEIGHT)
        ctx.fill()
        ctx.font = blockSize + "px monospace"
        ctx.fillStyle = "black"
        ctx.fillText("S",snake_x+blockSize/4,snake_y+blockSize/1.2,blockSize)
        ctx.closePath()
    }
}

export function resetSnake(){
    snake_x = 6*blockSize
    snake_y = 4*blockSize
    snakeArray = [{x:snake_x,y:snake_y}]
} 

export function handleSnake(){
    window.addEventListener("keydown",(e)=>{
        if(e.key === "ArrowLeft"){
            if(direction.x === 0){
                direction.x=-1
                direction.y=0
            }
        }
        else if(e.key === "ArrowRight"){
            if(direction.x === 0){
                direction.x=1
                direction.y=0
            }
        }
        else if(e.key === "ArrowUp"){
            if(direction.y === 0){
                direction.y=-1
                direction.x=0
            }
        }
        else if(e.key === "ArrowDown"){
            if(direction.y === 0){
                direction.y=1
                direction.x=0
            }
        }
    })
}

export function moveSnake(){
    for(let i=snakeArray.length-1 ;i>0;i--){
        snakeArray[i].x = snakeArray[i-1].x
        snakeArray[i].y = snakeArray[i-1].y
    }
    snake_x += SNAKE_SPEED*direction.x
    snake_y += SNAKE_SPEED*direction.y
    snakeArray[0].x = snake_x
    snakeArray[0].y = snake_y
}


export function handleCollision(){
    return snakeArray[0].x <-blockSize || snakeArray[0].x>WIDTH+blockSize || snakeArray[0].y<-blockSize || snakeArray[0].y>HEIGHT+blockSize
}

export function increaseLength(){
    let coord = {...snakeArray[snakeArray.length-1]}
    snakeArray.push(coord)
}

export function collisionWithItself(){
    let head = snakeArray[0]
    for(let i=1;i<snakeArray.length;i++){
        if(head.x === snakeArray[i].x && head.y === snakeArray[i].y){
            return true
        }
    }
    return false
}
