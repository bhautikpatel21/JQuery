// JQuery Traversing

/*

parent()
parents()
parentuntil()

*/

{
    // $(function(){
    //     $('#btn').click(function(){
    //         $('.div').parent().css('background-color' , 'green')
    //     })
    // })
  
    // $(function(){
    //     $('#btn').click(function(){
    //         $('.span-1').parents().css({
    //             backgroundColor:'green'
    //         })
    //     })
    // })
  
    // $(function(){
    //     $('#btn').click(function(){
    //         $('.span-1').parentsUntil('.ul').css({
    //             backgroundColor:'green'
    //         })
    //     })
    // })
  
  }
  
    /* Decendent Method */
  
    // The children() method returns all direct children of the selected element.
  
    // The find() method returns descendant elements of the selected element, all the way down to the last descendant.
  
  //   {
  //     $(function () {
  //       $("#btn").click(function () {
  //         $(".div").children().css({
  //           backgroundColor: "red",
  //         });
  //       });
  //     });
  
  //     $(function () {
  //       $("#btn").click(function () {
  //         $("li").find("p").css({
  //           backgroundColor: "purple",
  //         });
  //       });
  //     });
  //   }
  
  //  Siblings Method
  
  {
  
      // $(function(){
      //     $('#btn').click(function(){
      //         $('div').siblings().css({
      //             backgroundColor:'yellow'
      //         })
      //     })
      // })
  
  
      // $(function(){
      //     $('#btn').click(function(){
      //         $('h1').next().css({
      //             backgroundColor:'orange'
      //         })
      //     })
      // })
  
      // $(function(){
      //     $('#btn').click(function(){
      //         $('h1').nextAll().css({
      //             backgroundColor:'orange'
      //         })
      //     })
      // })
  
      // $(function(){
      //     $('#btn').click(function(){
      //         $('h1').nextUntil('div').css({
      //             backgroundColor:'orange'
      //         })
      //     })
      // })
  
      // $(function(){
      //     $('#btn').click(function(){
      //         $('h1').prev().css({
      //             backgroundColor:'orange'
      //         })
      //     })
      // })
  
      // $(function(){
      //     $('#btn').click(function(){
      //         $('div').prevAll().css({
      //             backgroundColor:'orange'
      //         })
      //     })
      // })
  
      // $(function(){
      //     $('#btn').click(function(){
      //         $('div').prevUntil('h1').css({
      //             backgroundColor:'orange'
      //         })
      //     })
      // })
  
  }
  
  // Filter Method in jQuery
  
  
  /*
  
  first()
  The first() method returns the first element of the specified elements.
  
  last()
  The last() method returns the last element of the specified elements.
  
  eq()
  The eq() method returns an element with a specific index number of the selected elements.
  
  
  */
  {
  
  // $(function(){
  //     $('#btn').click(function(){
  //         $('p').first().css({
  //             backgroundColor:'green'
  //         })
  //     })
  // })
  
  // $(function(){
  //     $('#btn').click(function(){
  //         $('p').last().css({
  //             backgroundColor:'green'
  //         })
  //     })
  // })
  
  $(function(){
      $('#btn').click(function(){
          $('p').eq(6).css({
              backgroundColor:'green'
          })
      })
  })
  
  }