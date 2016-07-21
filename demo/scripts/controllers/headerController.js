app.controller('headerController', ['$scope', '$state', '$window', function($scope, $state, $window) {
	//获取header初始值
	$scope.initHeader = $scope.$parent.initHeader;

	//点击按钮切换页面
	$scope.goTarget = function(targetKey){
		$state.go(targetKey);
	};

	//点击按钮返回
	$scope.goBack = function(){
		$window.history.back();
	};

}]);