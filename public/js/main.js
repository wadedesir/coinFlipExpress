//got help from brian melara
document.querySelector('.flipB').addEventListener('click', flipCoin)
document.querySelector('.resetB').addEventListener('click', resetAll)

let headsCounter = document.querySelector('.h span')
let tailsCounter= document.querySelector('.t span')
let hr=document.querySelector('#coin')
let front=0
let back=0
let timer = 0

function flipCoin(){

  if (timer === 0) {
    timer = setTimeout( () => resetTime(), 2900)
  }else{
    alert("flip in progress")
    return
  }

  fetch(`/flip`)
    .then( (response) => response.json())
    .then( (data) => {
      console.log(data.side);
      flip(data.side)
    })

}

function resetAll(){
  back = 0
  front = 0
  headsCounter.innerText=front
  tailsCounter.innerText=back
}

function resetTime(){
  hr.classList.remove("tailsFront")
  if (hr.classList.contains('animate-heads')){
    hr.classList.remove("animate-heads")

  }else if (hr.classList.contains('animate-tails')){
    hr.classList.remove("animate-tails")
    coin.setAttribute('class', 'tailsFront');
  }

  timer = 0
}

function flip(side){
  if (side === 'heads'){
    front++
    coin.setAttribute('class', 'animate-' + 'heads');
    headsCounter.innerText=front
  }
  else{
    back++
    coin.setAttribute('class', 'animate-' + 'tails');
    tailsCounter.innerText=back
  }

}
