app.directive('mainDirective', [function() {
	return {
		link: function(scope, element, attrs) {
			var winWidth = $(window).width();
			if (winWidth >= 992) {
				var winHeight = $(window).height();
				var contentTop = $('.content').offset().top;
				var contentMarginBottom = parseInt($('.content').css('margin-bottom'));
				var websitePaddingBottom = parseInt($('.website-wrap').css('padding-bottom'));
				var decoratePaddingBottom = parseInt($('.decorate-wrap').css('padding-bottom'));
				element.css('height', winHeight - contentTop - contentMarginBottom - websitePaddingBottom - decoratePaddingBottom - 2);
			};
		}
	};
}]);