app.controller('resumeInfoController', ['$scope', '$state', 'dataService', 'resumePassService', function($scope, $state, dataService, resumePassService) {
	//优先判断是否有访问资格
	if(!resumePassService()){
		$state.go('validatePass');
	};

	//初始化
	$scope.initHeader = {
		title:'职业评价',
		btnBack:true,
		btnHome:true
	};

	//获取个人数据
	dataService.getData('user_data').success(function(data){
		$scope.resumeData = angular.fromJson(data.db_data[0].info);
	});
}]);