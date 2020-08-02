var lightbgs = {0:true,3:true,6:true,8:true};

var r;
if(!localStorage.getItem('bgNum') || localStorage.getItem('bgTime') < (new Date()).getTime()- 1000*60*60*12){
  r = Math.floor(Math.random() * 12);
  localStorage.setItem('bgNum', r);
  localStorage.setItem('bgTime', (new Date()).getTime());
} else {
  r = localStorage.getItem('bgNum');
}
r=2;
console.log(["debug", banner]);

document.body.style["background-image"] =  'url("images/background'+r+'.jpg")';
var banner = document.getElementById("banner");
if(lightbgs[r]) banner.className = "lightbg";
else banner.className = "darkbg";
