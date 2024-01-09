const box = document.querySelector(".box");
const speedBtn = document.querySelectorAll('[data-setting="speed"]');
const colorBtn = document.querySelectorAll('[data-setting="color"]');
const slider = document.querySelector("#slider");
const sliderInfo = document.querySelector(".slider-info");

const squares = 546;
let range = 360;

const createSquare = speed =>{
  box.innerHTML = ''

  for(let i = 0; i < squares; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.style.transitionDuration = speed

    square.addEventListener('mouseover',() =>setColor(square))
    square.addEventListener('mouseout',() =>removeColor(square))

    box.appendChild(square)
  }
}

const setColor = square => { 
  let h

  if(range === 360){
    h = Math.floor(Math.random()*360)
  }else{
    h = Math.floor(Math.random()* 60)+range
  }

  const s = slider.value + '%'
  const l = '50%'

  square.style.backgroundColor = `hsl(${h},${s},${l})`
  
 }

 const removeColor = square => { 
  square.style.backgroundColor = `transparent`
}

function handleSpeed () { 
    const  newSpeed = this.dataset.speed +'s'
    console.log(newSpeed)
    createSquare(newSpeed)
 }

function handleColorRange () { 
  range = parseInt(this.dataset.colorRange)
  console.log(range)
 }

 const showSliderInfo = () => { 
  sliderInfo.textContent = slider.value
  }
 

slider.addEventListener('mousemove', showSliderInfo)  
colorBtn.forEach(btn=>btn.addEventListener('click', handleColorRange))
speedBtn.forEach(btn=> btn.addEventListener('click', handleSpeed))
createSquare()