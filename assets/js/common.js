$(function () {
	const $banner = $('#top-banner');

	// 쿠키 존재 여부 확인 후 배너 제어
	if (WebUtil.getCookie('hideTopBanner') === 'Y') {
		$banner.addClass('hide');
	}

	// 닫기 버튼 클릭 이벤트
	$banner.find('.close').on('click', function () {
		if ($('#chk-top-banner-today').is(':checked')) {
			WebUtil.setCookie('hideTopBanner', 'Y', 7);
		}
		$banner.addClass('hide');
		$(window).trigger('scroll');
	});
});



$(function () {
	var _thisScroll = 0;
	var _isScrollTop;

	$(window).on("scroll", function () {
		_isScrollTop = $(window).scrollTop();

		if (_isScrollTop > _thisScroll) { // down
			if (_isScrollTop > 0) {
				if ($("#header").length > 0) {
					if ($(window).scrollTop() > 100) {
						$("#header").addClass("hide");
						//mainHeader();
					}
				}
				//stickyTop('down');
			}
		}
		if (_isScrollTop < _thisScroll) { // up
			$("#header").removeClass("hide");
		}
		if (_isScrollTop > 0) {
			$("#header").addClass("active");
		}
		if (_isScrollTop == 0) {
			$("#header").removeClass("active");
		}
		_thisScroll = _isScrollTop;
	});


	// 페이지 로드 시 한 번 실행하여 초기 위치 확인
	$(window).trigger('scroll');
});



$(function () {
	$('#header').on('mouseenter', '.gnb > li, .submenu', (event) => {
		const menuNum = $(event.currentTarget).attr('data-menu-num');

		$('#header').addClass('on');
		$('#header .submenu').stop().slideDown();

		if (!$(event.currentTarget).hasClass('submenu')) {
			$('#header .submenu .inner > ul > li').removeClass('on');
			$('#header .submenu .inner > ul > .menu-' + menuNum).addClass('on');
		}
		$('.menu-bg').show();
	}).on('mouseleave', '.submenu, .gnb', (event) => {
		$('#header').removeClass('on');
		$('#header .submenu').stop().slideUp();
		$('.menu-bg').hide();
	});

	$('#header').on('click', '.ham', (event) => {
		$('html').addClass('scroll-hidden');
		$('#sitemap').show();

		if ($(window).width() > 1024) {
			// 모바일에서 gnb 닫고 PC로 가서 gnb 열었을 때 서브메뉴 안보이는 문제
			//$('#gnb .menu > dl > dd').show();
		}
	});

	$('#header').on('click', '.lang > dl > dt', (event) => {
		$('.lang > dl > dd').toggleClass('on');
	});

	$('#sitemap').on('click', '.close', (event) => {
		$('html').removeClass('scroll-hidden');
		$('#sitemap').hide();
	});
});



$(function () {
	const slideWrap = '#container.main .sec2';
	const slideTxt = [];
	$(slideWrap).find('.swiper-slide').each(function (index, item) {
		slideTxt[index] = $(this).attr('data-pagination');
	});

	new Swiper(slideWrap, {
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: true,
		//loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 800,
		pagination: {
			el: slideWrap + ' .pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (slideTxt[index]) + '</span>';
			},
		},
		navigation: {
			nextEl: slideWrap + ' .swiper-next',
			prevEl: slideWrap + ' .swiper-prev',
		},
	});
});



$(function () {
	const slideWrap = '#container.main .sec3';
	const slideTxt = [];
	$(slideWrap).find('.swiper-slide').each(function (index, item) {
		slideTxt[index] = $(this).attr('data-pagination');
	});

	new Swiper(slideWrap, {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		slidesPerView: 'auto',
		spaceBetween: 0,
		//loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 800,
		pagination: {
			el: slideWrap + ' .pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (slideTxt[index]) + '</span>';
			},
		},
		navigation: {
			nextEl: slideWrap + ' .swiper-next',
			prevEl: slideWrap + ' .swiper-prev',
		},
	});
});



$(function () {
	const slideWrap = '#container.board.list .swiper';

	new Swiper(slideWrap, {
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: true,
		//loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 800,
		navigation: {
			nextEl: slideWrap + ' .swiper-next',
			prevEl: slideWrap + ' .swiper-prev',
		},
	});
});



$(function () {
	$("#datepicker").datepicker({
		dateFormat: 'yy-mm-dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		showMonthAfterYear: true,
		//changeMonth: true,
		//changeYear: true,
		yearSuffix: '년',
		minDate: +1,
		onSelect: function (dateText, inst) {
			$('.inc.online .time').find('select').show();
		}
	});
});



$(function () {
	$('.sch > form').on('submit', function (e) {
		if (!$(this).hasClass('active')) {
			e.preventDefault();
			$(this).addClass('active');
			//$(this).find('input[type="text"]').focus();
		}
	});
});



$(function () {
	$('.social-link > dt').on('click', function () {
		$('.social-link').toggleClass('active');
	});
});



$(function () {
	$('.select-fake-wrap select').on('change', function () {
		var selectedText = $(this).find('option:selected').text();
		$(this).siblings('.fake-text').text(selectedText);
	});
});
