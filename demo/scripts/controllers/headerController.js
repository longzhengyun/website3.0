app.controller('headerController', ['$scope', 'loginService', function($scope, loginService) {
	$scope.localData = loginService.localData(); //获取本地用户数据
	if ($scope.localData.visitNum == 0) {
		loginService.loginOut(); //未登录 跳转到登录界面
	} else {
		if ($scope.localData.loginState == false) {
			loginService.loginOut(); //未登录 跳转到登录界面
		} else {
			loginService.loginIn($scope.localData.userName, $scope.localData.userPassword); //已登录 跳转到内容界面
			$scope.loginOut = function() {
				loginService.loginOut(); //退出 跳转到登录界面
			};
		};
	}
}]);