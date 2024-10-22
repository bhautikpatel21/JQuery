/* jQuery Syntax */

$(document).ready(function () {
  $("div").click(function () {
    $(this).hide();
  });
});

/* jQuery Common Syntax */

$(function () {
  $("#hide").click(function () {
    $(".divs").hide(5000 , function(){
        alert('Call Hide Function')
    });
  });
});

$(function () {
  $("#show").click(function () {
    $(".divs").show(2000);
  });
});

$(function () {
  $("#toggle").click(function () {
    $(".divs").toggle();
  });
});
