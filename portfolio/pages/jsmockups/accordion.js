var hit = 0, total = $('.accPanel-title').length;

$('.accPanel-title').find('a').click(function (e) {
    //added
    var contentLocation = $(this).attr('href');
    if (contentLocation.charAt(0) === "#") {
            e.preventDefault();
        }
    //    
    if (!$(this).hasClass('complete')) {
        $(this).addClass('complete').find('.fa-check').show();
        hit++;
        if (hit == total) lessonComplete();
    }
});
function lessonComplete(){
    $( ".next" ).css("display", "block");
}