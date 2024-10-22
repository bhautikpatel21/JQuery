// $(function(){
//     $('#btn').click(function() {
//         $('div').children().css({
//             backgroundColor : 'yellow'
//         })
//     })
// })

// $(function() { 
//           $('#btn').click(function(){
//               $('div').siblings().css({
//                   backgroundColor : 'yellow'
//               })
//           })
//       })

// $(function() {
//     $('#btn').click(function() {
//         $('ul').children().css({
//             color : 'red',
//             backgroundColor : 'black'
//         })
//     })
// })

// $(function() {
//     $('#btn').click(function() {
//         $('div').eq(1).css({
//             color : 'red',
//             backgroundColor : 'black'
//         })
//     })
// })

$(function() {
    $('#btn').click(function() {
        $('div').find('p').css({
            backgroundColor : 'red'
        })
    })
})