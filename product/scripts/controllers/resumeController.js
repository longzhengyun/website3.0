app.controller('resumeController', ['$scope', '$state', 'base64Service', 'dataService', 'resumePassService', 'RESUME_DATA', function($scope, $state, base64Service, dataService, resumePassService, RESUME_DATA) {
	//优先判断是否有访问资格
	if(!resumePassService()){
		$state.go('validatePass');
	};

	//初始化
	$scope.initHeader = {
		title:'个人简历',
		btnBack:true,
		btnHome:true
	};

	//获取个人数据
	dataService.getData(RESUME_DATA).success(function(data){
		$scope.resumeData = data;
		//base64解密数据
		angular.forEach(data.person, function(value, key){
			$scope.resumeData.person[key] = base64Service.base64(value);
		});
	});

	//点击按钮切换页面
	$scope.goTarget = function(targetKey){
		$state.go(targetKey);
	};
}]);