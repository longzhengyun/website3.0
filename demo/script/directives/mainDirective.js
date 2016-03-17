define(['app'], function(myApp){
	myApp.directive('mainDirective', [function ($location) {
	    return {
	        restrict: 'AE',
	        templateUrl: 'views/main.html',
	        replace: true,
	        link: function (scope, element, attrs) {
	        	
	        }
	    };
	}]);
});