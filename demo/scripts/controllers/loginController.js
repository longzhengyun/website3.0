app.controller('loginController', ['$scope', 'loginService', function($scope, loginService) {
	$scope.localData = loginService.localData(); //获取本地用户数据
	$scope.loginStep = {
		firstVisit: false,
		moreVisit: false
	};
	$scope.loginForm = {
		userName: '',
		userPassword: '',
		confirmPassword: '',
		loginPassword: '',
		loginFailed: false
	};
	if ($scope.localData.visitNum == 0) {
		$scope.loginStep.firstVisit = true;
		$scope.setPassword = false;
		$scope.loginSubmit = function() {
			loginService.loginIn($scope.loginForm.userName, $scope.loginForm.userPassword); //登录 跳转到内容界面
		};
	} else {
		$scope.loginStep.moreVisit = true
		if ($scope.localData.userPassword == '') {
			loginService.loginIn($scope.localData.userName, $scope.localData.userPassword); //登录 跳转到内容界面
		} else {
			$scope.oneself = 'not';
			$scope.oneselfChange = function(key) {
				$scope.oneself = key;
			};
			$scope.loginSubmit = function() {
				if ($scope.oneself == 'not') {
					// localService.set('visitNum', 0);
					// localService.set('loginState', false);
					// $state.go('login', {
					// 	reload: true
					// }); //跳转到登录界面
				} else {
					if ($scope.loginForm.loginPassword == $scope.loginForm.userPassword) {
						loginService.loginIn($scope.loginForm.userName, $scope.loginForm.userPassword); //登录 跳转到内容界面
						// localService.set('visitNum', parseInt($scope.visitNum) + 1);
						// localService.set('loginState', true);
						// $state.go('content'); //跳转到内容界面
					} else {
						$scope.loginForm.loginFailed = true;
					}
				}
			};
		}
	}
}]);