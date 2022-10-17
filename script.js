

//Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

function countdown(num) {
let decrement = setInterval(function(){
        console.log(num);
        num--;
        if (num === 0) {
            console.log("DONE!");
            clearInterval(decrement);
        }
    }, 1000);
}

