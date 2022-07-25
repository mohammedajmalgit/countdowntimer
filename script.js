const monthsEl= document.getElementById('months')
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')


var nextYear = new Date('1 Jan '+(new Date().getFullYear()+1))
// var nextYear = (new Date().getFullYear())+1;
function updateYear(year){
    var value = prompt("Enter Year")
    // nextYear = new Date('1 Jan '+ value);
    if(value<=new Date().getFullYear()){
        console.log("current Year:", new Date().getFullYear());
        console.log('Entered Year:', value)
        alert('Enter a future year')
    }else{
        nextYear = new Date('1 Jan '+ value);
    }
}

function calculateTimeLeft(){
    var today = new Date();

    var timeLeft = nextYear - today;

    var monthsLeft = Math.floor(timeLeft/(1000*3600*24*30))
    var balanceTime = monthsLeft*30;
    var daysLeft = Math.floor(timeLeft/(1000*3600*24))- balanceTime
    balanceTime = (balanceTime+daysLeft)*24 
    var hoursLeft = Math.floor(timeLeft/(1000*3600))-(balanceTime)
    balanceTime = (balanceTime+hoursLeft)*60
    var minutesLeft = Math.floor(timeLeft/(1000*60))-(balanceTime)
    balanceTime = (balanceTime+minutesLeft)*60
    var secondsLeft = Math.floor(timeLeft/1000)-(balanceTime)

    monthsEl.innerHTML = monthsLeft
    daysEl.innerHTML = daysLeft
    hoursEl.innerHTML = hoursLeft
    minutesEl.innerHTML = minutesLeft
    secondsEl.innerHTML = secondsLeft

}
setInterval(calculateTimeLeft, 1000)
