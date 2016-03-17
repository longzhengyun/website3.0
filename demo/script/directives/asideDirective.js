define(['app'], function(myApp){
	console.log(myApp);
	myApp.directive('asideDirective', [function ($location) {
	    return {
	        restrict: 'AE',
	        templateUrl: 'views/aside.html',
	        replace: true,
	        link: function (scope, element, attrs) {
	        	
	        }
	    };
	}]);
});