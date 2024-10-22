    // Exercise 1 //

    // if(typeof jQuery === 'undefined')
    //    {
    //       console.log('jQuery is not Lodded...!');

    //     } else
    //     {
    //        console.log('jQuery is Lodded..');
    //     }

      
      //    Exercise 2    //  


    $(function () {
        $('#top').click(function() {
            $('html, body').animate({scrollTop: 0}, 9000);
            // $('html').scrollTop(0);
           
        })
    })
