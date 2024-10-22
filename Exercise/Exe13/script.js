$(document).ready(function() {
    $('#changeValueBtn').click(function() {
        const newValue = prompt("Enter new value :");
        if (newValue !== null && newValue.trim() !== "") {
            $('#myInput').val(newValue);
            $('#message').text(`Value changed to : ${newValue}`);
        } else {
            $('#message').text('Invalid input. Please enter a non-empty value.').css('color', 'red');
        }
    });
});