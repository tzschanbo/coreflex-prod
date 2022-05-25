
<!-- //browser specific functions

/*--------------------------------------------------
 * 	function getRef( id )
 * 		param id : (String) HTML Element ID
 *		return object
 *
 * 		Description : 
 *			Internet Explorer / Mozilla 기반의 Browser 종류에 상관없이 HTML Element를 얻어옴.
 *
 * 	function getStyle( id )
 *		param id : (String) HTML Element ID
 *		return object.style
 *
 *		Description :
 *			Internet Explorer / Mozilla 기반의 Browser 종류에 상관없이 HTML Element의 style 객체를 얻어옴.
----------------------------------------------------*/

	var isDOM = ( document.getElementById ? true : false );
	var isIE4 = ( ( document.all && !isDOM ) ? true : false );
	var isNS4 = ( document.layers ? true : false );
	var isNS = navigator.appName == "Netscape";

	function getRef( id ) {
		if( typeof(id) == "object" ) return id;
		if ( isDOM ) return document.getElementById( id );
		if ( isIE4 ) return document.all[id];
		if ( isNS4 ) return document.layers[id];
	}

	function getStyle( id ) {
		var obj;
		if( typeof(id) == "object" ) {
			obj = id;
		} else {
			obj = getRef( id );
		}
		return ( isNS4 ? obj : obj.style );
	}

//-->

<!-- //SubMenu (1st / 2nd) highlighting

/*--------------------------------------------------
 * 	function expandSubMenu( subTrId )
 * 		param subTrId : (String) HTML Table row ID
 *
 * 		Description : 
 *			선택된 HTML Table row의 display style 속성을 "block"로 설정하여 노출시키고
 *			기존에 선택됬던 row가 존재하면 숨겨준다.
 *
 * 	function initMenu( firstImg, firstTd, secondImg )
 *		param firstImg : (String) 1st HTML Image ID
 *		param firstTd : (String) sub HTML Table row ID
 *		param secondImg : (String) 2nd HTML Image ID
 *
 *		Description :
 *			Page Loding 시 선택된 메뉴 Highlight 초기화
 *
 * function highlightMenuImg( img )
 *		param img : (String) HTML Image ID
 *
 *		Description :
 *			이미지 경로를 파일이름.gif --> 파일이름_on.gif 로 변경시켜 준다.
 *			(중요!) over image 파일이름은 반드시 파일이름_on.gif 이어야 한다!!
----------------------------------------------------*/

	var preSelectedMenu;
	// Expand selected submenu & hide previous selected submenu
	function expandSubMenu( subTrId ) {
		var pre = getRef( preSelectedMenu );
		if( pre )
			getStyle( pre ).display = "none";

		var subTr = getRef( subTrId );
		if( subTr )
			getStyle( subTr ).display = "block";

		preSelectedMenu = subTrId;
	}
	
	// Expend 1st Menu & Highlight 2nd Menu
	function initMenu( firstImg, firstTd, secondImg ) {

		// Highlight 1st Menu
		if( firstImg ) {
			highlightMenuImg( firstImg );
			// disable image event
			var img = getRef( firstImg );
			img.onmouseover = null;
			img.onmouseout = null;
		}

		// Expend 1st Menu
		if( firstTd )
			expandSubMenu( firstTd );

		// Highlight 2nd Menu
		if( secondImg ) {
			highlightMenuImg( secondImg );
			// disable image event
			var img = getRef( secondImg );
			img.onmouseover = null;
			img.onmouseout = null;

		}
	}

	function highlightMenuImg( img ) {
		var imgSrc = getRef( img ).src;
		var nonRe = /\w+:\/\/[^/:]+(:\d*)?([^# ]*)o.gif/;
		var re = /\w+:\/\/[^/:]+(:\d*)?([^# ]*).gif/;

		if( img ) {
			if( imgSrc.match( nonRe ) ) {
				return;
			}else if( imgSrc.match( re ) ) {
				getRef( img ).src = RegExp.$2 + "o.gif";
			}
		}
	}

	function restoreImg( img ) {
		var imgSrc = getRef( img ).src;
		var re = /\w+:\/\/[^/:]+(:\d*)?([^# ]*)o.gif/;

		if( img ) {
			if( imgSrc.match( re ) ) {
				getRef( img ).src = RegExp.$2 + ".gif";
			}
		}
	}

//-->
