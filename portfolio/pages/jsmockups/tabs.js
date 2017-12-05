var tabs = $('.tabs'), hit = 1, total = 0;

tabs.each(function (i) {
    var tab = $(this).find('> .tab > a');
    total = tab.length;

    tab.click(function (e) {
        var contentLocation = $(this).attr('href');
        hit++;
        if(hit == 12){
            lessonComplete()
        }

        if (contentLocation.charAt(0) === "#") {
            e.preventDefault();

            tab.removeClass('active');
            $(this).addClass('active');

            $(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
        }

        if (!$(this).hasClass('complete')) {
            $(this).addClass('complete');
            hit++;
            if (hit === total) console.log("next"); //show next
        }
    });
});

var total = 0;

// $( "#conductExample" ).click(function() {
//     $("#conduct").css("display", "block");
//     //location.href = "#anchor";
//     $("#overlay").css({"opacity": ".2" , "pointer-events": "none"});
//     total++;
//     if(total == 7){
//       lessonComplete();
//     }
// });
//
// $( "#harassmentExample" ).click(function() {
//     $("#harassment").css("display", "block");
//     //location.href = "#anchor";
//     $("#overlay").css({"opacity": ".2" , "pointer-events": "none"});
//     total++;
//     if(total == 7){
//       lessonComplete();
//     }
// });
//
// $( "#stalkingExample" ).click(function() {
//     $("#stalking").css("display", "block");
//     //location.href = "#anchor";
//     $("#overlay").css({"opacity": ".2" , "pointer-events": "none"});
//     total++;
//     if(total == 7){
//       lessonComplete();
//     }
// });
//
// $( "#exploitationExample" ).click(function() {
//     $("#exploitation").css("display", "block");
//     //location.href = "#anchor";
//     $("#overlay").css({"opacity": ".2" , "pointer-events": "none"});
//     total++;
//     if(total == 7){
//       lessonComplete();
//     }
// });
//
// $( "#powerExample" ).click(function() {
//     $("#power").css("display", "block");
//     //location.href = "#anchor";
//     $("#overlay").css({"opacity": ".2" , "pointer-events": "none"});
//     total++;
//     if(total == 7){
//       lessonComplete();
//     }
// });
//
// $( "#intimateExample" ).click(function() {
//     $("#intimate").css("display", "block");
//     //location.href = "#anchor";
//     $("#overlay").css({"opacity": ".2" , "pointer-events": "none"});
//     total++;
//     if(total == 7){
//       lessonComplete();
//     }
// });
//
// $( "#childExample" ).click(function() {
//     $("#child").css("display", "block");
//     //location.href = "#anchor";
//     $("#overlay").css({"opacity": ".2" , "pointer-events": "none"});
//     total++;
//     if(total == 7){
//       lessonComplete();
//     }
// });

$( ".xDiv" ).click(function() {
    $("#conduct, #harassment, #stalking, #exploitation, #power, #intimate, #child").css("display", "none");
    $("#overlay").css({"opacity": "1" , "pointer-events": "auto"});
}); 

function lessonComplete(){
    $( ".next" ).css("display", "block");
}
  