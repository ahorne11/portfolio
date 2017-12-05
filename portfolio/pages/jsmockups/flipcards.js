$(document).ready(function () {

    var hit = 0;

    $('.flip-item').click(function () {
        if ($(this).hasClass('flip-action')) {
            $(this).removeClass('flip-action');
        } else {
            $('.flip-item').removeClass('flip-action');

            $(this).addClass('flip-action');

            if (!$(this).hasClass('complete')) {
                $(this).addClass('complete');
                hit++;                
                if (hit == $('.flip-item').length) lessonComplete();
            }
        }
        $(this).find('.complete').fadeIn();
    });
    
    setTimeout(function () { $('#interactive').fadeIn(); }, 300);

    function lessonComplete(){
        $( ".next" ).css("display", "block");
      }
});