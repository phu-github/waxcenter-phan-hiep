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

    // accordion
    // $(".container").click(function() {
    //     $(this).toggleClass("active");
    // });

    const accordion = document.getElementsByClassName('container');
    Array.from(accordion).forEach((item, index) => {
        item.addEventListener('click', function () {
            removeActive(index);
            this.classList.toggle('active');
        })
    });
    // for (i=0; i<accordion.length; i++) {
    //     accordion[i].addEventListener('click', function () {
    //         this.classList.toggle('active');
    //         removeActive(i);
    //     })
    // }
    function removeActive(index){
        console.log("index ===", index )
        Array.from(accordion).forEach((item2, index2) => {
            if( index != index2){
                item2.classList.remove('active');
            }
        });
    }
});
