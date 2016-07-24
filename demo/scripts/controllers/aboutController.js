app.controller('aboutController', ['$scope', '$state', function($scope, $state) {
	//初始化
	$scope.initHeader = {
		title:'关于佳瑞网',
		btnBack:true,
		btnHome:true
	};

	//点击按钮切换页面
	$scope.goTarget = function(targetKey){
		$state.go(targetKey);
	};
}]);