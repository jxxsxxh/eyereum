const breakPoint = 1024;

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
				stickyTop('down');
			}
		}
		if (_isScrollTop < _thisScroll) { // up
			$("#header").removeClass("hide");
			stickyTop('up');
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
	if ($(window).width() > breakPoint) {
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
	}

	$('#header').on('click', '.ham', (event) => {
		if ($(window).width() > breakPoint) {
			$('html').addClass('scroll-hidden');
			$('#sitemap').show();
		}
		else {
			$('html').toggleClass('scroll-hidden');
			$('#header').toggleClass('menu');
			$('#header .submenu').toggle();
			$('#header .submenu .menu > li').removeClass('on');
			$('#header .submenu .menu .menu-1').addClass('on');
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
		on: {
			slideChange: function () {
				if ($(window).width() <= breakPoint) {
					var $pagination = $('#container.main .section2 .swiper .pagination');

					if (this.activeIndex === 3) {
						var maxScrollLeft = $pagination[0].scrollWidth - $pagination.outerWidth();
						$pagination.stop().animate({ scrollLeft: maxScrollLeft }, 300);
					}
					else {
						$pagination.stop().animate({ scrollLeft: 0 }, 300);
					}
				}
			}
		}
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
		autoHeight: false,
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
		breakpoints: {
			1025: {
				autoHeight: false
			},
		},
		on: {
			init: function () {
				if ($(window).width() <= breakPoint) {
					$('#container.main .sec3 .page-num').html('<span>' + (this.realIndex + 1) + '</span> / <span>' + this.slides.length + '</span>');
				}
			},
			slideChange: function () {
				if ($(window).width() <= breakPoint) {
					$('#container.main .sec3 .page-num').html('<span>' + (this.realIndex + 1) + '</span> / <span>' + this.slides.length + '</span>');
				}
			}
		}
	});
});



