app.controller('userController', ['$scope', 'userService', function($scope, userService) {
	//获取本地用户数据
	$scope.localData = userService.getLocalData();

	//获取登录用户数据
	angular.forEach($scope.localData.userData, function(value) {
		if (value.userCurrent == true) {
			$scope.userCurrent = {
				userName: value.userName,
				startDate: value.startDate,
				endDate: value.endDate
			};
		}
	});

	//默认表单数据
	$scope.loginForm = {
		userNameFailed: false,
		passwordFailed: false
	};

	//判断昵称是否使用
	$scope.used = function(userData, userName) {
		var result = 0;
		angular.forEach(userData, function(value) {
			if (value.userName == userName) {
				result++;
			}
		});
		if (result != 0) {
			return true;
		}
	};

	//保存数据
	$scope.saveData = function(userData) {
		$scope.localData.loginState = true; //设置登录状态为true
		$scope.localData.visitState = true; //设置访问状态为true
		$scope.localData.userData.push(userData); //插入用户数据
		userService.setLocalDate($scope.localData); //本地存储用户数据
	};

	//更新数据
	$scope.updateData = function(formData) {
		$scope.localData.loginState = formData.loginState; //更新登录状态
		$scope.localData.visitState = formData.visitState; //更新访问状态
		angular.forEach($scope.localData.userData, function(value) {
			if (value.userName == formData.userData.userName) {
				value.endDate = formData.userData.endDate;
				value.userCurrent = formData.userData.userCurrent;
			}
		});
		userService.setLocalDate($scope.localData); //本地存储用户数据
	};

	//登录
	$scope.loginSubmit = function() {
		var formData = {
			userCurrent: true,
			userName: $scope.loginForm.userName,
			userPassword: $scope.loginForm.userPassword || '',
			startDate: new Date(),
			endDate: new Date()
		};
		if (!$scope.localData.userData) {
			$scope.localData.userData = [];
			$scope.saveData(formData);
			userService.loginIn('main'); //登录 跳转到内容界面
		} else {
			if ($scope.used($scope.localData.userData, formData.userName)) {
				$scope.loginForm.userNameFailed = true;
			} else {
				$scope.saveData(formData);
				userService.loginIn('main'); //登录 跳转到内容界面
			}
		};
	};

	//选择昵称
	$scope.userNameChange = function(key) {
		$scope.userNameSelect = key;
		angular.forEach($scope.localData.userData, function(value) {
			if (value.userName == $scope.userNameSelect && value.userPassword != '') {
				$scope.userPasswordInput = true;
			} else {
				$scope.userPasswordInput = false;
			}
		});
	};

	$scope.userNameSelect = 'not'; //选择昵称 默认为没有
	$scope.userPasswordInput = false;//输入登录密码，默认隐藏

	//验证登录
	$scope.validateSubmit = function() {
		var formData = {
			loginState: $scope.localData.loginState,
			visitState: $scope.localData.visitState,
			userData: {
				userCurrent: true,
				userName: $scope.userNameSelect,
				loginPassword: $scope.loginForm.loginPassword || '',
				endDate: new Date()
			}
		};
		if (formData.userData.userName == 'not') {
			formData.visitState = false; //设置访问状态为false
			$scope.updateData(formData); //更新数据
			userService.loginIn('user'); //第一次访问 跳转到登录界面
		} else {
			angular.forEach($scope.localData.userData, function(value) {
				if (value.userName == formData.userData.userName) {
					if (value.userPassword == formData.userData.loginPassword) {
						formData.loginState = true; //设置登录状态为false
						$scope.updateData(formData); //更新数据
						userService.loginIn('main'); //登录 跳转到内容界面
					} else {
						$scope.loginForm.passwordFailed = true; //密码错误
					}
				}
			});
		}
	};

	//退出
	$scope.loginOut = function() {
		userService.loginOut('main'); //退出 跳转到内容界面
	};
}]);