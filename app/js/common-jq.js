$('.testimonials__slider').slick({
    mobileFirst: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1180,
            settings: {
                infinite: false,
                slidesToScroll: 2,
                slidesToShow: 2,
                dots: true,
                arrows: true,
                prevArrow: $('.testimonials__arrow-left'),
                nextArrow: $('.testimonials__arrow-right'),
                customPaging: function (slider, i) {
                    return '<div class="testimonials__dots"></div>';
                }
            }
        }
    ]
});


