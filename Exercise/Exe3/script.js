$(function() {
    $('#btn').on('click', function() {
        $('#btn').animate({
            width: '800px',
            height: '900px'
        }, 500, function() {
            $('#btn').animate({
                width: '100px',
                height: '50px'
            }, 500);
        });
    });
});