$(document).ready(function() {
	$(window).scroll(function () {
	    var $this = $(this),
	        $head = $('.header');
	    if ($this.scrollTop() > $('.header').height()) {
	       $head.attr('id', '_scrolled');
	    } else {
	       $head.attr('id', '');
	    }
	});

	$('.call_btn').on('click', function () {
		$('.popup_call').addClass('active');
	})
	$('.letters').on('click', function () {
		$('.popup_letters').addClass('active');
	})
	$('.header__burger').on('click', function () {
		$('.header__menu').addClass('active');
		$('.header__menu .header__burger').addClass('active')
		$('body').addClass('hidden');
	})
	$('.popup__close').on('click', function () {
		$('.popup__wrapper').removeClass('active');
		$('header__menu .header__burger').removeClass('active');
	})
	$('.header__menu .header__burger').on('click', function () {
		$('.popup__wrapper').removeClass('active');
		$('header__menu .header__burger').removeClass('active');
		$('body').removeClass('hidden');
	})
	$('.header__menu-list li:first-child').on('click', function () {
		$(this).toggleClass('active')
	})
})