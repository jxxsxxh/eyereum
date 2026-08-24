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
