const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}


const defaultInput = $('.def-input input');
const inpLabel = $('.def-input');

defaultInput.on('blur', function (){
    inpLabel.map((index, e) => {
        if($(e).children('input').val() === ''){
            $(e).removeClass(active);
        }
    })
})

defaultInput.on('focus', function (){
    $(this).parent().addClass(active);
})


$('.select-country').select2();



let statusSlider = true;

$(window).on('resize', function (){
    if($(window).width() <= 768 && statusSlider){
        statusSlider = false;
        $('.stages-program-row').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 1000,
            adaptiveHeight: true,
            prevArrow: $('#prev-stages'),
            nextArrow: $('#next-stages')
        });

    }
}).resize()
