//常数
app.constant('ARTICLE_DATA', 'data/articleData.json');//文章数据
app.constant('SITE_DATA', 'data/siteData.json');//网站数据
app.constant('CASE_DATA', 'data/caseData.json');//案例数据
app.constant('RESUME_DATA', 'data/resumeData.json');//个人数据
app.constant('RESUME_CODE', '539b7ade75172485880d6e42cdc0595e');//邀请码

//自动设置font-size的值
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

