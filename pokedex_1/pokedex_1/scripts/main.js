$(document).on('click',".poke-sprite",function () {
    $(this).fadeOut(500, function () {
        if ($(this).attr("src").indexOf('-back') >= 0) {
            $(this).attr("src", $(this).attr("src").replace('-back.gif', '.gif'));
        }
        else {
            $(this).attr("src", $(this).attr("src").replace('.gif', '-back.gif'));
        }
    }).fadeIn(500);
    return false;
});

$(document).on('click', ".toggle-icon", function () {
    $(this).parent().toggleClass('unmarked');
    $(this).parent().toggleClass('marked');
    return false;
});