var sseconds = "00";
var sminutes = 25;

var bell = new Audio("bell.mp3");



function start_timer() {
  sminutes = 24;
  sseconds = 59;

  document.getElementById("minutes").innerHTML = sminutes;
  document.getElementById("seconds").innerHTML = sseconds;

  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  //minute counter
  function minutesTimer() {
    sminutes = sminutes - 1;
    document.getElementById("minutes").innerHTML = sminutes;
  }

  //second counter
  function secondsTimer() {
    sseconds = sseconds - 1;
    document.getElementById("seconds").innerHTML = sseconds;

    // If reached 0 then end the session
    if (sseconds <= 0) {
      if (sminutes <= 0) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Add the message to the html
        document.getElementById("done").innerHTML = "Session Completed!!";

        

        // end of session
        bell.play();
      }

      // Reset the session seconds to 60
      sseconds = 60;
    }
  }
}
