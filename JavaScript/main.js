import * as Snake from './Snake.js'
import * as Food from './Food.js'
import {WIDTH,HEIGHT,blockSize, TIME} from './Variables.js'

const canvas  = document.querySelector("canvas")
const music = new Audio("../music/music.wav")
const gameLoose = new Audio("../music/gameOver.wav")
const modal = document.querySelector("#modal")
canvas.width = WIDTH
canvas.height = HEIGHT
const ctx = canvas.getContext("2d")
let gameLoop = null
let score = 0
document.querySelector(".score").innerHTML = "Score: " + score

function makeBackground(){
  let dark = "#1D490C"
  let light = "#4A9529"

  for(let i=0;i<canvas.width/blockSize;i++){
    for(let j=0;j<canvas.height/blockSize;j++){
      ctx.beginPath()
      if((i+j)%2==0){
        ctx.fillStyle = dark
      }else{
        ctx.fillStyle = light
      }
      ctx.fillRect(i*blockSize,j*blockSize,i+blockSize,j+blockSize)
      ctx.closePath()

    }
  }
}

makeBackground()
Snake.makeSnake(ctx)
Food.changeFoodPosition(Snake.snakeArray)
Food.makeFood(ctx)

function foodCollision(){
  return (Snake.snake_x === Food.food_x) && (Snake.snake_y === Food.food_y)
}

function main(){
  if(Snake.handleCollision() || Snake.collisionWithItself()){
    clearInterval(gameLoop)
    modal.innerText = "Game Over"
    modal.classList.add("show")
    modal.classList.remove("hide")
    gameLoose.play()
  }
  
  if(foodCollision()){
    Snake.increaseLength()
    music.play()
    Food.changeFoodPosition(Snake.snakeArray)
    score +=5
    document.querySelector(".score").innerHTML = "Score: " + score
  }

  ctx.clearRect(0,0,canvas.width,canvas.height)
  makeBackground()
  Snake.makeSnake(ctx)
  Food.makeFood(ctx)
  Snake.moveSnake()
}

function startGame(){
  modal.classList.add("hide")
  modal.classList.remove("show")
  
  gameLoop = setInterval(()=>{
    Snake.handleSnake()
    main()
  },TIME)

  window.removeEventListener("keydown",startGame) 

}

window.addEventListener("keydown",startGame)

