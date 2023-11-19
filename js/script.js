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

const solidOne = $('.menu-site-items-solid-one');
const solidTwo = $('.menu-site-items-solid-two');
const menuItems = $('.menu-site-item');

menuItems.on('click', function (e){
    const x = e.target.offsetLeft;
    solidOne.css('left', `${x}px`)
    solidTwo.css('left', `${x}px`)
    menuItems.removeClass(active);
    $(this).addClass(active)
})


$('.speakers-items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('#next-slider'),
    prevArrow: $('#prev-slider'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }
    ]
});