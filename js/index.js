$(function () {
    $('.totop').click(function () {
        $("html,body").animate({scrollTop:0},500);
    })
    $('ul.publish li').each(function (index) {
        $(this).html("["+(index+1)+"]."+$(this).html())
    })
    $('ul.journal li').each(function (index) {
        $(this).html("["+(index+1)+"]."+$(this).html())
    })
    $('ul.conference li').each(function (index) {
        $(this).html("["+(index+1)+"]."+$(this).html())
    })
})  
    
