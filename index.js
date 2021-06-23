let currentDate = document.getElementById('currentDate'),
checkbox = document.getElementById('checkbox'),
switchOn = document.getElementById('switchOn'),
switchOff = document.getElementById('switchOff'),
horas = document.getElementById('horas'),
minutos = document.getElementById('minutos'),
segundos = document.getElementById('segundos'),
miliSegundos = document.getElementById('miliSegundos'),
buttonBreackPoint = document.getElementById('buttonBreackPoint'),
playButton = document.getElementById('play'),
stopButton = document.getElementById('stop'),
newTime = document.getElementById('newTime'),
newTimeNum = document.getElementById('newTimeNum'),
content_newTimeNum = document.getElementById('content_newTimeNum'),
clean = document.getElementById('Clean'),
iconPlay = document.getElementById('iconPlay'),
containerNewTime = document.getElementById('container-newTime'),
am_pm = document.getElementById('AM-PM'),
containTimeBreak = document.getElementById('contain-TimeBreak');
playButton.addEventListener('click', play)
buttonBreackPoint.addEventListener('click', breakPonint)
stopButton.addEventListener('click', reset)
clean.addEventListener('click', cleaner)
checkbox.addEventListener('click', onOff)

// -----------------------VARIABLES------------------------
let milSeg = 0, seg = 0, min = 0, hours = 0, intervalMilSeg, intervalSeg, intervalMinutes,
intervalHours, playing = false, number = 0, intervalDate, x = true;
let pause = "./images/pausa.svg";

// -----------------------FUNCIONES------------------------

switchOn.textContent = 'on'
switchOff.textContent = 'off'
function intervalDateFunc(){
    intervalDate = setInterval(function(){
    let timeClass = new Date()
    let currentHours = timeClass.getHours(),
    currentMinutes = timeClass.getMinutes(),
    currentSeconds = timeClass.getSeconds();
    am_pm.textContent = 'AM'

    if(currentHours >= 12){
      currentHours -=12
      am_pm.textContent = 'PM'
    }
    if(am_pm.textContent == 0){
      currentHours +=12
    }
    if(currentHours < 10){
      currentHours = `0${currentHours}`}
    if(currentSeconds < 10){
      currentSeconds = `0${currentSeconds}`}
    if(currentMinutes < 10 ){
      currentMinutes = `0${currentMinutes}`}

     currentDate.textContent = `${currentHours}:${currentMinutes}:${currentSeconds}`
   },1000);
}

function onOff(){
  if(x){
    intervalDateFunc()
    horas.textContent ="00:"
    minutos.textContent ="00:"
    segundos.textContent ="00:"
    miliSegundos.textContent ="00"
     x = false

  }else{
    clearInterval(intervalDate)
    currentDate.textContent = ""
     am_pm.textContent = ''
     horas.textContent =""
     minutos.textContent =""
     segundos.textContent =""
     miliSegundos.textContent =""
     number = ""
     newTime.textContent = ""
     content_newTimeNum.innerHTML = ""
     containTimeBreak.innerHTML = ""
     x = true
  }
  clearInterval(intervalSeg)
  clearInterval(intervalMilSeg)
  clearInterval(intervalMinutes)
  clearInterval(intervalHours)
  playButton.value = 'Play'
  iconPlay.src = "./images/play.svg"
}


// horas.textContent = hours  + "0:"
// minutos.textContent = min  + "0:"
// segundos.textContent = seg + "0:"
// miliSegundos.textContent = milSeg + "0"

function milSegPlay(){
  intervalMilSeg = setInterval(() => {
    milSeg ++
    if(milSeg === 100){
      milSeg = 0
    }
    if(milSeg < 10){
      milSeg = `0${milSeg}`
    }
    miliSegundos.textContent = milSeg
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
    segundos.textContent = `${seg}:`
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
    minutos.textContent = `${min}:`
  },60000)
}

function hoursPlay(){
  intervalHours = setInterval(()=>{
    hours ++
    if(hours<10){
      hours = `0${hours}`
    }
    horas.textContent = `${hours}:`
  },3600000)
}

function play(){
  if(!x){
    if(!playing){
      segPlay()
      minutesPlay()
      hoursPlay()
      milSegPlay()
      playing = true
      playButton.value = 'Pause'
      iconPlay.src = "./images/pausa.svg"
    }else{
      clearInterval(intervalSeg)
      clearInterval(intervalMilSeg)
      clearInterval(intervalMinutes)
      clearInterval(intervalHours)
      playing = false
      playButton.value = 'Play'
      iconPlay.src = "./images/play.svg"
    }
  }
}

function reset(){
  if(!x){
    clearInterval(intervalSeg)
    clearInterval(intervalMilSeg)
    clearInterval(intervalMinutes)
    clearInterval(intervalHours)
    milSeg = 0, seg = 0, min = 0, hours = 0
    horas.textContent ="00:"
    minutos.textContent ="00:"
    segundos.textContent ="00:"
    miliSegundos.textContent ="00"
    playing = false
    playButton.value = 'Play'
    iconPlay.src = "./images/play.svg"
  }
}

function cleaner(){
  if(!x){
    number = ""
    newTime.textContent = ""
    content_newTimeNum.innerHTML = ""
    containTimeBreak.innerHTML = ""
  }
}

let fragment = document.createDocumentFragment()
function breakPonint(){
  if(!x){
    number ++
    let element = document.createElement('div')
    element.textContent = number
    element.classList = 'newTimeNum'
    fragment = element
    content_newTimeNum.appendChild(fragment)

    let time = document.createDocumentFragment()
    let timeElement = document.createElement('p')
    timeElement.classList = 'newTimeNum2'

    let timeBreak = document.createDocumentFragment()
    let timeElementBreak = document.createElement('p')
    timeElementBreak.classList = 'newTimeNum3'

    let timeClass = new Date()
    let currentHours = timeClass.getHours(),
    currentMinutes = timeClass.getMinutes(),
    currentSeconds = timeClass.getSeconds();

    if(currentHours >= 12){
      currentHours -=12
    }
    if(am_pm.textContent == 'AM'){
      currentHours +=12
    }
    if(currentHours < 10){
      currentHours = `0${currentHours}`}
    if(currentSeconds < 10){
      currentSeconds = `0${currentSeconds}`}
    if(currentMinutes < 10 ){
      currentMinutes = `0${currentMinutes}`}

      timeElementBreak.textContent += `${currentHours}:${currentMinutes}:${currentSeconds}`;
      timeBreak = timeElementBreak;
      containTimeBreak.appendChild(timeBreak)
      console.log(timeBreak)

      // if(milSeg < 10){ milSeg = `0${milSeg}`}
      // if(seg < 10){ seg = `0${seg}` }
      // if(min < 10){ min = `0${min}` }
      // if(hours < 10){ hours = `0${hours}`}
      // timeElement.textContent = `${hours}:${min}:${seg}:${milSeg}`
      // time = timeElement
      // newTime.appendChild(time)

    if( milSeg == 0 && seg == 0 && min == 0 && hours == 0){
      timeElement.textContent = `${hours}:0${min}:0${seg}:0${milSeg}`
      time = timeElement
      newTime.appendChild(time)
    }else{
      // if(milSeg < 10){ milSeg = `0${milSeg}`}
      // if(seg < 10){ seg = `0${seg}` }
      // if(min < 10){ min = `0${min}` }
      // if(hours < 10){ hours = `0${hours}`}
      timeElement.textContent = `${hours}:${min}:${seg}:${milSeg}`
      time = timeElement
      newTime.appendChild(time)
    }
  }
}
