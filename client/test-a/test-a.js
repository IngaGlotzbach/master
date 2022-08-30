(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2876608,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

let inputCountry = document.getElementById('inputCountry');
let inputHouse = document.getElementById('inputHouse');
let inputPet = document.getElementsByName('pet')
let inputHand = document.getElementsByName('rightHand')
let inputBundesland = document.getElementById('inputBundesland')
let inputEasyQuestion = document.getElementById('inputEasyQuestion')

const ws = new WebSocket('ws://3.73.4.211:3000');

function msg(){
  alert(inputCountry.value)
}

const container = document.getElementById('container')
let timeBetween = 0; 
let timeStampFocus = 0;
let timeStampBlur = 0; 
let msgArray = []

window.addEventListener('DOMContentLoaded', function() {
  ws.onopen = function() {
    console.log('Connected to Client');
    listenerForFocusAndBlur(inputCountry)
  }
});

function listenerForFocusAndBlur(element) {
  ['focus', 'blur'].forEach(elementEvents => {
    element.addEventListener(elementEvents, event => {
      if(event.type === 'focus') {
        timeStampFocus = event.timeStamp;
        ws.send(event)
      } else if(event.type === 'blur') {
        timeStampBlur = event.timeStamp;
        timeBetween = timeStampBlur - timeStampFocus
        ws.send(event)
      }
    })
  })
}

// ws.onopen = function() {
//     console.log('WebSocket Client Connected');

//     mouseMove.addEventListener('mousemove', e => {
//         ws.send(e.pageX, e.offsetY)
//     })
// };


// das bezieht sich wirklich nur aufs window
Object.keys(window).forEach(key => {
if(/^on(pointer)/.test(key)) {
window.addEventListener(key.slice(2), event => {
    console.dir(event)
    })
  }
})

// inputCountry.onfocus = (e) => {
//   this.timeStampFocus = e.timeStamp
//   console.log(timeStampFocus)
// }

// timeBetween = timeStampBlur - timeStampFocus

// console.log(timeBetween)

// inputCountry.onclick = (e) => {
//   console.log(e)
// }






// const send = document.querySelector('#send');
// var mouseMove = document.getElementById('hello')

// ws.onopen = function() {
//     console.log('WebSocket Client Connected');

//     mouseMove.addEventListener('mousemove', e => {
//         ws.send(e.pageX, e.offsetY)
//     })
// };