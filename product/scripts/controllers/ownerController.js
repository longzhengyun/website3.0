app.controller('ownerController', ['$scope', '$state', function($scope, $state) {
	//初始化
	$scope.initData = {
		itemName:'我的',
	};

	$scope.initHeader = {
		title:'我的'
	};

	//点击按钮切换页面
	$scope.goTarget = function(targetKey){
		$state.go(targetKey);
	};

}]);