define(['app'], function(app){
	app.controller('mainController', ['$scope', function($scope){
		$scope.resolve = {
			delay: function($q) {
				var delay = $q.defer(),
				load = function(){
					$.getScript('/js/xxxxx.js',function(){
						delay.resolve();
					});
				};
				load();
				return delay.promise;
			}
		}
	}]);
});