let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')
let miliSegundos = document.getElementById('miliSegundos')
let buttonBreackPoint = document.getElementById('buttonBreackPoint')
let playButton = document.getElementById('play')
let stopButton = document.getElementById('stop')
let newTime = document.getElementById('newTime')
playButton.addEventListener('click', play)
buttonBreackPoint.addEventListener('click', breakPonint)
stopButton.addEventListener('click', reset)

let milSeg = 0, seg = 0, min = 0, hours = 0, intervalMilSeg, intervalSeg, intervalMinutes, intervalHours, playing = false, number = 0

horas.innerText = hours  + "0:"
minutos.innerText = min  + "0:"
segundos.innerText = seg + "0:"
miliSegundos.innerText = milSeg + "0"

function milSegPlay(){
  intervalMilSeg = setInterval(() => {
    milSeg ++
    if(milSeg === 100){
      milSeg = 0
    }
    if(milSeg < 10){
      milSeg = `0${milSeg}`
    }
    miliSegundos.innerText = milSeg
  }, 10);
}
function segPlay(){
  intervalSeg = setInterval(()=>{
    seg ++
    if(seg === 60){
      seg = 0
    }
    if(seg<10){
      seg = `0${seg}`
    }
    segundos.innerText = `${seg}:`
  },1000)
}
function minutesPlay(){
  intervalMinutes = setInterval(()=>{
    min ++
    if(min == 60){
      min = 0
    }
    if(min<10){
      min = `0${min}`
    }
    minutos.innerText = `${min}:`
  },60000)
}

function hoursPlay(){
  intervalHours = setInterval(()=>{
    hours ++
    if(hours<10){
      hours = `0${hours}`
    }
    horas.innerText = `${hours}:`
  },3600000)
}

function play(){
  if(!playing){
    segPlay()
    minutesPlay()
    hoursPlay()
    milSegPlay()
    playing = true
    playButton.value = 'Pause'
  }else{
    clearInterval(intervalSeg)
    clearInterval(intervalMilSeg)
    clearInterval(intervalMinutes)
    clearInterval(intervalHours)
    playing = false
    playButton.value = 'Play'
  }
}

function reset(){
  clearInterval(intervalSeg)
  clearInterval(intervalMilSeg)
  clearInterval(intervalMinutes)
  clearInterval(intervalHours)
  milSeg = 0, seg = 0, min = 0, hours = 0
  horas.innerText ="00:"
  minutos.innerText ="00:"
  segundos.innerText ="00:"
  miliSegundos.innerText ="00"
  playing = false
  playButton.value = 'Play'
}


function breakPonint(){
  number += 1
  if(milSeg == 0 && seg == 0 && min == 0 && hours == 0){
    newTime.innerText = newTime.innerText + `(${number}) ${seg}0:${min}0:${seg}0:${milSeg} \n`
  }else {
    newTime.innerText = newTime.innerText + `(${number}) ${seg}:${min}:${seg}:${milSeg} \n`
  }
}
