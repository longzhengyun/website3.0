app.directive('loginDirective', [function() {
	return {
		link: function(scope, element, attrs) {
			//自动设置页面高度
			var winWidth = $(window).width();
			if (winWidth >= 992) {
				element.css('margin-bottom', '0');
				var winHeight = $(window).height();
				var contentTop = $('.content').offset().top;
				var websitePaddingBottom = parseInt($('.website-wrap').css('padding-bottom'));
				var decoratePaddingBottom = parseInt($('.decorate-wrap').css('padding-bottom'));
				element.css('height', winHeight - contentTop - websitePaddingBottom - decoratePaddingBottom - 2);
			};
		}
	};
}]);