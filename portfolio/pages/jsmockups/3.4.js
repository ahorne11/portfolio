$( "#next" ).click(function() {
    $("#view1").css({"opacity": "0", "transition": ".5s ease"});
    setTimeout(function(){ 
        $("#view1").css("display", "none");
        $("#view2").css({"opacity": "1", "transition": ".5s ease"});
     }, 500);
});

var hit = 0;
var scenarioCount = 0;

var displayScenario = (function(){
    $("#overlay").css({"opacity": ".1", "transition": ".5s ease"});
    $("#scenario" + scenarioCount).css("display", "block");
    setTimeout(function () { $("#scenario" + scenarioCount).css({"opacity": "1", "transition": ".5s ease"}); }, 300);
})

$( "#frame1" ).click(function() {
    scenarioCount = 1;
    displayScenario();
});
$( "#frame2" ).click(function() {
    scenarioCount = 4;
    displayScenario();
});
$( "#frame3" ).click(function() {
    scenarioCount = 7;
    displayScenario();
});

$( ".next1" ).click(function() { 
    $("#scenario" + scenarioCount).css({"opacity": "0", "transition": ".5s ease"});
    setTimeout(function () { $("#scenario" + scenarioCount).css("display", "none"); }, 300);
    setTimeout(function () { scenarioCount++; }, 400);
    setTimeout(function () { $("#scenario" + scenarioCount).css("display", "block"); }, 500);
    setTimeout(function () { 
        $("#scenario" + scenarioCount).css({"opacity": "1", "transition": ".5s ease"}); }, 600);
});

$( ".radioContainer" ).click(function() {
    $(".submit").css("display", "block");
    setTimeout(function () {$(".submit").css({"opacity": "1", "transition": ".5s ease"});}, 100);
});

$( ".submit" ).click(function() {
    $("#scenario" + scenarioCount).css({"opacity": "0", "transition": ".5s ease"});
    setTimeout(function () {
        $("#scenario" + scenarioCount).css("display", "none");
        $(".submit").css({"opacity": "0", "transition": ".5s ease"});
        $("#overlay").css({"opacity": "1", "transition": ".5s ease"});
    }, 300);
    setTimeout(function () {$(".submit").css("display", "none"); }, 310);
    hit++;
    if(hit == 3){
        lessonComplete();
    }
});

$( ".xDiv" ).click(function() {
    $("#scenario" + scenarioCount).css({"opacity": "0", "transition": ".5s ease"});
    setTimeout(function () {
        $("#scenario" + scenarioCount).css("display", "none");
        $(".submit").css({"opacity": "0", "transition": ".5s ease"});
        $("#overlay").css({"opacity": "1", "transition": ".5s ease"});
    }, 300);
});

function lessonComplete(){
    $( ".footer" ).css("display", "block");
    $( ".next" ).css("display", "block");
}
  