app.controller('headerController', ['$scope', '$location', function($scope, $location) {
	//获取header初始值
	$scope.initHeader = $scope.$parent.initHeader;

	//点击菜单切换内容
	$scope.goTarget = function(targetKey){
		$location.path('/' + targetKey);//切换内容
	};

}]);