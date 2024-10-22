$(function() {
    $('#write').click(function () {
        $('#input').fadeIn()
    })
})

$(function () {

    $('#input').on('input', function() {
        $('p').text($(this).val());
    })
})