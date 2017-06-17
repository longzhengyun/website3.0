app.controller('ownerController', ['$scope', '$state', 'RESUME_URL', function($scope, $state, RESUME_URL) {
	//初始化
	$scope.initData = {
		itemName:'我的',
	};

	$scope.initHeader = {
		title:'我的'
	};

	//点击按钮切换页面
	$scope.goTarget = function(targetKey){
		if(targetKey == 'resume'){
			window.location.href = RESUME_URL;//跳转resume
		}else{
			$state.go(targetKey);
		}
	};

}]);