

// 30 sec countdown Timer  

var seconds = 60;

var timerId;

function reset(){
    seconds = 60;
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
      lastStep ();
        
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
    $('#doneButton').hide();
    $('#finalContent').hide();
}

$('#startButton').on("click", function(){
    run()
    $('#startButton').hide();
    $('#q1').show();
    $('#q2').show();
    $('#q3').show();
    $('#q4').show();
    $('#doneButton').show();
})

var trueAns = 0;
var falseAns = 0;


$('.www').click(function(){
  var incorrect = $("input[value='false']:checked").val();
  var correct = $("input[value='true']:checked").val();
  // var neverClicked = $("input:unchecked").val(); 
  if(incorrect){
    falseAns++;
     console.log(falseAns);
     $('#wa').html('WRONG ANSWERS:'+ falseAns);
  }else if(correct){
    trueAns++;
    console.log(trueAns);
    $('#ca').html('CORRECT ANSWERS:'+trueAns);
  } else {
    neverClicked++;
    $('#ua').html('UNANSWERED:'+ neverClicked);
  }
});



function lastStep (){
  hideAll();
  $('#finalContent').show();
  
  
}

$('#doneButton').click(function(){
lastStep();
});





