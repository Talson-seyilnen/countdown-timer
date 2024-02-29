function startTimer() { 
    var days = parseInt(document.getElementById("days").value) || 0; 
    var hours = parseInt(document.getElementById("hours").value) || 0; 
    var minutes = parseInt(document.getElementById("minutes").value) || 0; 
    var seconds = parseInt(document.getElementById("seconds").value) || 0; 
    var totalTime = days * 86400 + hours * 3600 + minutes * 60 + seconds; 
    var timerInterval = setInterval(function() { 
        if (totalTime <= 0) { 
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "Countdown finished!"; 
            return; } 
    var daysLeft = Math.floor(totalTime / 86400);
    var hoursLeft = Math.floor((totalTime % 86400) / 3600); 
    var minutesLeft = Math.floor((totalTime % 3600) / 60); 
    var secondsLeft = totalTime % 60;
    document.getElementById("timer").innerHTML = "Days: " + daysLeft + " Hours: " + hoursLeft + " Minutes: " + minutesLeft + " Seconds: " + secondsLeft; 
    totalTime--; }, 1000); 
}