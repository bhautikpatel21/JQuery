$(function() {   
    $('#btn').click(function() {
        $('#input').fadeIn()
        $('#btn2').fadeIn()
        $('#btn').addClass('hidebtn')

    })
}
)

$(function() {
    $('#btn2').click(function() {
       var Inputval = $('#input').val().trim()
        if(Inputval) {
            $('.list').append(`<li> ${Inputval} </li>`)
        }
        else {
            alert("Enter Value First");
        }
        $('#input').val('')
    })
})