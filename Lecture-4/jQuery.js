/*  jQuery Remove Method */

// $(function(){
//     $("#btn").click(function(){
//         $('#text').remove()
//     })
// })

// $(function(){
//     $("#btn").click(function(){
//         $('#text').empty()
//     })
// })

/* jQuery addClass , removeClass And toggleClass Method */

// $(function(){
//     $('#btn').click(function(){
//         $('#demo').addClass('box')
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('#demo').removeClass('box')
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('#demo').toggleClass('box')
//     })
// })

/* jQuery Traversing */
 
// Animate
$(document).ready(function(){
    $("button").click(function(){
      $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      });
    });
  });
