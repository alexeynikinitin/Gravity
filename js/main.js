$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        autoWidth:true,
        dots:false,
        navText:['<img src="img/Arrow left.svg">','<img src="img/Arrow right.svg">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
});