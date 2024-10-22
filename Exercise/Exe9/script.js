$(function() {
    $('#addDiv').click(function() {

        var NewDiv= $('<div></div>').text('New div Added...').css({
              'border' : '1px solid black',
              'padding' : '10px',
              'margin' : '10px 0'
        });

        $('#container').append(NewDiv);
    });
});