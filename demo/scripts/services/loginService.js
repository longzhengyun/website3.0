app.factory('loginService', ['$state', 'localService', function($state, localService) {
	return {
		localData: function() {
			var localData = localService.getObject('localData', '');
			return localData;
		},
		loginIn: function(userName, userPassword) {
			var localData = {
				userName: userName || '',
				userPassword: userPassword || '',
				loginState: true,
				visitNum: 1
			};
			localService.setObject('localData', localData);
			$state.go('content'); //已登录 跳转到内容界面
		},
		loginOut: function() {
			var localData = {
				userName: '',
				userPassword: '',
				loginState: false,
				visitNum: 0
			};
			localService.setObject('localData', localData);
			$state.go('login'); //未登录 跳转到登录界面
		}
	}
}])