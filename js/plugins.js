///////////////  Carousel //////////////////
$(document).ready(function() {
    var team = $("#team");
    var client = $("#client");
    team.owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            412:{
                items:1
            },            
            768:{
                items:3
            },
            1200:{
                items:3
            }
        },
        autoplay:true,
        autoplayTimeout:3000,
        nav: true,
        navText: ["<img src='images/Group-2.png' class='img-fluid'>", "<img src='images/Group-1.png' class='img-fluid'>"],
    });
    client.owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        responsive:{
            0:{
                items:3
            },
            412:{
                items:3
            },            
            768:{
                items:5
            },
            1200:{
                items:5
            }
        },
        autoplay:true,
        autoplayTimeout:2000,
        nav: true,
        navText: ["<img src='images/Group-2.png' class='img-fluid'>", "<img src='images/Group-1.png' class='img-fluid'>"],
    });

    $('#exampleModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
    
}) 
/***************************************
                Animated WOW
****************************************/
$(function()
{
    new WOW().init();
});
/*****************************************************
                See more in Services Page
******************************************************/
$(document).ready(function() {
    $(".see").click(function() {
        $(this).prev().toggle();
        if($(this).text() == 'See more') {
            $(this).text('See less');
        } else {
            $(this).text('See more');
        }
    });
});
/*****************************************************
                popup
******************************************************/
$('#exampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })