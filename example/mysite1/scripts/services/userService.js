app.factory('userService', ['$state', 'localService', function($state, localService) {
	return {
		getLocalData: function() {
			return localService.getObject('localData', '');
		},
		setLocalDate: function(data) {
			localService.setObject('localData', data);
		},
		loginIn: function(keyword) {
			$state.go(keyword); //页面跳转
		},
		loginOut: function(keyword) {
			var localData = localService.getObject('localData', '');
			localData.loginState = false;
			localData.visitState = true;
			angular.forEach(localData.userData, function(value) {
				value.userCurrent = false;
			});
			localService.setObject('localData', localData);
			$state.go(keyword); //退出登录状态
		}
	}
}])