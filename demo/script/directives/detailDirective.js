define(['app'], function(myApp){
	myApp.directive('detailDirective', [function ($location) {
	    return {
	        restrict: 'AE',
	        templateUrl: 'views/detail.html',
	        replace: true,
	        link: function (scope, element, attrs) {
	        	
	        }
	    };
	}]);
});