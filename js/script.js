$(function() {
    if ( $(window).width() < 768 ) {
        startCarousel();
    } else {
        $('.owl-carousel').addClass('off');
    }
    $(window).resize(function() {
        if ( $(window).width() < 768 ) {
          startCarousel();
        } else {
          stopCarousel();
        }
    });
    function startCarousel (){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin: 30, // marfin giữa các hình ảnh
            nav: false,  // Cho phép hiển thị pre/next button
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            },
            dots: true,
            autoplay:false,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        })
    }
    function stopCarousel() {
        var owl = $('.owl-carousel');
        owl.trigger('destroy.owl.carousel');
        owl.addClass('off');
      }
});
