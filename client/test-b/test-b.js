(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2876608,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

function msg() {
    const inputTestB = {
      hobby: document.getElementById('inputHobby').value,
      cancelor: document.getElementById('inputCancelor').value,
      temperature: document.getElementById('inputTemperature').value,
      days: document.getElementById('inputDays').value
    }
    for (const[key, val] of Object.entries(inputTestB)){
      alert(key, val)
    }
}