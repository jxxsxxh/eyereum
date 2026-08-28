class WebUtil {
	// 쿠키 설정
	static setCookie(name, value, expDays = 7) {
		const date = new Date();
		date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
		document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
	}

	// 쿠키 가져오기
	static getCookie(name) {
		const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		return value ? decodeURIComponent(value[2]) : null;
	}

	// 쿠키 삭제
	static deleteCookie(name) {
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;`;
	}
}



function goToTop(){
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
}



function stickyTop(opt=null){
	if( $('.sticky-wrap').length > 0 && $(window).width() > 1024 ){

		const offsetTop = Math.floor($('.sticky-wrap').offset().top);
		const scrollTop = $(window).scrollTop();

		if( scrollTop > offsetTop){
			if (opt == 'up') {
				const headerHeight = $('#header').outerHeight();
                $('.sticky-wrap > div').addClass('up').removeClass('down').css('top', headerHeight + 'px');
			}
			else if(opt=='down'){
				$('.sticky-wrap > div').addClass('down').removeClass('up').css('top', 0);
			}
		}
		else{
			$('.sticky-wrap > div').removeClass('up down').css('top', 0);
		}
	}
}



function getResponsivePx(standard, px){
    const winW = $(window).width();
    const result = (px * winW) / standard;

    return result;
}
