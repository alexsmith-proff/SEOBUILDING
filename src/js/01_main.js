let competitorItem = 0;
let regionItem = 0;
let requestItem = 0;
let priceValue = 20000;


let competitorArr = [0, 40, 100];
let regionArr = [0, 50, 150, 400];
let requestArr = [0, 20, 80];


$(document).ready(function () {

    document.querySelector('.menu-burger').addEventListener('click', (e) => {
		e.target.classList.toggle('open-menu');
		document.querySelector('.header__menu--mobile').classList.toggle('open-menu');
	})



    $('.ticker').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        easing: 'linear',
        cssEase: 'linear',
        waitForAnimate: false,
        speed: 7000,
        centerMode: true,
        edgeFriction: 0,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        autoSlidesToShow: true,
        variableWidth: true,

    });

    $('.reviews__slider').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        autoplay: true,
        //slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    // slidesToShow: 2
                    arrows: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    // arrows: false,
                    // slidesToShow: 3
                    arrows: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 321,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            },

        ]

    });

    $('.talk__slider').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        //autoplay: true,


    });


    function Calc() {
        priceValue = 20000 + competitorArr[competitorItem] * 200 + regionArr[regionItem] * 200 + requestArr[requestItem] * 200;
        $('.price__value > span').text(priceValue.toLocaleString());
     };

    $(".competitor-slider").slider({
        orientation: "horizontal",
        animate: "fast",
        range: "min",
        min: 0,
        max: 2,
        value: 0,
        step: 1,   
        slide : function(event, ui) { 
            competitorItem = ui.value;
            $('.competitor-slider__text').text($('.competitor-slider__text').attr('data-'+competitorItem)); 
            Calc();
        }     
    });

    $(".region-slider").slider({
        orientation: "horizontal",
        animate: "fast",
        range: "min",
        min: 0,
        max: 3,
        value: 0,
        step: 1,   
        slide : function(event, ui) { 
            regionItem = ui.value; 
            $('.region-slider__text').text($('.region-slider__text').attr('data-'+regionItem));
            Calc();
        }     
    });

    $(".request-slider").slider({
        orientation: "horizontal",
        animate: "fast",
        range: "min",
        min: 0,
        max: 2,
        value: 0,
        step: 1,   
        slide : function(event, ui) { 
            requestItem = ui.value; 
            $('.request-slider__text').text($('.request-slider__text').attr('data-'+requestItem));
            Calc();
        }     
    });

    $('.request-slider__text').text($('.request-slider__text').attr('data-'+requestItem));
    $('.region-slider__text').text($('.region-slider__text').attr('data-'+regionItem));
    $('.competitor-slider__text').text($('.competitor-slider__text').attr('data-'+competitorItem)); 

    $('.price__value > span').text(priceValue.toLocaleString());
   
// accordion questions block
    $('.questions__item').click(function() {
        $(this).children('.questions__item-text').slideToggle();
        $(this).children('.questions__item-title').children('.questions__item-icon').toggleClass('expand');
    })
/////////////////////////////    



});