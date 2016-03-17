define(['app'], function(app){
	app.directive('loginDirective', [function ($location) {
	    return {
	        restrict: 'AE',
	        templateUrl: 'views/login.html',
	        replace: true,
	        link: function (scope, element, attrs) {
	        	
	        }
	    };
	}]);
});