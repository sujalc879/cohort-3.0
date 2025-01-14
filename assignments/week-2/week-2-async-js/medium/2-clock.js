// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function main() {
    let currentTime = new Date;
  function time() { 
    if (currentTime.getHours() > 12) {
            return "PM";
        }
        else {
            return "AM";
            } 
        }
           
            
    console.log(`Current time is ${currentTime.getHours()}:${currentTime.getMinutes()}::${currentTime.getUTCSeconds()} ${time()}`)
}

setInterval(main, 1000);
