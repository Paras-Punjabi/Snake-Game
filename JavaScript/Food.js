import { blockSize,FOOD_HEIGHT,FOOD_WIDTH,getArray } from "./Variables.js"

export let food_x = null
export let food_y = null

let {xArray,yArray} = getArray()

export function makeFood(ctx){
    ctx.beginPath()
    ctx.fillStyle = "#8B0000"
    ctx.rect(food_x,food_y,FOOD_WIDTH,FOOD_HEIGHT)
    ctx.fill()
    ctx.font = blockSize + "px monospace"
    ctx.fillStyle = "black"
    ctx.fillText("F",food_x+blockSize/4,food_y+blockSize/1.2,blockSize)
    ctx.closePath()
}

export function changeFoodPosition(snakeArray){
    let x = Math.floor(Math.random()*xArray.length)
    let y = Math.floor(Math.random()*yArray.length)
    for(let items of snakeArray){
        if(items.x === xArray[x] && items.y === yArray[y]){
            changeFoodPosition(snakeArray)
            return
        }
    }
    food_x =xArray[x]
    food_y=yArray[y]
}

export function resetFood(){
    food_x = 2*blockSize
    food_y = 10*blockSize
}
