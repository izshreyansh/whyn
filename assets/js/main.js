$(function() { 'use strict';

navScroll();

$(window).on('load', function(){

	$('.progress-circle-prog').addClass('fill-mode');

});

//--------Masonary Js-----------//


	$('.exp-home1-grid').masonry({
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition:false,
	gutter:30,
	resize:true,
	fitWidth:true

	});

	$('.exp-portfolio-1').masonry({
	itemSelector: '.grid-item',
	columnWidth:1,
	percentPosition:true


	});

	$('.exp-portfolio-2').masonry({
	itemSelector: '.project-img',
	columnWidth:'.project-img'


	});
	//--Masonary item refresh on tab click--//

	var container = $('.exp-portfolio-2');

	$('a.nav-link[data-toggle=tab]').each(function () {
	var $this = $(this);

		$this.on('shown.bs.tab', function () {
				container.masonry({
					columnWidth: '.project-img',
					itemSelector: '.project-img'
				});

		});
	});






//-------- Navigation on scroll----//
function navScroll(){
	var nav = $(".start-style");
	var pos= nav.position();
	var windowpos = $(window).scrollTop();

	if (windowpos > pos.top){
		nav.addClass('scroll-on');
	}
	else {
		nav.removeClass('scroll-on');
	}
}

	$(window).scroll(function (){
		navScroll();
	});



//--------------Gallery Popup-----------//

$('.magnific-gallery').magnificPopup({
delegate: 'a',
type: 'image',
removalDelay: 300,
mainClass: 'mfp-fade',
gallery:{
	enabled: true
}

});

//--------------video Popup---------------//
$('.popup-video').magnificPopup({
	type:'iframe'
});

//*---------------------Tab------------------*//

$('#Monthly-tab').on('click', function() {

$('.monthly-txt').addClass('active-color');
$('.annualy-txt').removeClass('active-color');

});
$('#Annualy-tab').on('click', function() {

$('.monthly-txt').removeClass('active-color');
$('.annualy-txt').addClass('active-color');

});

// detail-page-slider
    $('.detail-page-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.detail-page-slider-nav'
  });
  $('.detail-page-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.detail-page-slider-for',
      dots: false,
      centerMode: true,
      centerPadding: '30px',
      focusOnSelect: true,
      responsive: [{
      breakpoint: 567,
      settings: {
        slidesToShow: 2,
      }
    }]
  });

//*---------------Price slider----------------*//
  $( function() {
    $( "#shop-range-price" ).slider({
      range: true,
      min: 20,
      max: 500,
      thousand: ',',
      values: [ 50, 300 ],
      slide: function( event, ui ) {
        $( "#shop-price" ).val( "$" + ui.values[ 0 ] );
        $( "#shop1-price" ).val( "$" + ui.values[ 1 ]);
      }
    });
    $( "#shop-price" ).val( "$" + $( "#shop-range-price" ).slider( "values", 0 ));
      $( "#shop1-price" ).val( "$" + $( "#shop-range-price" ).slider( "values", 1 ) );
  } );


//*---------------Plus Minus----------------*//

$('.minus-btn').on('click', function (e) {
e.preventDefault();
var $this = $(this);
var $input = $this.closest('div').find('input');
var value = parseInt($input.val());
if (value > 1) {
	value = value - 1;
} else {
	value = 0;
}
$input.val(value);
});

$('.plus-btn').on('click', function (e) {
e.preventDefault();
var $this = $(this);
var $input = $this.closest('div').find('input');
var value = parseInt($input.val());
if (value < 100) {
	value = value + 1;
} else {
	value = 100;
}
$input.val(value);
});


//---------------CounterUp number------------//
$('.counter').counterUp({
	delay: 10,
	time: 2000
})

//----------------Homepage 1 Slider------------//
$('.exp-home1-slider').slick({
dots: true,
dotsClass:'slick-modified-dots container',
infinite:true,
speed: 600,
slidesToShow: 1,
slidesToScroll: 1
});
//----------------Homepage 2 Sliders------------//

$('.exp-home2-slider').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
infinite:true,
asNavFor: '.exp-thumbnail-slider',
dots: true,
dotsClass:'slick-modified-dots',
});


$('.exp-thumbnail-slider').slick({
slidesToShow: 3,
slidesToScroll: 1,
asNavFor: '.exp-home2-slider',
arrows:false,
infinite:true,
focusOnSelect: true
});


$('.exp-about-slider').slick({
dots: false,
infinite: true,
arrows:false,
slidesToShow: 3,
slidesToScroll: 1,
variableWidth:false,
accessibility:true,
responsive: [
{
	breakpoint:1300,
	settings: {
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		dots:true
	}
},


{
	breakpoint:568,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots:true
	}
}
]


});