$(function () {
	const slideWrap = '#container .swiper.review';

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
		on: {
			init: function () {
				if ($(window).width() <= breakPoint) {
					$('#container .swiper.review .page-num').html('<span>' + (this.realIndex + 1) + '</span> / <span>' + this.slides.length + '</span>');
				}
			},
			slideChange: function () {
				if ($(window).width() <= breakPoint) {
					$('#container .swiper.review .page-num').html('<span>' + (this.realIndex + 1) + '</span> / <span>' + this.slides.length + '</span>');
				}
			}
		}
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



$(function () {
    $('.youtube-frame .cover').on('click', function() {
        var $frame = $(this).closest('.youtube-frame');
        var $iframe = $frame.find('iframe');
        var src = $iframe.attr('src');

        // URL에 이미 쿼리스트링(?)이 있는지 확인하여 autoplay 파라미터 추가
        if (src.indexOf('?') > -1) {
            src += '&autoplay=1';
        } else {
            src += '?autoplay=1';
        }

        // iframe src 갱신 및 커버 숨김 처리
        $iframe.attr('src', src);
        $(this).fadeOut();
    });
});



$(function () {
    $('.tab-category > ul > li').on('click', function() {
        /* 주석 제외 요청으로 주석 없음 */
        if ($(this).hasClass('on')) return;

        var tabText = $.trim($(this).text());

        $(this).addClass('on').siblings().removeClass('on');

        var $contents = $(this).closest('.tab-category').next('.tab-contents');
        var $target = $contents.children('div[data-tab-contents="' + tabText + '"]');

        $contents.children('div').hide();
        $target.stop(true, true).fadeIn(300);
    });
});



$(function () {
    const $categoryItems = $('.sticky-category > ul > li');

    $('.sticky-category').on('click', '> ul > li', (event) => {
        const $this = $(event.currentTarget);
        const target = $this.attr('data-move-target');
        const currentScroll = $(window).scrollTop();
        const targetTop = $(target).offset().top;

        let marginTop = 130 + 100 + 85;
        if (targetTop > currentScroll) {
            marginTop = 130 + 85;
        } else {
            marginTop = 130 + 100 + 85;
        }

        const targetOffset = targetTop - getResponsivePx(1920, marginTop);

        $categoryItems.removeClass('on');
        $this.addClass('on');

        $("html, body").stop().animate({scrollTop: targetOffset}, 800);

        return false;
    });

    $(window).on('scroll', () => {
        const currentScroll = $(window).scrollTop();

        $categoryItems.each(function () {
            const $item = $(this);
            const target = $item.attr('data-move-target');
            const $targetEl = $(target);

            if ($targetEl.length > 0) {
                const marginTop = 130 + 100 + 85;
                const targetTop = $targetEl.offset().top - getResponsivePx(1920, marginTop);

                if (currentScroll >= Math.floor(targetTop)) {
                    $categoryItems.removeClass('on');
                    $item.addClass('on');
                }
            }
        });
    });
});


$(function () {
    $('.faq-list').on('click', '.faq-q', function() {
        var $li = $(this).closest('li');
        var $answer = $li.find('.faq-a');

        if ($li.hasClass('active')) {
            $li.removeClass('active');
            $answer.stop().slideUp();
        } else {
            $('.faq-list li').removeClass('active');
            $('.faq-list .faq-a').stop().slideUp();

            $li.addClass('active');
            $answer.stop().slideDown();
        }
    });
});


/*
$(function () {
    $('.youtube-pop .cover').on('click', function() {
        var $pop = $(this).closest('.youtube-pop');
        var youtubeId = $pop.data('youtube-id');
        var youtubeType = $pop.data('youtube-type');

        if (youtubeId) {
            var iframeHtml = '<iframe src="https://www.youtube.com/embed/' + youtubeId + '?autoplay=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

            if (youtubeType) {
                $('#pop-layer-wrap .inner').attr('data-type', youtubeType);
            } else {
                $('#pop-layer-wrap .inner').removeAttr('data-type');
            }

            $('#pop-layer-wrap .frame').html(iframeHtml);
            $('#pop-layer-wrap').fadeIn();
        }
    });

    $('#pop-layer-wrap').on('click', '.close', function() {
        $('#pop-layer-wrap').fadeOut(function() {
            $('#pop-layer-wrap .frame').empty();
            $('#pop-layer-wrap .inner').removeAttr('data-type');
        });
    });
});
*/
var ytPlayer = null;
function onYouTubeIframeAPIReady() {}

$(function () {
    $('.youtube-pop .cover').on('click', function() {
        var $pop = $(this).closest('.youtube-pop');
        var youtubeId = $pop.data('youtube-id');
        var youtubeType = $pop.data('youtube-type');

        if (!youtubeId || typeof youtubeId !== 'string' || $.trim(youtubeId) === '') {
            console.warn('올바른 YouTube Video ID가 아닙니다:', youtubeId);
            return;
        }

        youtubeId = $.trim(youtubeId);

        if (youtubeType) {
            $('#pop-layer-wrap .inner').attr('data-type', youtubeType);
        } else {
            $('#pop-layer-wrap .inner').removeAttr('data-type');
        }

        if (ytPlayer) {
            try {
                ytPlayer.destroy();
            } catch (e) {
                console.error(e);
            }
            ytPlayer = null;
        }

        $('#pop-layer-wrap .frame').html('<div id="yt-popup-player"></div>');
        $('#pop-layer-wrap').fadeIn();

        ytPlayer = new YT.Player('yt-popup-player', {
            videoId: youtubeId,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'rel': 0
            },
            events: {
                'onReady': function(event) {
                    event.target.playVideo();
                }
            }
        });
    });

    $('#pop-layer-wrap').on('click', '.close', function() {
        $('#pop-layer-wrap').fadeOut(function() {
            if (ytPlayer) {
                if (typeof ytPlayer.stopVideo === 'function') {
                    ytPlayer.stopVideo();
                }
                if (typeof ytPlayer.destroy === 'function') {
                    ytPlayer.destroy();
                }
                ytPlayer = null;
            }
            $('#pop-layer-wrap .frame').empty();
            $('#pop-layer-wrap .inner').removeAttr('data-type');
        });
    });
});


$(function () {
	$('.thesis-category ul li').on('click', function () {
		var $this = $(this);
		var filterText = $this.text().trim();

		$('.thesis-category ul li').removeClass('on');
		$this.addClass('on');

		$('.list-wrap .h2-title h2').text(filterText);


        const targetTop = $('.contents').offset().top;
        const currentScroll = $(window).scrollTop();

        let marginTop = 100 + 85;
        if (targetTop > currentScroll) {
            marginTop = 85;
        }

		const targetOffset = targetTop - getResponsivePx(1920, marginTop);
		$('html, body').stop().animate({ scrollTop: targetOffset }, 300);


		if (filterText === '전체') {
			$('.list > li').show();
			return;
		}

		$('.list > li').each(function () {
			var category = $.trim($(this).attr('data-category'));
			var isMatch = false;

			// 카테고리가 없거나 '시력교정술검사'인 경우 필터 조건과 상관없이 전체 노출
			if (!category || category.indexOf('시력교정술검사') !== -1) {
				isMatch = true;
			} else if (filterText === '스마일') {
				isMatch = category.indexOf('스마일') !== -1;
			} else if (filterText === '렌즈삽입술') {
				isMatch = category.indexOf('렌즈삽입술') !== -1;
			} else if (filterText === '라식·라섹') {
				isMatch = category.indexOf('라식') !== -1 || category.indexOf('라섹') !== -1;
			} else if (filterText === '부작용치료') {
				isMatch = category.indexOf('부작용치료') !== -1;
			} else if (filterText === '노안·백내장') {
				isMatch = category.indexOf('노안') !== -1 || category.indexOf('백내장') !== -1;
			} else if (filterText === '기타') {
				isMatch = category.indexOf('기타') !== -1;
			}

			if (isMatch) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});
});


$(function () {
	if ($(window).width() <= breakPoint) {
		$('#header').on('click', '.side_menu > ul > li', (event) => {
			const menuNum = $(event.currentTarget).attr('data-menu-num');

			$('#header .side_menu > ul > li').removeClass('on');
			$(event.currentTarget).addClass('on');

			$('#header .submenu .inner > ul > li').removeClass('on');
			$('#header .submenu .inner > ul > .menu-' + menuNum).addClass('on');
		});
	}
});


$(function () {
	if ($(window).width() <= breakPoint) {
		$('.xs-select').on('click', '> p', (event) => {
			$(event.currentTarget).next('ul').slideToggle();
		});

		$('.xs-select').on('click', 'ul > li', function(event) {
			const $this =$(event.currentTarget);
			const targetName = $this.data('target');

			const $currentSelectDiv =$this.closest('*[data-select-name]');
			const $wrapper =$currentSelectDiv.parent();
			$wrapper.children('*[data-select-name]').removeClass('on');
			$wrapper.children(`*[data-select-name="${targetName}"]`).addClass('on');

			$this.closest('ul').slideUp();
		});
	}
});


$(function () {
	if ($(window).width() <= breakPoint) {
		$('.paper > div > span').on('click', function() {
			const $parent = $(this);
			const $child = $parent.find('span');
			const parentLeft = $parent[0].getBoundingClientRect().left;
			const offsetVw = (window.innerWidth * 5.625) / 100;
			$child.css({
				'left': (-parentLeft + offsetVw) + 'px',
				'--before-left': parentLeft + 'px'
			});

			$parent.toggleClass('on');
		});
	}
});
