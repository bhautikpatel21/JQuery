 $(document).ready(function() {
            var text = $('#text').html();
            var wordsToBold = ['simple','bold'];
            wordsToBold.forEach(function(word) {
                var regex = new RegExp(`(${word})`, 'gi');
                text = text.replace(regex, '<strong>$1</strong>');
            });
            $('#text').html(text);
        });