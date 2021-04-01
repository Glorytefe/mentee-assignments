let container = document.getElementById('container');
let timeHolder = document.getElementById('tm');
let dateHolder = document.getElementById('dt');
let imageArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '6.jpg', '7.jpg']
let date; 
let i = 0;
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function date
function dates(){
    date = new Date;
//  time andd date
let day = days[date.getDay()];
let dates = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hour = date.getHours();
let mins = date.getMinutes();
let ampm;
// converting 24h clock to 12h
if(hour>12){
    hour = hour-12;
    ampm = 'pm';
    // adjusting mins display
if(mins < 10){
    mins = 0 + "" + (mins)
}
}else if(hour<12){
    ampm = 'am'
}
// concat
let myTime = hour + ":" + mins + "" + ampm;
// concat
let myDate = day +", "  +dates +"/" + month +  "/" + year;
// display on  html page
dateHolder.innerText = myDate;
timeHolder.innerText = myTime;

}

// start function
function start (){

// set interval function
setInterval(changeImg, 3000);



// change image
function changeImg (){
 if(i<imageArray.length){
// let i = Math.floor(Math.random() * imageArray.length);
     container.setAttribute('src', `./img/${imageArray[i]}`)
i++
 }
 else{
     i = 0;
 }

dates()


}


}


window.addEventListener('DOMContentLoaded', start)