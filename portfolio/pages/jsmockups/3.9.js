var hit = 0;

$( "#policies" ).click(function() { 
    $("#policiesDo, #policiesDont").css("display", "block");
    setTimeout(function (){
        $("#policiesDo, #policiesDont").css({"opacity": "1", "transition": ".5s ease"});
    }, 200);
    hit++;
    if(hit == 2){
        lessonComplete();
    }
});

$( "#reporting" ).click(function() { 
    $("#reportingDo, #reportingDont").css("display", "block");
    setTimeout(function (){
        $("#reportingDo, #reportingDont").css({"opacity": "1", "transition": ".5s ease"});
    }, 200);
    hit++;
    if(hit == 2){
        lessonComplete();
    }
});

function lessonComplete(){
    $( ".footer" ).css("display", "block");
    $( ".next" ).css("display", "block");
}