app.controller('listController', ['$scope', 'userService', function($scope, userService) {
	//获取本地用户数据
	$scope.localData = userService.getLocalData();

	//获取登录用户数据
	angular.forEach($scope.localData.userData, function(value) {
		if (value.userCurrent == true) {
			$scope.userCurrent = {
				userName: value.userName,
				startDate: value.startDate,
				endDate: value.endDate,
				newDate: new Date()
			};
		}
	});

}]);