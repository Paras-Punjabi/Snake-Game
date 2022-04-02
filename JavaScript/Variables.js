export const WIDTH = 1200
export const HEIGHT = 600

export const FOOD_WIDTH = 40
export const FOOD_HEIGHT = 40
export const SNAKE_WIDTH = 40
export const SNAKE_HEIGHT = 40
export const SNAKE_SPEED = 40
export const blockSize = 40
export const TIME = 350
export let direction = {x:1,y:0}

export function resetDirection(){
    direction = {x:1,y:0}
}

export function getArray(){
    let xArray = [],yArray = []
    for(let i=0;i<WIDTH;i+=blockSize){
        xArray.push(i)
    }
    
    for(let i=0;i<HEIGHT;i+=blockSize){
        yArray.push(i)
    }
    return {xArray,yArray}
}







