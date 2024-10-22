$(function() {

    const maxLength = 15;

    $('#username').on('keydown', function(e) {

        const currentLength = $(this).val().length;

        // Allow backspace, delete, arrow keys, etc.
        if (e.key.length === 1 && currentLength >= maxLength) {
            e.preventDefault()
            $('#message').text(`Username cannot exceed ${maxLength} characters.`);
        } else {
            $('#message').text('');
        }
    });
});