

// 30 sec countdown Timer  

var seconds = 5;

var timerId;

function reset(){
    seconds = 5;
}

function run() {
    clearInterval(timerId);
    timerId = setInterval(decrement, 1000);
  }
  function decrement() {

    //  Decrease number by one.
    seconds--;
    //  Show the number in the #show-number tag.
    $("#setTimer").html('<h1>Seconds Left:' + seconds + '</h1>');


    //  Once number hits zero...
    if (seconds === 0) {

      //  ...run the stop function.
      stop();
    
        
      //  Alert the user that time is up.
      }
  }

  //  The stop function
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(timerId);
  }

  //  Execute the run function.
  


//============================================================================
hideAll();
function hideAll (){
    $('#q1').hide();
    $('#q2').hide();
    $('#q3').hide();
    $('#q4').hide();
}

$('#startButton').on("click", function(){
    run()
    $('#startButton').hide();
    $('#q1').show();
    $('#q2').show();
    $('#q3').show();
    $('#q4').show();
})