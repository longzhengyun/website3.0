//模块-rem 字号比例(1:100)
define('autoDPI', function(){
	(function (doc, win) {
		var docEl = doc.documentElement,
			resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			recalc = function () {
				var clientWidth = docEl.clientWidth;
				if (!clientWidth) return;
					docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
			};

		if (!doc.addEventListener) return;
			win.addEventListener(resizeEvt, recalc, false);
			doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);
});