$(".home2-portfolio").slick({
slidesToShow: 4,
slidesToScroll: 1,
dots: true,
dotsClass:'slick-modified-dots',
arrows:false,
accessibility:true,
infinite:true,
responsive: [
{
	breakpoint:1300,
	settings: {
		slidesToShow: 3,
		slidesToScroll: 1,
		dots:true
	}
},


{
	breakpoint:991,
	settings: {
		slidesToShow: 2,
		slidesToScroll: 1,

		dots:true
	}
},
{
	breakpoint:768,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true
	}
}

]



});

// ------------Homepage 3 Slider----------//

$(".home3-slider").slick({
slidesToShow: 4,
slidesToScroll: 1,
dots: false,
dotsClass:'slick-modified-dots',
arrows:false,
variableWidth:true,
infinite:true,
responsive: [
{
	breakpoint:1300,
	settings: {
		slidesToShow: 3,
		slidesToScroll: 1

	}
},


{
	breakpoint:991,
	settings: {
		slidesToShow: 2,
		slidesToScroll: 1,


	}
},
{
	breakpoint:768,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,

	}
},
{
	breakpoint:400,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth:false

	}
}

]



});


$('.exp-pricing-tabs .nav-link').on('click',function(){
	$('.home2-portfolio.slick-slider,.home3-slider.slick-slider').slick('refresh');


})

// ------------Homepage 4 Slider----------//
$('.exp-home4-slider').slick({
dots: true,
dotsClass:'slick-modified-dots',
infinite:true,
draggable:true,
speed:900,
slidesToShow: 1,
slidesToScroll: 1
});

// ------------Homepage 5 Slider----------//
$('.exp-home5-slider').slick({
dots: true,
dotsClass:'slick-modified-dots container',
infinite:true,
draggable:true,
speed:900,
slidesToShow: 1,
slidesToScroll: 1
});



//----------------Testimonial Slider 1--------//

$('.exp-testimonial-slider1').slick({
dots: true,
dotsClass:'slick-modified-dots',
infinite:true,
arrows:false,
speed: 300,
slidesToShow: 2,
slidesToScroll: 2,
responsive: [
{
	breakpoint:991,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots:true
	}
}

]
});

$('.exp-testimonial-slider2').slick({
dots: true,
dotsClass:'slick-modified-dots',
infinite: true,
arrows:true,
slidesToShow: 3,
centerMode: true,
centerPadding: "0px",
speed: 500,

responsive: [
{
	breakpoint:1600,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true
	}
},
{
	breakpoint:1000,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
		arrows:false
	}
},



]
});

$('.home3-testimonial').slick({
dots: true,
dotsClass:'slick-modified-dots',
infinite: true,
arrows:true,
slidesToShow: 3,
centerMode: true,
centerPadding: "0px",
speed: 500,

responsive: [
{
	breakpoint:991,
	settings: {
		slidesToShow: 2,
		slidesToScroll: 1,
		dots:true,
		arrows:false
	}
},
{
	breakpoint:567,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
		arrows:false
	}
}




]
});


$('.exp-about1-slider').slick({
dots: true,
arrows:true,
dotsClass:'slick-modified-dots',
infinite:true,
fade: true,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1,
responsive: [
{
	breakpoint:991,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:false,
		dots:true
	}
}

]

});

function makeTimer() {
    var endTime = new Date("01 January 2021 00:00:00 GMT+05:30");
    endTime = (Date.parse(endTime) / 1000);
    var now = new Date();
    now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#cvdays").html(days);
    $("#cvhours").html(hours);
    $("#cvminutes").html(minutes);
    $("#cvseconds").html(seconds);
  }
  setInterval(function() {
    makeTimer();
  }, 1000);
//####################number counter js#################################
$(document).ready(function() {
        $('.custom-select').niceSelect();
    });
$('#counter_area_1').on('inview', function (event, visible, visiblePartX, visiblePartY) {
    if (visible) {
        $(this).find('.countevntnum').each(function () {
            var $this = $(this);
            $({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        $(this).unbind('inview');
    }
	});

	$('#countdown').countdown('2020/12/20', function(event) {
		$(this).html(event.strftime('<span class="countdown-period">%-D <span>Day%!D</span></span> <span class="countdown-period">%H <span>Hours</span></span> <span class="countdown-period">%M <span>Min</span></span> <span class="countdown-period">%S <span>Sec</span></span>'));
	});
	$('#countdown2').countdown('2020/12/20', function(event) {
		$(this).html(event.strftime('<span class="countdown-period">%-D <span>Day%!D</span></span> <span class="countdown-period">%H <span>Hours</span></span> <span class="countdown-period">%M <span>Min</span></span> <span class="countdown-period">%S <span>Sec</span></span>'));
	});
	$('#countdown3').countdown('2019/12/20', function(event) {
		$(this).html(event.strftime('<span class="countdown-period">%-D <span>Day%!D</span></span> <span class="countdown-period">%H <span>Hours</span></span> <span class="countdown-period">%M <span>Min</span></span> <span class="countdown-period">%S <span>Sec</span></span>'));
	});

});
