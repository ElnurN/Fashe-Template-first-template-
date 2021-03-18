"use strict";

document.getElementById("accardion_menu").style.display = "none";
$(document).ready(function () {
  $("#hamburger_menu").click(function () {
    $("#accardion_menu").toggle();
  });

  $(".hover_make").hover(function () {
    $("#three_home").toggle();
  });

  document.getElementById("three_home_hide").style.display = "none";
  $(document).ready(function () {
    $(".hover_make_hide").click(function () {
      $("#three_home_hide").toggle();
    });
  });

  $(window).scroll(function () {
    $('#sosial_menu').fadeOut();
    if ($(window).scrollTop() == 0) {
      $('#sosial_menu').fadeIn();
    }
  });

  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 50,
      max: 200,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
  });

  $(".features_plyus").click(function () {
    let port = $(this).siblings()[1];
    port.value = parseInt(port.value) + 1;
  })

  $(".features_minus").click(function () {
    let port = $(this).siblings()[0];
    port.value = parseInt(port.value) - 1;
  })

  $("#product_top").click(function(){
    $("#product_first").attr("src", "img/product-detail-01.jpg");
       $("#product_third").attr("src", "img/product-detail-01.jpg");
       $("#product_second").attr("src", "img/product-detail-01.jpg");
       product_second.style.display="none";
   });    
 
   $("#product_middle").click(function(){
    $("#product_first").attr("src", "img/product-detail-02.jpg");
       $("#product_third").attr("src", "img/product-detail-02.jpg");
       $("#product_second").attr("src", "img/product-detail-02.jpg");
 }); 
 
 $("#product_bottom").click(function(){
  $("#product_first").attr("src", "img/product-detail-03.jpg");
       $("#product_second").attr("src", "img/product-detail-03.jpg");
       $("#product_third").attr("src", "img/product-detail-03.jpg");
 }); 
 
 
 let hites = document.getElementById("myNav");
 window.onscroll = function () { scrollFunction() };
 function scrollFunction() {
     if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
         hites.style.display = "block";
     } 
     else {
         hites.style.display = "none";
     }
 }

 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }
 
 $(".heart").click(function(){
   Swal.fire({
     position: 'top-center',
     type: 'success',
     title: 'Thanks you so much ',
 
     showConfirmButton: false,
     timer: 2000
   })    
   });
 
   $(".heart_two").click(function(){
     Swal.fire({
       position: 'top-center',
       type: 'success',
       title: 'Thank you so much ',
       showConfirmButton: false,
       timer: 2000
     })    
     });
 
     $(".heart_shop").click(function(){
       Swal.fire({
         position: 'top-center',
         type: 'success',
         title: 'Thank you so much ',
         showConfirmButton: false,
         timer: 2000
       })    
       });
 
       let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
       let x = setInterval(function() {
         let now = new Date().getTime();
         let distance = countDownDate - now;
         let days = Math.floor(distance / (1000 * 60 * 60 * 24));
         let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         let seconds = Math.floor((distance % (1000 * 60)) / 1000);
           document.getElementById("box_first").innerHTML = days + "day"
               document.getElementById("box_second").innerHTML = hours + "hrs"
           document.getElementById("box_first").innerHTML = minuter + "mins"
           document.getElementById("box_first").innerHTML = seconds + "sec"
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("demo").innerHTML = "EXPIRED";
         }
       }, 1000);
       


$("#description").click(function(){
    $("#fusce_first").slideToggle("slow");
  });

$("#additional").click(function(){
  $("#fusce_second").slideToggle("slow");
});

$("#reviews").click(function(){
  $("#fusce_third").slideToggle("slow");
});


$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
      $('.scrollup').fadeIn();
  } else {
      $('.scrollup').fadeOut();
  }
});

$(".scrollup").on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop: 0
  }, 100);
  return false;
});
});


