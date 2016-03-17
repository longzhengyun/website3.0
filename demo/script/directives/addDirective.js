define(['app'], function(myApp){
	myApp.directive('addDirective', [function ($location) {
	    return {
	        restrict: 'AE',
	        templateUrl: 'views/add.html',
	        replace: true,
	        link: function (scope, element, attrs) {
	        	
	        }
	    };
	}]);
});