// TEXT HIGHLIGHT EFFECT
highlight();

$(window).on("scroll", function(){
    highlight();
});
function highlight(){
    let scroll = $(window).scrollTop();
    let height = $(window).height();

    $(".highlight").each(function(){
        var pos = $(this).offset().top;
        if (scroll+height >= pos) {
            $(this).addClass("active");
        }
    });
}