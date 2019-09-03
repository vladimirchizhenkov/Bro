$('.testimonials__slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    prevArrow: $('.testimonials__arrow-left'),
    nextArrow: $('.testimonials__arrow-right'),
    customPaging : function(slider, i) {
        return '<div class="testimonials__dots"></div>';
    }
});

