define(['app', 'jquery'], function(app, jquery){
    app.directive('mainDirective', [function () {
        return {
            link: function (scope, element, attrs) {
                // element.attr('ng-scrollbar bottom');
                var winWidth = jquery(window).width();
                var winHeight = jquery(window).height();
                var contentTop = jquery('.content').offset().top;
                var contentMarginBottom = parseInt(jquery('.content').css('margin-bottom'));
                var websitePaddingBottom = parseInt(jquery('.website-wrap').css('padding-bottom'));
                var decoratePaddingBottom = parseInt(jquery('.decorate-wrap').css('padding-bottom'));
                	element.css('max-height', winHeight - contentTop - contentMarginBottom - websitePaddingBottom - decoratePaddingBottom - 2);
            }
        };
    }]);
});
