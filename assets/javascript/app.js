

// 30 sec countdown Timer  

var seconds = 60;

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
      endGame();
        
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
    $('#q5').hide();
    $('#doneButton').hide();
    $('#finalContent').hide();
    $('#setTimer').hide();

}

$('#startButton').on("click", function(){
    run()
    $('#startButton').hide();
    $('#q1').show();
    $('#q2').show();
    $('#q3').show();
    $('#q4').show();
    $('#q5').show();
    $('#doneButton').show();
    $('#setTimer').show();
});



/*
$('.www').click(function(){
  var incorrect = $("input[value='false']:checked").val();
  var correct = $("input[value='true']:checked").val();
  // var neverClicked = $("input:unchecked").val(); 
  if(incorrect){
    
     console.log(falseAns);
     $('#wa').html('WRONG ANSWERS:'+ falseAns);
  }else if(correct){
    
    console.log(trueAns);
    $('#ca').html('CORRECT ANSWERS:'+trueAns);
  } else {
    
    $('#ua').html('UNANSWERED:'+ neverClicked);
  }
});
*/


function lastStep (){
  hideAll();
  $('#finalContent').show();
  
  
}

$('#doneButton').click(endGame);

function endGame(){
  // lastStep();
  stop();
  var trueAns = 0;
  var falseAns = 0;
  var neverClicked = 0;
    $('form').each(function(i, element){
      console.log(i);
      console.log(element);
        var response = $(element).children('input:checked').val();
        if (response === "true"){
          trueAns++;
        } else if(response === "false"){
          falseAns++;
        } else {
          neverClicked++;
        }
    })
    $('#wa').html('WRONG ANSWERS:'+" "+ falseAns);
    $('#ca').html('CORRECT ANSWERS:'+" "+ trueAns);
    $('#ua').html('UNANSWERED:'+" "+ neverClicked);
    console.log(falseAns,trueAns,neverClicked )
    lastStep();
  };





