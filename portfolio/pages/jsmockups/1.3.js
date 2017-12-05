var total = 0;

$( "#trustPosSymbol" ).click(function() {
    $("#trustPos").css("display", "block");
    location.href = "#anchor";
    $("#overlay").css({"opacity": ".2" , "pointer-events": "none"});
    total++;
  });

$( "#trustNegSymbol" ).click(function() {
  $("#trustNeg").css("display", "block");
  location.href = "#anchor";;
  $("#overlay").css({"opacity": ".2" , "pointer-events": "none"});
  total++;
});

$( "#coachAthletePosSymbol" ).click(function() {
  $("#coachAthletePos").css("display", "block");
  location.href = "#anchor";;
  $("#overlay").css({"opacity": ".2" , "pointer-events": "none"});
  total++;
});

$( "#powerPosSymbol" ).click(function() {
  $("#powerPos").css("display", "block");
  location.href = "#anchor";
  $("#overlay").css({"opacity": ".2" , "pointer-events": "none"});
  total++;
});

$( "#powerNegSymbol" ).click(function() {
  $("#powerNeg").css("display", "block");
  location.href = "#anchor";
  $("#overlay").css({"opacity": ".2" , "pointer-events": "none"});
  total++;
});

$( ".xDiv" ).click(function() {
  $("#trustPos, #trustNeg, #coachAthletePos, #powerPos, #powerNeg").css("display", "none");
  $("#overlay").css({"opacity": "1" , "pointer-events": "auto"});
  if(total == 5){
    lessonComplete();
  }
});

function lessonComplete(){
  $( ".next" ).css("display", "block");
  location.href = "#end";
}