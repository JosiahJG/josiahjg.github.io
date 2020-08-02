var r;
if(!localStorage.getItem('bgNum') || localStorage.getItem('bgTime') < (new Date()).getTime()- 1000*60*60*12){
  r = Math.floor(Math.random() * 12);
  localStorage.setItem('bgNum', r);
  localStorage.setItem('bgTime', (new Date()).getTime());
} else {
  r = localStorage.getItem('bgNum');
}
document.body.style["background-image"] =  'url("images/background'+r+'.jpg")';

console.log(r + " test " + localStorage.getItem('bgNum'));
