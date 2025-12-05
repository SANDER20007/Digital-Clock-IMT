function startTime (){
const today = new Date();
let hours = today.getHours();
let munits = today.getMinutes();
let seconds = today.getSeconds ();
munits = checkTime(munits);
 seconds = checkTime(seconds);
  document.getElementById('Hours').innerHTML =  hours ;
  document.getElementById('Minutes').innerHTML =  munits ;
   document.getElementById('Seconds').innerHTML =  seconds ;
  setTimeout(startTime, 1000);

}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}