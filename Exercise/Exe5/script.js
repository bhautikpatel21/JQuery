$(function() {
    $('#checkbox').change(function() {
        $('#Submit').prop('disabled', !this.checked);
    });
});

